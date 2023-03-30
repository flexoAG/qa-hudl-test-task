import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { HelpPage } from '../pages/helpPage';

//Should have all UI element visible on Login page
test.only('should check UI elements', async ({ page }) => {

  const homePage = new HomePage(page);
  await homePage.goto();

  // Click login button.
  await homePage.loginBtn.click();
  await homePage.hudlChevronBtn.hover();
  await homePage.hudlChevronBtn.click();

  //Expect to have needed UI elements visible.
  const loginPage = new LoginPage(page);

  await expect(loginPage.signUpBtn).toBeVisible();
  await expect(loginPage.hudlLogoEl).toBeVisible();
  await expect(loginPage.emailLabel).toHaveText('Email');
  await expect(loginPage.passwordLabel).toHaveText('Password');
  await expect(loginPage.loginBtn).toHaveText('Log In');
  await expect(loginPage.rememberMeCheckBtn).toHaveText('Remember me');
  await expect(loginPage.needHelpBtn).toHaveText('Need help?');
  await expect(loginPage.organizationLogin).toHaveText('Log In with an Organization');

  //Click "Need Help" button and check the text
  await loginPage.needHelpBtn.click();
  const helpPage = new HelpPage(page);
  await expect(helpPage.firstHeader).toBeVisible();
  await expect(helpPage.secondHeader).toBeVisible();
  await expect(helpPage.thirdHeader).toBeVisible();

  //Exit to home page, and check that it's loaded
  await helpPage.backBtn.click();
  await expect(loginPage.loginBtn).toBeVisible();



});
