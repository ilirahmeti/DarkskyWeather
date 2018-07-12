@regression @invalidemail

  Feature: Invalid email


Scenario Outline: Verify invalid email on registration

Given I am on the Registration page
When I enter name as "test user" email as <email> password as "test12345"
And I click on 'submit' button
Then  I verify invalid email address

Examples:
| email |
| test.com |
| test@test@test.com |


