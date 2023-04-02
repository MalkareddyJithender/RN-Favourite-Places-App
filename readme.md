### 13. Building React Native Apps without Expo

# 2. How Exactly does expo work ?

- we generally use "expo init" command to create a expo based react native project.

- here expo gives us an extra app called "Expo Go App".

- When working with expo project and during development, when code gets updated, then expo loads/injects
  updated code into Expo Go app and executes the code in that app.

- So that we instantly preview our changes in expo go app without building and publishing it.

- it makes development much easier and frictionless.

- You don't need to build real app executables during development.

- We can still build and publish standalone apps which are independent of expo go app.

## 3. Expo Alternatives

1. Expo Managed Workflow
2. Expo Bare Workflow
3. React Native CLI

# I> Expo Managed Workflow

- Easy to setup and work with

* It means we don't need to install X-tree and Android Studio to set up ios & android emulators.
* Because technically it is not needed to start with.
* we use "Expo Go App" to preview our react native application on our real device.
* If we install X-tree and Android studio also don't need any extra configuration.

- Quick & Friction less development with Expo Go App.

- No or little configuration is required when we are working with third party expo packages related to
  native device features.

- We can build cross-platform standalone apps.

# II> Expo Bare Workflow

- when we want to write our own native code in swift or objectivec or kotlin or java and mix up with react
  native code then it is preferrable.

- when we want more control over code and more configuration is to be done, this is preferred.

- If we want to use expo packages in an existing react native project created with react native CLI,
  then we can convert this into "Expo Bare Workflow".

- relatively easy to setup and work with.

- convenient development. (Expo Go App is not supported in this workflow)

- some configuration is required when we are working with third party expo packages related to
  native device features.

- We can build cross-platform standalone apps.

NOTE: expo packages are only supported in "Expo Managed Worflow" & "Expo Bare Workflow".

# III> React Native CLI

- It is a command line interface provided by react native team itself.

- we usually use it to create a barebones react native project without expo.

- Complex set up and work with.

* installing X-tree and Android Studio
* some configuration needed after X-tree and Android Studio were installed.
* one time set up only.
* Expo Go App is not supported here.

- Convenient Development.

- more configuration is required when we are working with third party packages related to
  native device features.

- stand alone apps are built locally.

* on windows machine, we can't build iOS apps.
* Apple doesn't allows this.

NOTE : we can also use third party packages which are not expo packages for native device features.
but more configuration needs to be done.

### 8. Creating Projects with React Native CLI

- I-way :

* npx react native init RNNoExpo.

- II-way (alternative approach) :

* npm install -g react-native-cli
* react native init RNNoExpo

- cmd : npm run android

* it builds code in android mode.

- cmd : npm run ios

* it builds code in ios mode.

NOTE : building the code takes time.
