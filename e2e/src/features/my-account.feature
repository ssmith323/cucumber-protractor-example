Feature: My Account Page
  My Account Page Funtionality


  Background: Background name
    Given I am logged in
    And I am on the "My Account" page

  Scenario: Page should have a title
    Then The header should display

  Scenario Outline: Diplay Fields
    Then The field "<field>" should display "<value>"

    Examples:
      | field | value     |
      | name  | ssmith323 |
      | age   | 5         |

