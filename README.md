# Project Boilerplate

This is a full-fledged boilerplate for a React frontend with a Node.JS backend. Both services are provided together for development ease, but can be easily splitted if desired.
Also contains useful tooling to ensure code quality, and a working unit and integration test setup.

## Setup

* `npm install`
* Refer to commands below & you're good to go!

## About the boilerplate

### Main features

* React front-end without `create-react-app`
* Service layer with `express`
* Webpack for bundling app; integrated with `express`
* All codebase in Typescript
* Ready for testing with Jest and Cypress
* EditorConfig setup
* ESLint integrated with Prettier for formatting and static code checking
* Husky set to run lint with --fix before each commit, guaranteeing code style adhesion

> Don't forget to add Prettier, ESLint and EditorConfig extensions to VSCode

### How it works

* It uses webpack to generate a bundle JS (basically a JS file that contains all project dependencies + code) and express to serve these files locally. Backend and front-end are currently integrated in the same server, but can be easily splitted in the future.
* Webpack uses BaseTemplate.html to generate the basic index.html file – be careful while doing changes there
* Application entry point for front-end is `index.tsx`. For backend, `index.ts`.
* The present functionality is a button that fires a request to the only endpoint registered in Backend, which is a Hello World.
* Generated bundle will be saved at `/dist`, but don't worry – let Webpack handle it :)

## Commands

`yarn start` bring up dev. server + build

`yarn test` run all unit tests

`yarn build` generates bundle + htmls

`yarn integration` runs cypress tests headless

`yarn integration:dev` opens cypress GUI

`yarn lint` runs eslint
