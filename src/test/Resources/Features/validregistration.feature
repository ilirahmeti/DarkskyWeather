@regression @validregistration

Feature: Valid Registration

  Scenario: Verify a new user can register with a valid email address
    Given I am on Registration page
    When I enter the name as "testuser" email as "test@test.com" password as "test12345"
    And I click 'submit' button
    Then I am signed-in as a new user
