# Universal App Example using React Native for Vision Pro and IPhone (VisionOS and iOS)

This repository contains a universal application example developed using React Native for Vision Pro and iPhone (VisionOS and iOS). It is inspired by [Apple's Hello World example for VisionOS](https://developer.apple.com/documentation/visionos/world). Please note that this example is intended for educational and demonstration purposes and is not ready for production use. All the code is provided as-is and is not supported by Apple or Facebook. Assets used in this example are provided by Apple and are not owned by the author of this repository.

**You can [check videos below](#videos) to see the application in action**

## Features

- **Universal Application**: This application is designed to run on both Vision Pro and iPhone devices (possibly on iPad as well).
- **React Native**: The application is developed using React Native, a popular framework for building cross-platform applications.
- **60 FPS**: The application is designed to run at 60 frames per second (FPS) on both Vision Pro and iPhone devices to create a smooth user and native experience.

## Missing Features

- [ ] 3D Models are not supported at the moment due to the lack of support for 3D models in React Native for VisionOS.
- [ ] Multi Window support is not working due to limitation of react-native-visionos library (p.s: [it is on the way](https://github.com/callstack/react-native-visionos/pull/117)).
- [ ] Immersive Space is not available yet, but it is on the way.

## Installation

- Install [Node.js](https://nodejs.org) (>=18) and [Yarn](https://yarnpkg.com) (3.6.4) if you haven't already.
- Install Watchman `brew install watchman` if you haven't already.
- For xcode, make sure that xcode is installed and the command line tools are installed by running `xcode-select --install` in your terminal.
- For xcode build, install ios-deploy `brew install ios-deploy`
- Enable corepack by running `corepack enable` in your terminal if you haven't already after Yarn installation.
- Restart your terminal to apply the changes. Then run `yarn set version 3.6.4` in the root directory to set the Yarn version.
- Start by navigating to the root directory and run `yarn` or `yarn install` to install the necessary packages.
- Next, navigate to the `visionos` folder and execute the following commands:
  - `bundle install` to install the necessary gems.
  - `bundle exec pod install` to install the required pods. _(installing boost and hermes engine packages take time)_
- Return to the root directory and enter the `ios` folder, repeating the steps above.
- Once again, return to the root directory and run `yarn visionos` and/or `yarn ios` to build and install the applications.
- After the application has been built, execute `yarn start` to launch the metro server in a separate terminal window.
- Finally, open the application on your device or simulator to see it in action.

## Videos

**Universal Apps in Action**

https://github.com/Sly777/MLVisionRN/assets/694940/9416c60f-e0e9-48d3-9b67-a2fd45662366

**Comparison between React Native App and Original Swift App**

https://github.com/monstar-lab-oss/MLVisionRN/assets/694940/74d42b6a-840b-451b-85fa-7a2aa99649c2

## Troubleshooting

If you encounter any issues during the installation or usage of this application, please refer to the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page. If you are unable to resolve the issue, please open an issue on this repository.

### Known Issues

> The "yarn-path" option has been set (in .../MLVisionRN/source/•yarnrc.yml), but the specified location doesn't exist

This issue occurs when the `yarn-path` option is set in the `yarnrc.yml` file, but the specified location does not exist. To resolve this issue, remove the `yarn-path` option from the `yarnrc.yml` file and then run `yarn set version 3.6.4` in the root directory to set the Yarn version.

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
- [React Native VisionOS](https://github.com/callstack/react-native-visionos) - the Open Source; GitHub **repository** for React Native VisionOS.
