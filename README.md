# VueJsCordova_Base
A empty VueJs and Cordova project

# Step to run this project

1. npm install
2. cordova platform add ios
3. cordova platform add android@8.1.0

### prepare icon and splash screen images

1. go to config.xml
2. find all the <icon> and <splash> tags
3. prepare the correct size of image and save it to the correct path
4. size can be found [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)

### run the in ios / xcode
1. npm run dev
2. cordova prepare ios
3. go to xcode
4. select device
5. hit run

### run the project in android
1. npm run dev
2. cordova emulate android

### build android apk
1. npm run dev
2. cordova build android --debug

## Steps to remove platforms / upgrade or downgrade the version of platforms
1. cordova platform rm ios
2. cordova platform rm android
