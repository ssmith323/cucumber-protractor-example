Feature: Go to the home
  As a user
  I want to view the login page
  So that I can login

  Background: Setup
    Given I am on the "login" page

  Scenario: Login Page
    When I enter my correct username
    And  I enter my correct password
    And click the login button
    Then I should be logged in

  Scenario: Login Page
    When I enter my incorrect username
    And I enter my incorrect password
    And click the login button
    Then I should not be logged in
