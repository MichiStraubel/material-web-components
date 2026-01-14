import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../../packages/textfields/src/text-field/text-field.js';

interface TextFieldArgs {
  variant: 'filled' | 'outlined';
  label: string;
  placeholder: string;
  value: string;
  type: string;
  disabled: boolean;
  required: boolean;
  readonly: boolean;
  error: boolean;
  errorText: string;
  supportingText: string;
  prefixText: string;
  suffixText: string;
  maxLength: number;
  hasLeadingIcon: boolean;
  hasTrailingIcon: boolean;
}

const meta: Meta<TextFieldArgs> = {
  title: 'MD3 Components/Text Fields/Text Field',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# MD3 Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Varianten

- **Filled:** Hat einen gefüllten Hintergrund mit Bottom-Indicator
- **Outlined:** Hat einen Rahmen ohne Hintergrundfüllung

## Features

- Floating Label Animation
- Leading/Trailing Icons
- Prefix/Suffix Text
- Supporting Text & Error Messages
- Character Counter
- Validation (pattern, minlength, maxlength, required)
- Multiple Input Types (text, email, password, number, textarea)

## Events

| Event | Beschreibung |
|-------|--------------|
| \`input\` | Bei jeder Wertänderung während der Eingabe |
| \`change\` | Wenn der Wert bestätigt wird (blur) |
| \`focus\` | Wenn das Feld Fokus erhält |
| \`blur\` | Wenn das Feld den Fokus verliert |

## Spezifikation

Detaillierte MD3-Spezifikation: [packages/textfields/SPEC.md](../packages/textfields/SPEC.md)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Die Variante des Text Fields',
      table: { defaultValue: { summary: 'filled' } },
    },
    label: {
      control: 'text',
      description: 'Das Floating Label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder-Text',
    },
    value: {
      control: 'text',
      description: 'Aktueller Wert',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'textarea'],
      description: 'Input-Typ',
      table: { defaultValue: { summary: 'text' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktiviert das Feld',
    },
    required: {
      control: 'boolean',
      description: 'Markiert das Feld als Pflichtfeld',
    },
    readonly: {
      control: 'boolean',
      description: 'Macht das Feld schreibgeschützt',
    },
    error: {
      control: 'boolean',
      description: 'Zeigt den Fehlerzustand an',
    },
    errorText: {
      control: 'text',
      description: 'Fehlermeldung',
    },
    supportingText: {
      control: 'text',
      description: 'Hilfetext unter dem Feld',
    },
    prefixText: {
      control: 'text',
      description: 'Text vor dem Input',
    },
    suffixText: {
      control: 'text',
      description: 'Text nach dem Input',
    },
    maxLength: {
      control: 'number',
      description: 'Maximale Zeichenanzahl (zeigt Counter)',
    },
    hasLeadingIcon: {
      control: 'boolean',
      description: 'Zeigt Leading Icon',
    },
    hasTrailingIcon: {
      control: 'boolean',
      description: 'Zeigt Trailing Icon',
    },
  },
  args: {
    variant: 'filled',
    label: 'Label',
    placeholder: '',
    value: '',
    type: 'text',
    disabled: false,
    required: false,
    readonly: false,
    error: false,
    errorText: '',
    supportingText: '',
    prefixText: '',
    suffixText: '',
    maxLength: 0,
    hasLeadingIcon: false,
    hasTrailingIcon: false,
  },
};

export default meta;
type Story = StoryObj<TextFieldArgs>;

const renderTextField = (args: TextFieldArgs) => {
  const leadingIcon = args.hasLeadingIcon
    ? html`<span slot="leading-icon" class="material-symbols-outlined">search</span>`
    : '';
  const trailingIcon = args.hasTrailingIcon
    ? html`<span slot="trailing-icon" class="material-symbols-outlined">cancel</span>`
    : '';

  return html`
    <md-text-field
      variant=${args.variant}
      label=${args.label}
      placeholder=${args.placeholder}
      value=${args.value}
      type=${args.type}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?readonly=${args.readonly}
      ?error=${args.error}
      error-text=${args.errorText}
      supporting-text=${args.supportingText}
      prefix-text=${args.prefixText}
      suffix-text=${args.suffixText}
      maxlength=${args.maxLength > 0 ? args.maxLength : ''}
    >
      ${leadingIcon}
      ${trailingIcon}
    </md-text-field>
  `;
};

export const Default: Story = {
  render: renderTextField,
  args: {
    label: 'Name',
    supportingText: 'Enter your full name',
  },
};

export const Filled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Name"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" supporting-text="We'll never share your email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Filled Text Fields haben einen gefüllten Hintergrund und einen Bottom-Indicator für den Fokus-Zustand.',
      },
    },
  },
};

export const Outlined: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="outlined" label="Username"></md-text-field>
      <md-text-field variant="outlined" label="Email" type="email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Phone" type="tel">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Outlined Text Fields haben einen Rahmen und kein Hintergrundfüllung. Das Label schwebt beim Fokus in den Rahmen.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Search">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
        <span slot="trailing-icon" class="material-symbols-outlined">mic</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Password" type="password">
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields können Leading und Trailing Icons haben. Icons sind 24dp groß.',
      },
    },
  },
};

export const PrefixAndSuffix: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Price" type="number" prefix-text="$" suffix-text=".00"></md-text-field>
      <md-text-field variant="outlined" label="Weight" type="number" suffix-text="kg"></md-text-field>
      <md-text-field variant="filled" label="Website" prefix-text="https://"></md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Prefix und Suffix Text erscheinen direkt vor bzw. nach dem Input-Wert.',
      },
    },
  },
};

export const SupportingText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Username"
        supporting-text="Choose a unique username"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        supporting-text="Tell us about yourself"
        maxlength="200"
        value="I'm a software developer..."
      ></md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Supporting Text bietet zusätzliche Informationen oder Hinweise. Mit `maxlength` wird ein Character Counter angezeigt.',
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Email"
        type="email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      >
        <span slot="trailing-icon" class="material-symbols-outlined">error</span>
      </md-text-field>
      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        value="123"
        error
        error-text="Password must be at least 8 characters"
      ></md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Der Error-Zustand zeigt Validierungsfehler an. Die `error-text` ersetzt die `supporting-text` im Fehlerfall.',
      },
    },
  },
};

export const DisabledAndReadonly: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Disabled"
        value="Cannot edit"
        disabled
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Readonly"
        value="Read only value"
        readonly
      ></md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Disabled Fields sind nicht interaktiv. Readonly Fields zeigen einen Wert an, der nicht bearbeitet werden kann.',
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Text" type="text" value="Hello World"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" placeholder="user@example.com">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password" value="secret123">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
      <md-text-field variant="filled" label="Number" type="number" min="0" max="100" step="5" value="50"></md-text-field>
      <md-text-field variant="filled" label="Phone" type="tel" placeholder="+49 123 456789">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
      <md-text-field variant="filled" label="Search" type="search" placeholder="Search...">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
      </md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields unterstützen verschiedene Input-Typen: text, email, password, number, tel, url, search.',
      },
    },
  },
};

export const Textarea: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <md-text-field
        variant="filled"
        label="Description"
        type="textarea"
        rows="4"
        supporting-text="Describe your project in detail"
        maxlength="500"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Comments"
        type="textarea"
        rows="3"
        placeholder="Leave a comment..."
      ></md-text-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Mit `type="textarea"` wird ein mehrzeiliges Textfeld gerendert. Die Höhe kann mit `rows` gesteuert werden.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: var(--color-surface); border-radius: 12px;">
      <h3 style="margin: 0; color: var(--color-on-surface);">Create Account</h3>

      <md-text-field
        variant="outlined"
        label="Full Name"
        required
        supporting-text="As it appears on your ID"
      >
        <span slot="leading-icon" class="material-symbols-outlined">person</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Email"
        type="email"
        required
      >
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        required
        supporting-text="At least 8 characters"
        minlength="8"
      >
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Phone"
        type="tel"
        prefix-text="+49"
      >
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        rows="3"
        maxlength="200"
        supporting-text="Tell us about yourself"
      ></md-text-field>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px;">
        <md-button variant="text">Cancel</md-button>
        <md-button variant="filled">Create Account</md-button>
      </div>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Ein vollständiges Formular-Beispiel mit verschiedenen Text Field Konfigurationen.',
      },
    },
  },
};

export const Comparison: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Filled</h4>
        <md-text-field variant="filled" label="Default"></md-text-field>
        <md-text-field variant="filled" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="filled" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="filled" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="filled" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Outlined</h4>
        <md-text-field variant="outlined" label="Default"></md-text-field>
        <md-text-field variant="outlined" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="outlined" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="outlined" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="outlined" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Direkter Vergleich zwischen Filled und Outlined Varianten in verschiedenen Zuständen.',
      },
    },
  },
};
