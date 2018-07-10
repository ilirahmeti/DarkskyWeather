@regression @login

Feature:
  Verifying invalid login

  @login-1
  Scenario:
    Verifying invalid login

    Given I am on the Threely home page
    When I click on Sign in button
    And I enter ilirahmeti@yahoo.com on the email field
    And I enter testingPass on the password field
    And I click on Submit button
    Then I verify that I am an invalid log in

@login-2
  Scenario:
  Verifying Valid login

    Given I am on the Threely home page
    When I click on Sign in button
    And I enter ilirahmeti@yahoo.com on the email field
    And I enter ilir1357 on the password field
    And I click on Submit button
    Then I verify that I am a Valid log in







