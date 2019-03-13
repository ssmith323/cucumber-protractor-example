Feature: My Account Page
  My Account Page Funtionality

  Scenario: Unauthenticated
    Given I am not logged in
    When I am on the "My Account" page
    Then I should be taken to the login page
