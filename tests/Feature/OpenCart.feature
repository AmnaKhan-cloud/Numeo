Feature: OpenCart Search Functionality
    As a user
    I want to search for products on OpenCart
    So that I can see relevant search results

    Scenario Outline: Search for a product
        Given the user is on the OpenCart home page
        When the user enters "<product>" into the search box
        And clicks on the search button
        Then the search results page should be displayed
        Then the system should show "<expectedResult>"

        Examples:
            | product               | expectedResult                            |
            | iPhone                | Products related to iPhone are displayed  |
            | NonExistentProduct123 | No matching products message is displayed |
