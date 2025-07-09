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


## Run app
Download Expo Go op je telefoon, of installeer [Android Virtual Device (AVD) en Android SDK](https://developer.android.com/studio) als je het op je PC wilt runnen.<br>
Doe dan ```npm start```

## Design
We gebruiken Figma voor het design. Je kunt het huidige design [hier](https://www.figma.com/proto/fWhNZn8hZoLgM31EXnUJDz/Orbital?node-id=1-183&p=f&t=U7aaOaZebKMwMM80-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1) bekijken.