# Large Lifting Model

This is a frontend application which connects to a backend that stores user information and can send requests to the Google Gemini LLM to create custom workouts.

## Getting Started

### Before Downloading This Repo

-  Install [Node.js](https://nodejs.org/en/download/package-manager)
-  Once Node is installed, use command `npm install react-router-dom` to install react router.
-  Install the [ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Running the Project Locally

-  Once Node and React Router are installed, clone this repo to your local computer.
-  Run the project with the command `npm run dev`.
-  By default, this uses the live production backend.

### Running and connecting to the localhost test server
- Once you can run using 'npm run dev', you can try launching the test server in a separate terminal window.
- Open new terminal window, navigate to largeliftingmodel directory, and do command 'npm run testserver'
- Should show "JSON Server started on PORT :3885" to reflect the server is up (it will show you which endpoints are accessible to the code or through manually entering in browser)
- in a SEPARATE terminal window, navigate to largeliftingmodel directory and do command 'npm run dev2testserver'
- This will look equivalent to 'npm run dev' mode except that it uses the testserver instead of the live production backend.
- To add another endpoint to the testserver, close the server and edit the testdb.json file (you may need to manually change it to writable with something like sudo chmod 777 testdb.json first) to add another top level object type in the form that was used for 'profile', with id = "seed".  This will create the new endpoint in the server.  Then edit the APPAPI.js code to add another 'pageName' to 'TestRoutes' and 'ProdRoutes' in the same form that was used for the PROFILE pageName.

**(If Using ESLint) Configure ESLint**

ESLint needs to be configured for each new vite project. Before running the project for the first time, do the following:

1. Run `npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev`
1. Create `.eslintrc.json` and create an object:
   ```
   {
       "extends":"react-app"
   }
   ```
1. In `vite.config.js` add an import `import eslint from "vite-plugin-eslint";` and add `eslint()` to the plugins array. The entire config file should now look like this:

   ```
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import eslint from "vite-plugin-eslint";

   // https://vitejs.dev/config/
   export default defineConfig({
       plugins: [react(), eslint()],
   })
   ```

## Commands Used to Build This Repo With Vite

1. `npm create vite@latest` creates the project. Choose options `React` -> `JavaScript`.
1. Install dependencies with `npm i` in the root folder.

## React + Vite (Autogenerated)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Tom's test change here
Tom's second test change here
