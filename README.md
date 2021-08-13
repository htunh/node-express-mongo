# NODE-STARTER

This project provide api for Thuwana-Q BACKEND.

## Installation

Use `npm` or `yarn` to install the dependencies.

```bash
npm install
```

```bash
yarn install
```

## Running

This project use `nodemon` for hot reload, you need to install `nodemon` globally.

```bash
npm install -g nodemon
```

`env` from one of the administrators or leader and put it in root folder.

After that you can start running by

```bash
npm dev or yarn dev
```

## Git flow

`develop` -> `develop-release` -> `test-release` -> `production` -> `production-release`

If you are adding a new feature or fixing a bug, create a new branch from develop with the name format `{version}/{action}/{name}`.

Example.

Developing a feature of `register customer` in version 1, you branch name should be `v1/feature/registerCustomer`.

Changing a feature of `add phone number` in version 1, you branch name should be `v1/change/addPhoneNumber`.

Fixing a bug of `user is not saved in database` in version 1, you branch name should be `v1/bugFix/saveUserinDatabase`.

Merge Request

Please submit merge request once you have done the task.

Provide test case, postman collection or request.rest if you are developing an api
