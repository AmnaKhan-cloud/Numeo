# Numeo

## Features

- **BDD Framework**
- **Page Object Model (POM)**
- **Fixtures support**
- **Parallel Test Execution**
- **Screenshots of failure**
- **HTML Reporting**
- **Environment Configuration**
- **Data Reader from JSON**
- **Test videos of failure**
- **POST API with JSON payload:**  
  Uses [restful-booker](https://restful-booker.herokuapp.com)
- **Integrated Assertion**
- **Test cases for Login screen:**  
  Proper login scenario using [naveenautomationlabs OpenCart login](https://naveenautomationlabs.com/opencart/index.php?route=account/login)
- **Search bar test:**  
  Search for an item and get its attribute (e.g., Macbook)
- **Execution of failure test cases only**
- **Retries for falky test**
- **CLI only run new commits changes test**
-**Total Test Coverage**

Module: Total no of test

Login Tests:10 Open Cart : 2 Post API :1

TotalModule: 2 Total Test Execution: 13
  
  
---

## Project Structure

- **Jenkins:** Integration with Jenkins with workflow after commit automatically run build using hooks and parameters
- **tests:** Contains all features and JS code
- **test-results:** Contains all report files

---

## Get Started

1. Clone or download the project.
2. Extract and open it in VS Code.
3. Install Node.js, then run `npm i` to install dependencies.
4. Run `npm init playwright@latest` to install browsers.
5. Install Cucumber: `npm i -D @cucumber/cucumber@latest`
6. Run tests: `npx playwright test --headed`
7. To run a particular test, specify the path or filename.
8. Jenkins installation requires Java 17 or 21.Install npm and playwright with job
9. To trigger a Jenkins job, click the Build button.
10. Shared jenkins file that show workflow and also show with live host in an interview

---

## Folder Hierarchy

```
tests/
├── pages/                   # All UI page objects
├── Features/features/       # Write your feature files here
├── Steps/steps/             # Step definitions go here
├── hooks/hooks.ts           # Browser setup and teardown logic
├── Fixtures/pageFixture.ts  # Share page objects with steps
├── helper/
│   ├── env/                 # Multiple environments handled here
│   └── report/              # Report generation
├── TestData/data.json       # Test data and logger
config/
└── cucumber.js              # All configuration magic
package.json                 # Dependencies
test-results/                # Test reports
```

---
