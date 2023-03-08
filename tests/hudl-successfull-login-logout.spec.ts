import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { MainPage } from '../pages/mainPage';

test('should be able to login then logout succesfully', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click login button.
  await homePage.loginBtn.click();

  //Enter Email, Password and click Log in.
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/home/);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Home - Hudl');

  //Main pages has loaded with Notification and Home icons.
  const mainPage = new MainPage(page);
  await expect(mainPage.navHome).toBeVisible();
  await expect(mainPage.navNotifications).toBeVisible();

  //Log out back to Home page
  await mainPage.navChevronBtn.hover();
  await mainPage.dropDownMenuLogOutBtn.click();
  await expect(homePage.loginBtn).toBeVisible();
});
