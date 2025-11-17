// Generated from: tests\Feature\login.feature
import { testpages as test } from "../../../tests/fixtures/fixture.js";

test.describe('Verify Login functionality', () => {

  test.beforeEach('Background', async ({ Given, pLoginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User navigate to url', null, { pLoginPage }); 
  });
  
  test('Successful login with valid credentials', async ({ When, Then, pLoginPage }) => { 
    await When('User logs in with environment credentials', null, { pLoginPage }); 
    await Then('User should see MyAccount after login', null, { pLoginPage }); 
  });

  test.describe('Verify user is not able login with following credentails', () => {

    test('Example #1', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "wrong@example.com"', null, { pLoginPage }); 
      await When('User enter password "somePassword"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password."', null, { pLoginPage }); 
    });

    test('Example #2', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "validUser@example.com"', null, { pLoginPage }); 
      await When('User enter password "wrongPassword!"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password."', null, { pLoginPage }); 
    });

    test('Example #3', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email ""', null, { pLoginPage }); 
      await When('User enter password "ValidPassword123!"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #4', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "validUser@example.com"', null, { pLoginPage }); 
      await When('User enter password ""', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #5', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "invalid@example.com"', null, { pLoginPage }); 
      await When('User enter password "short"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #6', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "testuser@example.com"', null, { pLoginPage }); 
      await When('User enter password "123"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #7', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "invalidformat"', null, { pLoginPage }); 
      await When('User enter password "ValidPassword123!"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #8', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email "validUser@example.com"', null, { pLoginPage }); 
      await When('User enter password "wrongpass!"', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

    test('Example #9', async ({ When, Then, pLoginPage }) => { 
      await When('User enter Email ""', null, { pLoginPage }); 
      await When('User enter password ""', null, { pLoginPage }); 
      await When('User click on login button', null, { pLoginPage }); 
      await Then('User should verify error message contains "Warning: No match for E-Mail Address and/or Password"', null, { pLoginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in with environment credentials","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should see MyAccount after login","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"wrong@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrong@example.com\"","children":[{"start":18,"value":"wrong@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"somePassword\"","stepMatchArguments":[{"group":{"start":20,"value":"\"somePassword\"","children":[{"start":21,"value":"somePassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"validUser@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"validUser@example.com\"","children":[{"start":18,"value":"validUser@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"wrongPassword!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"wrongPassword!\"","children":[{"start":21,"value":"wrongPassword!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"\"","stepMatchArguments":[{"group":{"start":17,"value":"\"\"","children":[{"start":18,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"ValidPassword123!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"ValidPassword123!\"","children":[{"start":21,"value":"ValidPassword123!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"validUser@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"validUser@example.com\"","children":[{"start":18,"value":"validUser@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"\"","stepMatchArguments":[{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"invalid@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"invalid@example.com\"","children":[{"start":18,"value":"invalid@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"short\"","stepMatchArguments":[{"group":{"start":20,"value":"\"short\"","children":[{"start":21,"value":"short","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"testuser@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"testuser@example.com\"","children":[{"start":18,"value":"testuser@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"123\"","stepMatchArguments":[{"group":{"start":20,"value":"\"123\"","children":[{"start":21,"value":"123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"invalidformat\"","stepMatchArguments":[{"group":{"start":17,"value":"\"invalidformat\"","children":[{"start":18,"value":"invalidformat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"ValidPassword123!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"ValidPassword123!\"","children":[{"start":21,"value":"ValidPassword123!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"validUser@example.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"validUser@example.com\"","children":[{"start":18,"value":"validUser@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"wrongpass!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"wrongpass!\"","children":[{"start":21,"value":"wrongpass!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":73,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enter Email \"\"","stepMatchArguments":[{"group":{"start":17,"value":"\"\"","children":[{"start":18,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enter password \"\"","stepMatchArguments":[{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User click on login button","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should verify error message contains \"Warning: No match for E-Mail Address and/or Password\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Warning: No match for E-Mail Address and/or Password\"","children":[{"start":43,"value":"Warning: No match for E-Mail Address and/or Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end