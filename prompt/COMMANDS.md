# Befehle

## Entwicklung

```bash
# Storybook starten (Komponenten-Dokumentation)
yarn storybook
```

## Build

```bash
# CSS aus Tailwind generieren (alle Packages)
yarn build:css

# Alle Packages bauen
yarn build

# Einzelnes Package bauen
yarn workspace @material-wc/core build
yarn workspace @material-wc/buttons build
```

## Testing

```bash
# Tests im Watch-Mode ausführen
yarn test

# Tests einmalig ausführen
yarn test:run
```

## Neue Komponente hinzufügen

1. CSS-Datei erstellen: `packages/<package>/src/<component>/<component>.src.css`
2. TypeScript-Datei erstellen: `packages/<package>/src/<component>/<component>.ts`
3. Export in `packages/<package>/src/index.ts` hinzufügen
4. CSS bauen: `yarn build:css`
5. Story erstellen: `apps/storybook/stories/<component>.stories.ts`

## Neues Package hinzufügen

1. Verzeichnis erstellen: `packages/<name>/`
2. `package.json` erstellen (siehe `packages/buttons/package.json` als Vorlage)
3. `tsconfig.json` erstellen
4. `vite.config.ts` erstellen
5. `src/index.ts` erstellen
6. Dependencies installieren: `yarn install`
7. Alias in Storybook hinzufügen: `apps/storybook/.storybook/main.ts`

## Git

**Wichtig:** Nicht automatisch pushen! Nur committen, der Nutzer entscheidet wann gepusht wird.

```bash
# Status anzeigen
git status

# Änderungen committen (NICHT automatisch pushen!)
git add .
git commit -m "feat: Beschreibung"

# Pushen (nur auf explizite Anfrage des Nutzers)
git push
```
