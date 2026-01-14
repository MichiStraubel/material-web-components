# MD3 Forms Package - Konzept

## Übersicht

Ein Form-Validation Package für die Material Web Components Library, das auf **Effect/Schema** basiert und Field-by-Field-Validation unterstützt.

## Entscheidungen

| Aspekt | Entscheidung |
|--------|--------------|
| **Scope** | Vollständig: Controller + md-form + Lit Directive |
| **i18n** | Schema-Messages only (Messages direkt im Schema definiert) |
| **Async Validation** | Debounced (300ms) mit Loading-State und AbortController |
| **FieldArrays** | Von Anfang an unterstützt |

## Ziele

1. **Deklarative Schema-Definition** mit Effect/Schema
2. **Field-by-Field Validation** mit sofortigem Feedback
3. **Framework-agnostisch** - funktioniert mit Vanilla JS, Lit, Vue, React
4. **MD3 Integration** - nahtlose Verbindung mit `md-text-field` und anderen Inputs
5. **TypeScript-first** - volle Typsicherheit für Schemas und Formulardaten
6. **FieldArrays** - Dynamische Listen mit append, remove, move

## Architektur

```
@material-wc/forms
├── FormController        # Kern-Logik (framework-agnostisch)
├── FieldArrayController  # Dynamische Listen
├── FormValidator         # Effect/Schema Integration
├── md-form               # Wrapper-Komponente
└── field directive       # Lit-Directive für einfache Bindung
```

## API Design

### 1. Schema Definition (Effect/Schema)

```typescript
import { Schema } from 'effect';

// Einfaches Schema
const UserSchema = Schema.Struct({
  username: Schema.String.pipe(
    Schema.minLength(3, { message: () => 'Mindestens 3 Zeichen' }),
    Schema.maxLength(20, { message: () => 'Maximal 20 Zeichen' }),
  ),
  email: Schema.String.pipe(
    Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: () => 'Ungültige E-Mail' }),
  ),
  age: Schema.optional(Schema.Number.pipe(
    Schema.greaterThan(0, { message: () => 'Alter muss positiv sein' }),
  )),
});

// Mit FieldArray
const OrderSchema = Schema.Struct({
  customer: Schema.String.pipe(Schema.minLength(1)),
  items: Schema.Array(Schema.Struct({
    product: Schema.String.pipe(Schema.minLength(1, { message: () => 'Produkt erforderlich' })),
    quantity: Schema.Number.pipe(Schema.greaterThan(0, { message: () => 'Mindestens 1' })),
    price: Schema.Number.pipe(Schema.greaterThanOrEqualTo(0)),
  })).pipe(Schema.minItems(1, { message: () => 'Mindestens ein Artikel' })),
});

// Cross-Field Validation
const PasswordSchema = Schema.Struct({
  password: Schema.String.pipe(Schema.minLength(8)),
  confirmPassword: Schema.String,
}).pipe(
  Schema.filter(
    (data) => data.password === data.confirmPassword,
    { message: () => 'Passwörter stimmen nicht überein' }
  ),
);

// Typen werden automatisch abgeleitet
type User = Schema.Schema.Type<typeof UserSchema>;
// { username: string; email: string; age?: number }
```

### 2. FormController API

