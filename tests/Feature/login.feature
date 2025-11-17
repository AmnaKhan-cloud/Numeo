Feature: Verify Login functionality

    Background:
        Given User navigate to url

    Scenario: Successful login with valid credentials
        When User logs in with environment credentials
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






