# Jones Automation - Home Assignment

This repository contains the automation home assignment for the QA/Automation Engineer position, developed using **Playwright** and **Node.js**.

## 🚀 Project Overview
This repository contains an end-to-end (E2E) test suite validating the contact form functionality at `https://test.netlify.app/`. The framework is built using the **Page Object Model (POM)** design pattern and implements **Data-Driven Testing**.

## 🛠️ Tech Stack
* Node.js
* Playwright (JavaScript)

## ⚙️ Installation & Setup
1. Clone this repository:
```
https://github.com/Lioravraham5/Automation-Exercise.git
```
2. Navigate into the project directory and install the dependencies:
```
npm install
```
3. Install Playwright browsers (if not already installed on your machine):
```
npx playwright install
```

## 🧪 Running the Tests
You can execute the test suite using the configured npm scripts:

**1. Headless Mode (Default)**
To run the complete test suite in the terminal across all configured browsers (Chromium, Firefox, WebKit):
```
npm run test
```
**2. Interactive UI Mode**
To open Playwright's UI mode for visual debugging and step-by-step execution:
```
npm run test:ui
```
**Note:** The Happy Path test includes a built-in step that automatically generates a screenshot (successful-submission.png) of the populated form just before submission, for debugging and validation purposes.

## 📁 Repository Structure
- `tests/` - Contains the main test spec file `form-test.spec.js`.
- `pages/` - Contains the Page Object Model classes: `FormPage.js`, `ThankYouPage.js`.
- `data/` - Contains external test payloads `testData.json`.
- `playwright.config.js` - Global Playwright configuration.
