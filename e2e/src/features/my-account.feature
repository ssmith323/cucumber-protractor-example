Feature: My Account Page
  My Account Page Funtionality

  Scenario: Unauthenticated
    Given I am not logged in
    When I navigate to My Account
    Then I should be taken to the login page
