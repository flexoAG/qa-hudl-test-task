import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { OrganizationLoginPage } from '../pages/organizationLoginPage';

const emailTests = [
  {
    testName: 'without @',
    value: 'TestinGgmail.com',
    errorMessage: '',
  },
  {
    testName: 'with two @ signs',
    value: 'TestinG@@gmail.com',
    errorMessage: '',
  },
  {
    testName: 'with injected link',
    value: 'https://www.hudl.com/login@gmail.com',
    errorMessage: '',
  },
  {
    testName: 'without a domain (.com/.net/.co.uk)',
    value: 'TestinG@gmail',
    errorMessage: '',
  },
  {
    testName: 'with a + sign',
    value: 'TestinG+1@gmail',
    errorMessage: '',
  },
];

//Should not be able to login with not accepted User name values for Organization form
emailTests.forEach((i) => {
  test(`should not be able to login when email field is ${i.testName}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Click login button
    await homePage.loginBtn.click();

    //Enter Email and password and click Log in
    const loginPage = new OrganizationLoginPage(page);
    await loginPage.loginEl.fill(i.value);
    await loginPage.loginBtn.click();
    await expect(loginPage.errorMessageEl).toBeVisible();
    await expect(loginPage.errorMessageEl).toHaveText(i.errorMessage);
  });
});

//Should not be able to login with incorrect password
test('should check incorrect password entry', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click login button
  await homePage.loginBtn.click();

  //Enter Email and password and click Log in
  const loginPage = new LoginPage(page);
  await loginPage.loginEl.fill(process.env.EMAIL!);
  await loginPage.passwordEl.fill('WRONGPASSWORD');
  await loginPage.loginBtn.click();
  await expect(loginPage.errorMessageEl).toBeVisible();
  await expect(loginPage.errorMessageEl).toHaveText(
    "We didn't recognize that email and/or password.Need help?",
  );
});
