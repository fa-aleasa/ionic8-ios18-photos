https://github.com/fa-aleasa/ionic8-ios18-photos/actions

//-----------------------------------------

Angular CLI: 18.2.12
Node: 22.11.0
Package Manager: npm 10.9.0
OS: darwin arm64

//-----------------------------------------

- Go to your new project: cd ./ios18-photos
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config
--copy
- Explore the Ionic docs for components, tutorials, and more:
https://ion.link/docs


//-----------------------------------------
Test by emulators:

ionic cap run android -l --external
ionic cap run ios -l --external

OR:

npm run start

npx cap open ios
npx cap open android
