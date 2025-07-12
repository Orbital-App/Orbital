# Orbital
App waarin je het periodieke systeem kan ontdekken.

## Tools
> Typescript + Vite + React

Basis: React (met React Navigation)<br>
UI-components en styling: [Tailwind](https://tailwindcss.com/docs/installation/using-vite)<br>
3D: [three.js](https://threejs.org/manual/)<br>
Data: [Periodic Table](https://github.com/Bowserinator/Periodic-Table-JSON)<br>
Animatie: [Lottie?](https://lottiefiles.com/)<br>
Windows: Electron <br>


## Structure
/pages
  - HomePage.tsx
  - ElementDetailPage.tsx
  - PeriodicTablePage.tsx
  - SettingsPage.tsx
  - SearchPage.tsx

/components
  - PeriodicTile.tsx
  - Header.tsx

/data
  - elements.json

## Installeren
Om de dependencies en packages te installeren doe je de volgende commands in de VS Code terminal. Zorg dat je in folder zit waar package.json aanwezig is. Ook moet je ingelogt zijn op de Github Pull extension in VS Code.
```bash
git clone https://github.com/Orbital-App/Orbital.git
cd Orbital
npm install
```

## Run app
Je kunt de app in development runnen met: ```npm run start```. Er zou dan een app moeten openen, dit is electon. Ook kan je de app sluiten en in de browser werken met Vite die ook opent, maar het komt uiteindelijk op hetzelfde neer. Om de app te builden voor productie, doe je: ```npm run build```.

## Design
We gebruiken Figma voor het design. Je kunt het huidige design [hier](https://www.figma.com/proto/fWhNZn8hZoLgM31EXnUJDz/Orbital?node-id=1-183&p=f&t=U7aaOaZebKMwMM80-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1) bekijken.
