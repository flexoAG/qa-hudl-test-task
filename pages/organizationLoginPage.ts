import { expect, Locator, Page } from '@playwright/test';

export class OrganizationLoginPage {
  readonly page: Page;
  readonly loginEl: Locator;
  readonly loginBtn: Locator;
  readonly backBtn: Locator;
  readonly formHeaderEl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEl = page.locator('.uni-input');
    this.loginBtn = page.getByTestId('log-in-with-sso');
    this.formHeaderEl = page.getByTestId('log-in-with-email-and-password');
    this.backBtn = page.getByTestId('go-back');
  }

  async login(email: string, pass: string) {
    await this.loginEl.fill(email);
    await this.loginBtn.click();
  }
}
