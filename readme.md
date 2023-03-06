# Hudl login automation task project using Playwright TypeScript POM

I wanted to try something new, and Playwright is one of the 3 most popular test automation frameworks on the market  sharing top 3 with Selenium and Cypress.<br>

Playwright is constantly getting updates, community is growing and there always people happy to help you.<br>

I was working with TypeScript before, and I can keep using it with Playwright too.<br>

Playwright is very easy in installation and setup if I have to compare with Selenium and Cypress. It installs all needed browsers straight away in installation process, and later possible to choose which you prefer.<br>

Personally I really like codegen/Recorder feature, for easier way to get test base, for further editing. 
Inbuilt Trace feature helps a lot, when tests are failing, as it helps to see recorded video which helps with debuging.

As a still very fresh Playwright user, can’t say yet, what I would improve in this framework, or what is missing. 
___

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
