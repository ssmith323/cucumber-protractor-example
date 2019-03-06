Feature: Go to the home
  Display the title

  Scenario Outline: Home Page
    Given I am on the home page
    Given I do nothing
    Given I should see the title
# "<title>"
# Examples:
#   | title   |
#   | Value 1 |
#   | Value 2 |
#   | Value 3 |

