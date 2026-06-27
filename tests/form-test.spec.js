// tests/form-test.spec.js
const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/FormPage');
const { ThankYouPage } = require('../pages/ThankYouPage');
const testData = require('../data/testData.json');

// test.describe groups related tests together into a "Test Suite"
test.describe('Jones Automation - Contact Form Test Suite', () => {
  let formPage;
  let thankYouPage;

  // test.beforeEach runs before each test in the suite, ensuring a fresh state
  test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page);
    thankYouPage = new ThankYouPage(page);
    // Navigate to the form page before each test starts
    await formPage.navigate();
  });

  test('Test 1: Should successfully submit the form with valid data (Happy Path)', async () => {
    const user = testData.validUser;

    // Act Phase: Fill the form and interact with elements
    await formPage.fillForm(user);
    await formPage.selectEmployeeCount(user.employeeCount);
    
    // Capture a screenshot after filling the form but before submission for debugging purposes
    await formPage.takeScreenshot('successful-submission.png');
    
    await formPage.submitForm();

    // Assert Phase: Verify Awe landed on the correct page and the success message exists
    await thankYouPage.verifySuccess();
    console.log('Test 1 Passed: Successfully reached the Thank You page.');
  });

  test('Test 2: Should prevent form submission when mandatory Name field is missing', async ({ page }) => {
    const user = testData.missingNameUser;

    // Act Phase: Fill the form and interact with elements
    await formPage.fillForm(user);
    await formPage.submitForm();

    // Assert: Verify HTML5 validation state. The browser automatically assigns the :invalid pseudo-class to required fields that are empty.
    const invalidNameField = page.locator('#name:invalid');
    await expect(invalidNameField).toBeAttached();
    console.log('Test 2 Passed: Form submission prevented due to missing mandatory Name field.');
  });

  test('Test 3: Should prevent form submission with an invalid email format', async ({ page }) => {
    const user = testData.invalidEmailUser;

    // Act Phase: Fill the form and interact with elements
    await formPage.fillForm(user);
    await formPage.submitForm();

    // Assert: Verify the email input is flagged as invalid by the browser
    const invalidEmailField = page.locator('#email:invalid');
    await expect(invalidEmailField).toBeAttached();
    console.log('Test 3 Passed: Form submission prevented due to invalid email format.');
  });

  test('Test 4: Should prevent form submission with an invalid website URL format', async ({ page }) => {
    const user = testData.invalidUrlUser;

    // Act Phase: Fill the form and interact with elements
    await formPage.fillForm(user);
    await formPage.submitForm();

    // Assert: Verify the URL input is flagged as invalid due to type="url" constraint
    const invalidWebsiteField = page.locator('#website:invalid');
    await expect(invalidWebsiteField).toBeAttached();
    console.log('Test 4 Passed: Form submission prevented due to invalid website URL format.');
  });
});