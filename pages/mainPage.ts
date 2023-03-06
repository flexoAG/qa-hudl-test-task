import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly navHome: Locator;
  readonly navNotifications: Locator;
  readonly navChevronBtn: Locator;
  readonly dropDownMenuLogOutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navHome = page.getByTestId("webnav-globalnav-home");
    this.navNotifications = page.getByTestId("webnav-globalnav-notifications");
    this.navChevronBtn = page.locator('.hui-globaluseritem__display-name');
    this.dropDownMenuLogOutBtn = page.getByRole('link', { name: 'Log Out' });
  }
}
