import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginEl: Locator;
  readonly passwordEl: Locator;
  readonly loginBtn: Locator;
  readonly errorMessageEl: Locator;

  readonly hudlLogoEl: Locator;
  readonly emailLabel: Locator;
  readonly passwordLabel: Locator;
  readonly rememberMeCheckBtn: Locator;
  readonly needHelpBtn: Locator;
  readonly organizationLogin: Locator;
  readonly signUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEl = page.getByTestId('email-input');
    this.passwordEl = page.getByTestId('password-input');
    this.loginBtn = page.getByTestId('login-btn');
    this.errorMessageEl = page.getByTestId('error-display');

    this.hudlLogoEl = page.getByTestId('hudl-logo');
    this.emailLabel = page.getByTestId('email-input-label');
    this.passwordLabel = page.getByTestId('password-input-label');
    this.rememberMeCheckBtn = page.getByTestId('remember-me-checkbox-label');
    this.needHelpBtn = page.getByTestId('need-help-link');
    this.organizationLogin = page.getByTestId('log-in-with-organization-btn');
    this.signUpBtn = page.getByText('Sign up');
  }

  async login(email: string, pass: string) {
    await this.loginEl.fill(email);
    await this.passwordEl.fill(pass);
    await this.loginBtn.click();
  }
}
