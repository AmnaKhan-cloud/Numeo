// Generated from: tests\Feature\OpenCart.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('OpenCart Search Functionality', () => {

  test.describe('Search for a product', () => {

    test('Example #1', async ({ Given, When, Then, And, openCartPage }) => { 
      await Given('the user is on the OpenCart home page', null, { openCartPage }); 
      await When('the user enters "iPhone" into the search box', null, { openCartPage }); 
      await And('clicks on the search button', null, { openCartPage }); 
      await Then('the search results page should be displayed', null, { openCartPage }); 
      await Then('the system should show "Products related to iPhone are displayed"', null, { openCartPage }); 
    });

    test('Example #2', async ({ Given, When, Then, And, openCartPage }) => { 
      await Given('the user is on the OpenCart home page', null, { openCartPage }); 
      await When('the user enters "NonExistentProduct123" into the search box', null, { openCartPage }); 
      await And('clicks on the search button', null, { openCartPage }); 
      await Then('the search results page should be displayed', null, { openCartPage }); 
      await Then('the system should show "No matching products message is displayed"', null, { openCartPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Feature\\OpenCart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the OpenCart home page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user enters \"iPhone\" into the search box","stepMatchArguments":[{"group":{"start":16,"value":"\"iPhone\"","children":[{"start":17,"value":"iPhone","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And clicks on the search button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the search results page should be displayed","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the system should show \"Products related to iPhone are displayed\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Products related to iPhone are displayed\"","children":[{"start":24,"value":"Products related to iPhone are displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the OpenCart home page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user enters \"NonExistentProduct123\" into the search box","stepMatchArguments":[{"group":{"start":16,"value":"\"NonExistentProduct123\"","children":[{"start":17,"value":"NonExistentProduct123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And clicks on the search button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the search results page should be displayed","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the system should show \"No matching products message is displayed\"","stepMatchArguments":[{"group":{"start":23,"value":"\"No matching products message is displayed\"","children":[{"start":24,"value":"No matching products message is displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end