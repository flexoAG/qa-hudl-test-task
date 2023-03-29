import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly hudlChevronBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.getByTestId('login-select');
    this.hudlChevronBtn = page.getByTestId('login-hudl');
  }

  async goto() {
    await this.page.goto('https://www.hudl.com/en_gb/');
  }
}
