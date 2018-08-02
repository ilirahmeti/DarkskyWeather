@regression @Darksky

Feature: HomePage verifications

  @Darksky-1
  Scenario: Verify timline is displayed in correct format
    Given I am on Darksky home page
    Then I verify timeline is displayed with two hours incremented

  @Darksky-2
  Scenario: Verify individual day temp timeline
    Given I am on Darksky home page
    When I expand todays timeline
    Then I verify lowest and highest temp is displayed correctly

  @Darksky-3
  Scenario: Verify Time Machine Calendar
    Given I am on Darksky home page
    When I click on Time Machine
    Then I verify date is selected to todays date