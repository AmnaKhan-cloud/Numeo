## **Features**

1-BDD Framework
2-Page Object Model (POM)
3-Fixtures support
4-Parallel Test Execution
5-Screenshots of failure
6.Html Reporting
7.Environment Configuration
8.Data Reader from Json
9.Test videos of failure
10.Post API with Json payload using https://restful-booker.herokuapp.com
11-Integrate Assertion
12.Add Test cases for Login screen with proper login scenerio usimg https://naveenautomationlabs.com/opencart/index.php?route=account/login
13.Search the item from search bar and then trying to get it's attribute e.g Macbook



## **Project Structure**

1-Jenkins -> Integartion with Jenkins
2-tests -> Contains all the features & JS code
3-test-results -> Contains all the reports related file

## **Get Started**

Setup:
1-Clone or download the project
2-Extract and open in the VS-Code
3-Install node and npm i to install the dependencies
4-npm init playwright@latest to install the browsers
5-npm i -D @cucumber/cucumber@latest
6.npx run playwright test --headed to execute the tests
7-To run a particular test write specific path of file name
8.Jenkins instllation need java 17 or 21
9-To trigger job ,clickon job button to trigger it


## **Folder Hirerachy**
tests\pages -> All the page (UI screen)
tests\Features\features -> write your features here
tests\Steps\steps -> Your step definitions goes here
tests\hooks\hooks.ts -> Browser setup and teardown logic
tests\Fixtures\pageFixture.ts -> Simple way to share the page objects to steps
tests\helper\env -> Multiple environments are handled
tests\helper\report -> To generate the report
config/cucumber.js -> One file to do all the magic
package.json -> Contains all the dependencies
tests\TestData\data.json -> Read test data from json & logger


