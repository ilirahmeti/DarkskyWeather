@regression @login

Feature: Login Page

Scenario: Verify valid login

Given User is on the Threely login page
When I enter username as “n12345@test.com” and password as “123456”
And I click on submit button
Then I verify logout button is displayed


