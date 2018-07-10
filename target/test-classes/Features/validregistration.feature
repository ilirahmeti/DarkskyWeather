@regression @validregistration

Feature: Valid Registration

  Scenario: Verify a new user can register with a valid email address
    Given I am on Registration page
    When I enter name as "ilir ahmeti" email as "ilirahmeti4@gmail.com" password as "ilir1357"
    And I click 'submit' button
    Then I am signed-in as a new user


