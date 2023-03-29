import { expect, Locator, Page } from '@playwright/test';

export class HelpPage {
  readonly page: Page;
  readonly backBtn: Locator;
  readonly firstHeader: Locator;
  readonly secondHeader: Locator;
  readonly thirdHeader: Locator;


  constructor(page: Page) {
    this.page = page;
    this.backBtn = page.getByText('Back');
    this.firstHeader = page.getByTestId('forgot-email-headline');
    this.secondHeader = page.getByTestId('didnt-receive-headline');
    this.thirdHeader = page.getByTestId('still-trouble-copy');
  }

  async goto() {
    await this.page.goto('https://www.hudl.com/login/help#');
  }
}
