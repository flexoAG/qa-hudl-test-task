import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";


const emailTests = [
  {
    testName: "without @",
    value: "TestinGgmail.com",
  },
  {
    testName: "with two @ signs",
    value: "TestinG@@gmail.com",
  },
  {
    testName: "with injected link",
    value: "https://www.hudl.com/login@gmail.com",
  },
  {
    testName: "without a domain (.com/.net/.co.uk)",
    value: "https://www.hudl.com/login@gmail.com",
  },
];

//Should not be able to login with not accepted User name values
emailTests.forEach((i) => {
  test(`should check email field ${i.testName}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Click login button
    await homePage.loginBtn.click();

    //Enter Email and password and click Log in
    const loginPage = new LoginPage(page);
    await loginPage.loginEl.fill(i.value);
    await loginPage.passwordEl.fill(process.env.PASSWORD!);
    await loginPage.loginBtn.click();
    await expect(loginPage.errorMessageEl).toBeVisible();
    await expect(loginPage.errorMessageEl).toHaveText(
      "We didn't recognize that email and/or password.Need help?"
    );
  });
});

//Should not be able to login with incorrect password
test("should check incorrect password entry", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click login button
  await homePage.loginBtn.click();

  //Enter Email and password and click Log in
  const loginPage = new LoginPage(page);
  await loginPage.loginEl.fill(process.env.EMAIL!);
  await loginPage.passwordEl.fill("WRONGPASSWORD");
  await loginPage.loginBtn.click();
  await expect(loginPage.errorMessageEl).toBeVisible();
  await expect(loginPage.errorMessageEl).toHaveText(
    "We didn't recognize that email and/or password.Need help?"
  );
});
