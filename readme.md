# Hudl login automation task project using Playwright TypeScript

## Preparations

1. Install node version v19

    [Download node.js](https://nodejs.org/en/)

2. Checkout project 
3. Install dependecies run: 
```sh
npm i
```
4. Add your valid user credentials to `.env` file in the project route
```sh
//Your valid user email and password
EMAIL=""
PASSWORD=""
```

## To launch all tests run:

```sh
npm run test  
```

## To run a particular test run:
```sh
npx playwright test test-name.spec.ts
```

## To open last Html report run:

```sh
npx playwright show-report
```
