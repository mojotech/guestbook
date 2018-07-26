# Guestbook README

This project is a React Native 0.55.4 app.

### Getting ready

- `yarn install`
- download XCode for the iOS simulator

### Start it up

- `yarn run ios`

Opens the app in the iOS Simulator if on a Mac and have XCode installed. Can specify the hardware by clicking the "Hardware" tab while running the simulator or by adding the hardware name as a flag, `yarn run ios simulator="<hardware>"`

- `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start --reset-cache
```

### Environment Variables

We are using react-native-config for environment variables. 

- Create a .env file in the root directory
- Copy the .env.sample in source control to your .env file
- If a variable has a message like "get token", then replace that message with the real specified token

Usage:

If a variable is defined as `SLACK_BOT_TOKEN` in .env:

```
import Config from 'react-native-config';

const token = Config.SLACK_BOT_TOKEN;
```

### Designs
