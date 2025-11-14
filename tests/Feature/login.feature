Feature: Verify Login functionality

    Background:
        Given User navigate to url

    Scenario: Successful login with valid credentials
        When User enter Email "amna@mailinator.com"
        When User enter password "Allah12@"
        When User click on login button
        Then User should see MyAccount after login

    Scenario Outline: Verify user is not able login with following credentails
        When User enter Email "<Username>"
        When User enter password "<Password>"
        When User click on login button
        Then User should verify error message contains "<ErrorMessage>"


        Examples:
            | Username              | Password          | ErrorMessage                                          |
            | wrong@example.com     | somePassword      | Warning: No match for E-Mail Address and/or Password. |
            | validUser@example.com | wrongPassword!    | Warning: No match for E-Mail Address and/or Password. |
            |                       | ValidPassword123! | Warning: No match for E-Mail Address and/or Password  |
            | validUser@example.com |                   | Warning: No match for E-Mail Address and/or Password  |
            | invalid@example.com   | short             | Warning: No match for E-Mail Address and/or Password  |
            | testuser@example.com  | 123               | Warning: No match for E-Mail Address and/or Password  |
            | invalidformat         | ValidPassword123! | Warning: No match for E-Mail Address and/or Password  |
            | validUser@example.com | wrongpass!        | Warning: No match for E-Mail Address and/or Password  |
            |                       |                   | Warning: No match for E-Mail Address and/or Password  |


    # Product search scenarios
    Scenario Outline: Search for products on account page
        Given User navigates to url
        When User logs in with username "amna@mailinator.com" and password "Allah12@"
        And User enters product name "<ProductName>" in search box
        And User clicks on search button
        Then Search results should contain "<ProductName>"

        Examples:
            | ProductName |
            | Macbook     |
            | iMac        |
            | Samsung     |



