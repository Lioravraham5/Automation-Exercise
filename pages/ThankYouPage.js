// pages/ThankYouPage.js
const { expect } = require('@playwright/test');

class ThankYouPage {
  /**
   * Initializes the ThankYouPage object with the Playwright page instance.
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // Locator specific to the Thank You page HTML
    this.successHeader = page.locator('h1', { hasText: 'Thank You!' });
  }

  /**
   * Asserts that the user has successfully reached the Thank You page.
   */
  async verifySuccess() {
    await expect(this.successHeader).toBeVisible();
  }
}

module.exports = { ThankYouPage };