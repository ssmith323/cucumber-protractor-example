Feature: Go to the home
  Login

  Scenario: Login Page
    Given I am on the login page
    When I enter my correct username and password
    And click the login button
    Then I should be logged in

  Scenario: Login Page
    Given I am on the login page
    When I enter my incorrect username and password
    And click the login button
    Then I should not be logged in
