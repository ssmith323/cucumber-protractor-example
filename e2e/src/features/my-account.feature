Feature: My Account Page
  My Account Page Funtionality


  Background: Background name
    Given I am logged in

  Scenario: Authenenticated
    When I navigate to My Account
    Then The header should display

  Scenario Outline: Diplay Fields
    When I navigate to My Account
    Then The field "<field>" should display "<value>"

    Examples:
      | field | value     |
      | name  | ssmith323 |
      | age   | 5         |
