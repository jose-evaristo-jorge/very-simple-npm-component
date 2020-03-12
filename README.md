This project is a NPM/React component.

All of component code is inside src folder.

There are two more folders with testing code.

The folder test-local contains a simple app that imports the component locally.

The folder test-prod contains a simple app that imports the component from NPM.

Both testing apps was created with create-react-app, but you could use other boilerplates.

The instructions to start the tests are inside each folder.

## Available Scripts

In the project directory, you can run:

### `npm install`
Install the dependencies.

### `npm run build`

This script creates a dist folder that will be published in npm.

### `npm publish` 

After you build and test the component, this command publish the component in NPM. Make sure that you set the version component in package.json.

### `npm link`

Before publish the component, it's very important to test it. For this, you can run this script in the main folder, and then, run `npm link very-simple-npm-component` inside test-local folder (or any folder in you local). These two comands willf create a symbolic link from component to node_modules folder inside test-local, and the component will be imported in app.