```typescript
import { FormController } from '@material-wc/forms';

interface FormControllerOptions<T> {
  // Wann wird validiert?
  validateOn: 'input' | 'blur' | 'change' | 'submit';

  // Nach erstem Fehler: wann revalidieren?
  revalidateOn: 'input' | 'blur' | 'change';

  // Debounce für Input-Validation (ms)
  debounce?: number; // Default: 300

  // Initiale Werte
  initialValues?: Partial<T>;

  // Async Validatoren (mit automatischem Debounce & AbortController)
  asyncValidators?: {
    [K in keyof T]?: (value: T[K], signal: AbortSignal) => Promise<string | undefined>;
  };
}

class FormController<T> {
  constructor(schema: Schema.Schema<T>, options?: FormControllerOptions<T>);

  // ============================================
  // Feld-Registrierung
  // ============================================

  /** Registriert ein Element für ein Feld */
  register(name: keyof T, element: HTMLElement): void;

  /** Entfernt Registrierung */
  unregister(name: keyof T): void;

  // ============================================
  // Werte
  // ============================================

  /** Gibt Wert eines Feldes zurück */
  getValue<K extends keyof T>(name: K): T[K] | undefined;

  /** Setzt Wert eines Feldes */
  setValue<K extends keyof T>(name: K, value: T[K]): void;

  /** Gibt alle aktuellen Werte zurück */
  getValues(): Partial<T>;

  /** Setzt mehrere Werte */
  setValues(values: Partial<T>): void;

  /** Setzt Formular auf Initialwerte zurück */
  reset(): void;

  // ============================================
  // Validierung
  // ============================================

  /** Validiert gesamtes Formular */
  validate(): Promise<boolean>;

  /** Validiert einzelnes Feld */
  validateField(name: keyof T): Promise<boolean>;

  // ============================================
  // Fehler
  // ============================================

  /** Gibt Fehler für ein Feld zurück */
  getError(name: keyof T): string | undefined;

  /** Gibt alle Fehler zurück */
  getErrors(): Partial<Record<keyof T, string>>;

  /** Setzt manuell einen Fehler */
  setError(name: keyof T, message: string): void;

  /** Löscht Fehler für ein Feld */
  clearError(name: keyof T): void;

  /** Löscht alle Fehler */
  clearErrors(): void;

  // ============================================
  // Status
  // ============================================

  /** Wurde Feld/Formular geändert? */
  isDirty(name?: keyof T): boolean;

  /** Wurde Feld/Formular berührt (focus+blur)? */
  isTouched(name?: keyof T): boolean;

  /** Ist Formular gültig? */
  isValid(): boolean;

  /** Läuft gerade Async-Validation? */
  isValidating(name?: keyof T): boolean;

  // ============================================
  // Events (Reactive)
  // ============================================

  /** Feld-Änderung */
  onFieldChange(callback: (name: keyof T, value: unknown) => void): () => void;

  /** Feld-Fehler */
  onFieldError(callback: (name: keyof T, error: string) => void): () => void;

  /** Feld wieder gültig */
  onFieldValid(callback: (name: keyof T) => void): () => void;

  /** Async-Validation startet */
  onFieldValidating(callback: (name: keyof T, isValidating: boolean) => void): () => void;

  /** Formular gültig */
  onFormValid(callback: (data: T) => void): () => void;

  /** Formular ungültig */
  onFormInvalid(callback: (errors: Partial<Record<keyof T, string>>) => void): () => void;

  // ============================================
  // FieldArrays
  // ============================================

  /** Gibt FieldArrayController für ein Array-Feld zurück */
  getFieldArray<K extends keyof T>(name: K): FieldArrayController<T[K]>;

  // ============================================
  // Cleanup
  // ============================================

  /** Räumt alle Listener und AbortController auf */
  dispose(): void;
}
```

### 3. FieldArrayController API

```typescript
class FieldArrayController<T extends unknown[]> {
  /** Alle Items */
  get items(): T;

  /** Anzahl der Items */
  get length(): number;

  /** Fügt Item am Ende hinzu */
  append(item: T[number]): void;

  /** Fügt Item an Position ein */
  insert(index: number, item: T[number]): void;

  /** Fügt Item am Anfang ein */
  prepend(item: T[number]): void;

  /** Entfernt Item an Position */
  remove(index: number): void;

  /** Verschiebt Item */
  move(from: number, to: number): void;

  /** Tauscht zwei Items */
  swap(indexA: number, indexB: number): void;

  /** Ersetzt Item an Position */
  replace(index: number, item: T[number]): void;

  /** Leert das Array */
  clear(): void;

  /** Registriert Element für Array-Item-Feld */
  register(index: number, fieldName: string, element: HTMLElement): void;

  /** Gibt Fehler für Item-Feld zurück */
  getError(index: number, fieldName: string): string | undefined;
}
```

### 4. MD3 Integration (Automatisch)

Der Controller erkennt MD3-Komponenten und setzt automatisch die richtigen Properties:

```typescript
// Bei Registrierung
form.register('email', document.querySelector('md-text-field[name="email"]'));

// Automatische Bindung:
// - Liest value aus textField.value
// - Hört auf 'input' und 'blur' Events
// - Setzt textField.error = true/false
// - Setzt textField.errorText = 'Fehlermeldung'

// Bei Async-Validation:
// - Setzt textField.disabled = true während Validierung (optional)
// - Oder zeigt Loading-Indicator
```

