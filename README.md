# Playwright Automation Framework - SauceDemo

## Project Overview

This project automates the login and checkout functionality of the SauceDemo application using Playwright with JavaScript.

## Application Under Test

https://www.saucedemo.com/

## Framework Design

- Playwright with JavaScript
- Page Object Model (POM)
- Fixtures
- Environment Configuration
- JSON Test Data
- HTML Reporting
- Screenshot Capture on Failure

## Project Structure

```
config/       -> Environment configuration
fixtures/     -> Page object fixtures
pages/        -> Page Object Model classes
testData/     -> Test data files
tests/        -> Test scripts
utils/        -> Constants and reusable utilities
```

## Test Cases Covered

### TC_01 - Login with Valid Credentials

- Login using standard_user
- Validate Inventory page
- Validate Products page

### TC_02 - Add Product To Cart And Complete Checkout

- Add Sauce Labs Backpack
- Validate cart badge count
- Validate product in cart
- Complete checkout
- Validate order confirmation

### TC_03 - Intentional Failed Validation

- Perform incorrect assertion
- Verify failure screenshot generation
- Verify HTML report captures failure


## Prerequisites

Ensure the following are installed:

- Node.js (v18 or above recommended)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Navigate to project folder:

```bash
cd playwright-saucedemo
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Environment Configuration

Create:

```text
config/.env.test
```

Example:

```env
BASE_URL=https://www.saucedemo.com
USERNAME=problem_user
PASSWORD=secret_sauce
```

> Note:
> .env files are excluded from Git using .gitignore.

## Execute Tests

Run all tests:

```bash
npm run test:test
```

## View Report

```bash
npm run report
```

## Reporting

The framework automatically captures:

- HTML Report
- Failure Screenshot
- Failure Trace
- Failure Video