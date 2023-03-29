import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
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
  test.skip(`should not be able to login when email field is ${i.testName}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Click login button
    await homePage.loginBtn.click();

    //Click "Log In with an Organization" button
    const loginPage = new LoginPage(page);
    await loginPage.organizationLogin.click();

    //Enter Email and click Log in
    const organizationLoginPage = new OrganizationLoginPage(page);
    await organizationLoginPage.loginEl.fill(i.value);
    await organizationLoginPage.loginBtn.click();

    // const errorMessage = driver.findElement(By.locator(".uni-input")).getAttribute("validationMessage");
    // await expect(organizationLoginPage.errorMessageEl).toBeVisible();
    // await expect(organizationLoginPage.errorMessageEl).toHaveText(i.errorMessage);
  });
});
