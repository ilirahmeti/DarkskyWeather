@regression @totalposts

Feature:
  Number of Pages

Scenario:
  Verify total number of posts on home page


Given I am on home page of Threely
Then I verify 57 total post is displayed
And I verify all post has price tag
And I verify all post has title
And  I verify all post has displayed image