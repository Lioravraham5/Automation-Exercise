// pages/FormPage.js
const { expect } = require('@playwright/test');

class FormPage {
  /**
   * Initializes the FormPage object with the Playwright page instance.
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // Locators definition based on the form's input fields and buttons
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.companyInput = page.locator('#company');
    this.websiteInput = page.locator('#website');
    
    // Select element for the dropdown
    this.employeesDropdown = page.locator('#employees');
    
    // Button locator for form submission
    this.submitButton = page.locator('button', { hasText: 'Request a call back' });
  }

  /**
   * Navigates to the base URL of the page.
   * Using 'domcontentloaded' prevents timeouts if external resources (like fonts) are blocked.
   */
  async navigate() {
    await this.page.goto('https://test.netlify.app/', { waitUntil: 'domcontentloaded' });
  }

  /**
   * Populates the form fields with the provided data payload.
   * @param {Object} details - The user details payload.
   * @param {string} details.name
   * @param {string} details.email
   * @param {string} details.phone
   * @param {string} details.company
   * @param {string} details.website
   */
  async fillForm(details) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.companyInput.fill(details.company);
    await this.websiteInput.fill(details.website);
  }

  /**
   * Selects the number of employees from the dropdown.
   * @param {string} optionValue - The exact string value of the option (e.g., '51-500').
   */
  async selectEmployeeCount(optionValue) {
    await this.employeesDropdown.selectOption(optionValue);
  }

  /**
   * Captures a full-page screenshot and saves it to the specified path.
   * @param {string} filePath - Destination path for the screenshot output.
   */
  async takeScreenshot(filePath) {
    await this.page.screenshot({ path: filePath, fullPage: true });
  }

  /**
   * Submits the form by clicking the primary action button.
   */
  async submitForm() {
    await this.submitButton.click();
  }
}

module.exports = { FormPage };