### 5. md-form Wrapper-Komponente

```typescript
/**
 * @element md-form
 *
 * @fires md-submit - Formular erfolgreich validiert und abgeschickt
 * @fires md-error - Validierungsfehler aufgetreten
 * @fires md-change - Wert hat sich geändert
 */
@customElement('md-form')
class MdForm<T> extends LitElement {
  /** Effect/Schema für Validierung */
  @property({ attribute: false })
  schema?: Schema.Schema<T>;

  /** Wann validieren? */
  @property()
  validateOn: 'input' | 'blur' | 'change' | 'submit' = 'blur';

  /** Nach Fehler revalidieren bei... */
  @property()
  revalidateOn: 'input' | 'blur' | 'change' = 'input';

  /** Debounce in ms */
  @property({ type: Number })
  debounce = 300;

  /** Initiale Werte */
  @property({ attribute: false })
  initialValues?: Partial<T>;

  /** Async Validatoren */
  @property({ attribute: false })
  asyncValidators?: FormControllerOptions<T>['asyncValidators'];

  /** Zugriff auf Controller */
  get controller(): FormController<T>;

  /** Aktuellen Werte */
  get values(): Partial<T>;

  /** Manuell Submit triggern */
  submit(): Promise<void>;

  /** Formular zurücksetzen */
  reset(): void;
}
```

**Verwendung:**

```html
<md-form
  .schema=${UserSchema}
  .initialValues=${{ username: '' }}
  .asyncValidators=${{
    username: async (value, signal) => {
      const exists = await checkUsername(value, signal);
      return exists ? 'Username vergeben' : undefined;
    }
  }}
  @md-submit=${(e) => saveUser(e.detail)}
  @md-error=${(e) => console.log('Fehler:', e.detail)}
>
  <md-text-field name="username" label="Username"></md-text-field>
  <md-text-field name="email" label="Email" type="email"></md-text-field>

  <md-button type="submit" variant="filled">Speichern</md-button>
  <md-button type="reset" variant="text">Zurücksetzen</md-button>
</md-form>
```

### 6. Lit field Directive

```typescript
import { directive } from 'lit/directive.js';
import { field } from '@material-wc/forms';

class MyForm extends LitElement {
  private form = new FormController(UserSchema, {
    validateOn: 'blur',
    revalidateOn: 'input',
  });

  render() {
    return html`
      <md-text-field
        ${field(this.form, 'username')}
        label="Username"
      ></md-text-field>

      <md-text-field
        ${field(this.form, 'email')}
        label="Email"
        type="email"
      ></md-text-field>

      <md-button @click=${() => this.handleSubmit()}>
        Speichern
      </md-button>
    `;
  }

  private async handleSubmit() {
    if (await this.form.validate()) {
      const data = this.form.getValues();
      // Submit...
    }
  }
}
```

### 7. FieldArray Beispiel

```typescript
const OrderSchema = Schema.Struct({
  customer: Schema.String,
  items: Schema.Array(Schema.Struct({
    product: Schema.String.pipe(Schema.minLength(1)),
    quantity: Schema.Number.pipe(Schema.greaterThan(0)),
  })),
});

class OrderForm extends LitElement {
  private form = new FormController(OrderSchema);
  private items = this.form.getFieldArray('items');

  render() {
    return html`
      <md-text-field
        ${field(this.form, 'customer')}
        label="Kunde"
      ></md-text-field>

      <h3>Artikel</h3>
      ${this.items.items.map((item, index) => html`
        <div class="item-row">
          <md-text-field
            ${fieldArray(this.items, index, 'product')}
            label="Produkt"
          ></md-text-field>
          <md-text-field
            ${fieldArray(this.items, index, 'quantity')}
            label="Menge"
            type="number"
          ></md-text-field>
          <md-icon-button @click=${() => this.items.remove(index)}>
            <md-icon>delete</md-icon>
          </md-icon-button>
        </div>
      `)}

      <md-button @click=${() => this.items.append({ product: '', quantity: 1 })}>
        Artikel hinzufügen
      </md-button>
    `;
  }
}
```

## Async Validation Details

### Debounce & AbortController

