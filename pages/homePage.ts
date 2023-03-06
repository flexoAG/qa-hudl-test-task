import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.getByTestId("login");
  }

  async goto() {
    await this.page.goto("https://www.hudl.com/en_gb/");
  }
}
