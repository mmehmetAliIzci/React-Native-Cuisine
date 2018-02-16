# Turkish Cuisine App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents


* [Prerequisites](#available-scripts)
* [Running](#running)


## Prerequisites

* `node`
* `npm`
* `create-react-native-app`

## Running


This project has its own MW that has to be run. To run it:

* `cd mw`
* `node server.js`

Since the App should Talk with the MiddleWare (your own localhost). Following configurations are needed:

* Get your localIP `ifconfig` (MAC) OR `ipconfg` (WINDOWS)
* `cd app/constants/appConstants`
* Change the root URL `withoutTrailingSlash` => `http://172.20.10.2:8099`
* `cd app`

### Run in your own Device

* run `npm start`
* get the QR and run in your Device as expo app


### Run in simulator

* `npm run ios`
* `npm run android`
