# mobile-dev-lab

## University course: Mobile Development

### Lab 1

Build an application with [Firebase Authentication](https://firebase.google.com/)

## First time?

Before moving to the next section, make sure you have [Node.js](https://nodejs.org/en/download/) installed.

You need the Expo CLI for testing the application. To install expo use: 

<code>npm install -g expo-cli</code>

### Set up VS Code as React Native IDE (optional)

Go to Extensions(Ctrl+Shift+X)

Install following packages:

<code>React Native Tools</code>

<code>ES7 React/Redux/GraphQL/React-Native snippets</code>

Additional UI packages:

<code>vscode-icons</code>

### Set up Atom as React Native IDE (optional)

Go to Edit -> Preferences -> Install

Install following packages:

<code>atom-ide-ui</code>

<code>ide-flowtype</code>

<code>ide-typescript</code>
(disable diagnostics)

<code>atom-react-native-style</code>

<code>language-babel</code>

<code>prettier-atom</code>

<code>file-icons</code>

<code>atom-react-native-debugger</code>

## Project Structure

<code>src</code> is the directory for development:

- src
  - components
  - config
  - constants
  - screens
  - styles
  - App.js

## Running the mobile application

Download required dependencies with:
<code>npm install</code>

Start a development server with:
<code>npm start</code>

Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same local network as your computer. Use the Expo app to scan the QR code from your terminal (or opened browser tab) to open the project.

Alternatively, you may prefer to use [Expo Snack](https://snack.expo.io/) to run Expo applications directly in your browser.

**_IMPORTANT!_** In order to use Firebase, make sure you created configuration file at <code>src/config/firebaseConfig.json</code>.
Link at my <code>firebaseConfig.json</code> is [here](https://drive.google.com/file/d/1LAeDPq5JOZjm9srmnToakuDt_R_ScswB/view?usp=sharing)

## Development Requirements

### Commits

Clearly explain new features and/or main changes in commit meassages.
Also follow [the commit convention](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