```typescript
// Intern im FormController
class AsyncValidationManager {
  private controllers = new Map<string, AbortController>();
  private timeouts = new Map<string, number>();

  async validate(
    fieldName: string,
    value: unknown,
    validator: AsyncValidator
  ): Promise<string | undefined> {
    // 1. Vorherige Validation abbrechen
    this.abort(fieldName);

    // 2. Neuen AbortController erstellen
    const controller = new AbortController();
    this.controllers.set(fieldName, controller);

    // 3. Debounce
    return new Promise((resolve) => {
      const timeout = window.setTimeout(async () => {
        try {
          // 4. Validierung ausführen
          const error = await validator(value, controller.signal);
          resolve(error);
        } catch (e) {
          if (e.name === 'AbortError') {
            resolve(undefined); // Abgebrochen, kein Fehler
          }
          throw e;
        } finally {
          this.controllers.delete(fieldName);
        }
      }, this.debounceMs);

      this.timeouts.set(fieldName, timeout);
    });
  }

  abort(fieldName: string) {
    // Timeout clearen
    const timeout = this.timeouts.get(fieldName);
    if (timeout) {
      clearTimeout(timeout);
      this.timeouts.delete(fieldName);
    }

    // Request abbrechen
    const controller = this.controllers.get(fieldName);
    if (controller) {
      controller.abort();
      this.controllers.delete(fieldName);
    }
  }
}
```

### Loading State

```typescript
// Controller feuert Events
form.onFieldValidating((fieldName, isValidating) => {
  // MD3-Adapter setzt Loading-Indikator
  const element = this.getElement(fieldName);
  if (element instanceof MdTextField) {
    // Option 1: Trailing Icon ändern
    // Option 2: Supporting Text
    element.supportingText = isValidating ? 'Wird überprüft...' : '';
  }
});
```

## File Structure

```
packages/forms/
├── src/
│   ├── controller/
│   │   ├── form-controller.ts       # Haupt-Controller
│   │   ├── field-array-controller.ts # FieldArray Support
│   │   ├── field-state.ts           # Field-Status Management
│   │   ├── form-state.ts            # Form-Status Management
│   │   └── index.ts
│   ├── validation/
│   │   ├── schema-validator.ts      # Effect/Schema Integration
│   │   ├── async-validator.ts       # Async Validation mit Debounce
│   │   └── index.ts
│   ├── adapters/
│   │   ├── base-adapter.ts          # Adapter Interface
│   │   ├── md-text-field-adapter.ts # MD3 Text Field
│   │   ├── native-input-adapter.ts  # Native <input>
│   │   ├── adapter-registry.ts      # Automatische Erkennung
│   │   └── index.ts
│   ├── components/
│   │   ├── md-form/
│   │   │   ├── md-form.ts
│   │   │   ├── md-form.src.css
│   │   │   └── md-form.test.ts
│   │   └── index.ts
│   ├── directives/
│   │   ├── field.directive.ts       # field(form, 'name')
│   │   ├── field-array.directive.ts # fieldArray(items, index, 'field')
│   │   └── index.ts
│   ├── types.ts                     # Gemeinsame TypeScript Types
│   └── index.ts                     # Public API
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CONCEPT.md
└── SPEC.md
```

## Dependencies

```json
{
  "dependencies": {
    "@effect/schema": "^0.75.0",
    "effect": "^3.10.0",
    "@material-wc/core": "workspace:*"
  },
  "peerDependencies": {
    "lit": "^3.2.0"
  }
}
```

## Implementierungs-Reihenfolge

### Phase 1: Core
1. `FormController` Grundgerüst
2. `SchemaValidator` mit Effect/Schema
3. Field State Management (dirty, touched, errors)
4. MD3 TextField Adapter

### Phase 2: Async & Events
5. `AsyncValidator` mit Debounce & AbortController
6. Event System (onFieldError, onFormValid, etc.)
7. Loading State Integration

### Phase 3: FieldArrays
8. `FieldArrayController`
9. Array-Item Validation
10. Array-Level Validation (minItems, maxItems)

### Phase 4: Components & Directives
11. `md-form` Wrapper-Komponente
12. `field` Directive
13. `fieldArray` Directive

### Phase 5: Polish
14. Tests (Unit & Integration)
15. Dokumentation
16. Storybook Stories

## Referenzen

- [Effect/Schema Docs](https://effect.website/docs/schema/introduction)
- [React Hook Form](https://react-hook-form.com/) - API Inspiration
- [Formik FieldArray](https://formik.org/docs/api/fieldarray) - FieldArray Inspiration
