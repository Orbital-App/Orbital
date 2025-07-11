# Orbital
App waarin je het periodieke systeem kan ontdekken.

## Tools
> Typescript + Vite

Basis: React Native (met React Navigation) + [Expo](https://expo.dev/)<br>
UI-components: [Tailwind (nativewind)](https://www.nativewind.dev/)<br>
3D: [expo three](https://github.com/expo/expo-three)<br>
Data: [Periodic Table](https://github.com/Bowserinator/Periodic-Table-JSON)<br>
Animatie: [Lottie?](https://lottiefiles.com/)<br>


## Structure
/pages
  - HomePage.tsx
  - ElementDetailPage.tsx
  - PeriodicTablePage.tsx

/components
  - PeriodicTile.tsx
  - ElementCard.tsx

/data
  - elements.json

## Installeren
Om de dependencies en packages te installeren doe je de volgende commands in de VS Code terminal. Zorg dat je in folder zit waar package.json aanwezig is. Ook moet je ingelogt zijn op de Github Pull extension in VS Code.
```
git clone https://github.com/Orbital-App/Orbital.git
cd Orbital
npm install
```

## Run app
Je kunt de app in development runnen met: ```npm run dev:full```. Er zou dan een app moeten openen, dit is electon. Ook kan je de app sluiten en in de browser werken met Vite, het komt uiteindelijk op hetzelfde neer. Om de app te builden voor productie, doe je: ```npm run build```.

## Design
We gebruiken Figma voor het design. Je kunt het huidige design [hier](https://www.figma.com/proto/fWhNZn8hZoLgM31EXnUJDz/Orbital?node-id=1-183&p=f&t=U7aaOaZebKMwMM80-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1) bekijken.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
