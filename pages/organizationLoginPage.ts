import { expect, Locator, Page } from '@playwright/test';

export class OrganizationLoginPage {
  readonly page: Page;
  readonly loginEl: Locator;
  readonly loginBtn: Locator;
  readonly errorMessageEl: Locator;
  readonly backBtn: Locator;

  readonly formHeaderEl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEl = page.locator('.uni-input__wrapper');
    this.loginBtn = page.getByTestId('log-in-with-sso');
    this.errorMessageEl = page.getByTestId('error-display');

    this.formHeaderEl = page.getByText('Log into Hudl with your Organization');
    this.backBtn = page.getByTestId('go-back');
  }

  async login(email: string, pass: string) {
    await this.loginEl.fill(email);
    await this.loginBtn.click();
  }
}
