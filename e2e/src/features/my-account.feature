Feature: My Account Page
  My Account Page Funtionality


  Background: Background name
    Given I am on the login page
    When I enter my correct username and password
    And click the login button

  Scenario: Authenenticated
    Given I navigate to My Account
    When It loads
    Then The header should display

  Scenario Outline: Diplay Fields
    Given I navigate to My Account
    When It loads
    Then The field "<field>" should display "<value>"

    Examples:
      | field | value     |
      | name  | ssmith323 |
      | age   | 5         |
