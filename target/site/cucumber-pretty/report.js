$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("autocompletesearch.feature");
formatter.feature({
  "line": 2,
  "name": "Verify autocomplete",
  "description": "",
  "id": "verify-autocomplete",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@autocomplete"
    }
  ]
});
formatter.before({
  "duration": 5220668601,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify auto complete search result",
  "description": "",
  "id": "verify-autocomplete;verify-auto-complete-search-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search on top search bar with text \"ios\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify \"Title: I will teach you IOS\" as displayed result",
  "keyword": "Then "
});
formatter.match({
  "location": "AutocompleteSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 337784162,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteSD.iEnterTextOnSearchBar()"
});
formatter.result({
  "duration": 242325798,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteSD.iVerifyDisplayedResult()"
});
formatter.result({
  "duration": 2190989756,
  "status": "passed"
});
formatter.after({
  "duration": 3147297569,
  "status": "passed"
});
formatter.uri("invalidemail.feature");
formatter.feature({
  "line": 2,
  "name": "Invalid email",
  "description": "",
  "id": "invalid-email",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@invalidemail"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify invalid email on registration",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter name as \"test user\" email as \u003cemail\u003e password as \"test12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 11,
      "id": "invalid-email;verify-invalid-email-on-registration;;1"
    },
    {
      "cells": [
        "test.com"
      ],
      "line": 12,
      "id": "invalid-email;verify-invalid-email-on-registration;;2"
    },
    {
      "cells": [
        "test@test@test.com"
      ],
      "line": 13,
      "id": "invalid-email;verify-invalid-email-on-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3919869789,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify invalid email on registration",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@invalidemail"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter name as \"test user\" email as test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 529456163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test user",
      "offset": 17
    },
    {
      "val": "test.com",
      "offset": 37
    },
    {
      "val": "test12345",
      "offset": 59
    }
  ],
  "location": "InvalidEmailSD.iEnterNameEmailPass(String,String,String)"
});
formatter.result({
  "duration": 367698263,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 70872401,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 41753739,
  "status": "passed"
});
formatter.after({
  "duration": 3146308997,
  "status": "passed"
});
formatter.before({
  "duration": 3767855291,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify invalid email on registration",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@invalidemail"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter name as \"test user\" email as test@test@test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 568393606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test user",
      "offset": 17
    },
    {
      "val": "test@test@test.com",
      "offset": 37
    },
    {
      "val": "test12345",
      "offset": 69
    }
  ],
  "location": "InvalidEmailSD.iEnterNameEmailPass(String,String,String)"
});
formatter.result({
  "duration": 291897677,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 73822223,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 36617857,
  "status": "passed"
});
formatter.after({
  "duration": 3148388920,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 3809971120,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify valid login",
  "description": "",
  "id": "login-page;verify-valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the Threely login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as “n12345@test.com” and password as “123456”",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify logout button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSD.iAmOntheThreelyHomePage()"
});
formatter.result({
  "duration": 763915328,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.enterEmailOntheEmailField()"
});
formatter.result({
  "duration": 353891210,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 769766722,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iVerifyValidLogin()"
});
formatter.result({
  "duration": 470774765,
  "status": "passed"
});
formatter.after({
  "duration": 3155914891,
  "status": "passed"
});
formatter.uri("totalposts.feature");
formatter.feature({
  "line": 2,
  "name": "Number of Pages",
  "description": "",
  "id": "number-of-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@totalposts"
    }
  ]
});
formatter.before({
  "duration": 3759245222,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify total number of posts on home page",
  "description": "",
  "id": "number-of-pages;verify-total-number-of-posts-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of Threely",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify 57 total post is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I verify all post has price tag",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify all post has title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify all post has displayed image",
  "keyword": "And "
});
formatter.match({
  "location": "TotalPostsSD.iAmOnHomePageOfThreely()"
});
formatter.result({
  "duration": 37562114,
  "status": "passed"
});
formatter.match({
  "location": "TotalPostsSD.iVerify57TotalPostsDisplayed()"
});
formatter.result({
  "duration": 946592085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "price tag",
      "offset": 22
    }
  ],
  "location": "TotalPostsSD.iVerifyAllPostsHas(String)"
});
formatter.result({
  "duration": 970836095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 22
    }
  ],
  "location": "TotalPostsSD.iVerifyAllPostsHas(String)"
});
formatter.result({
  "duration": 940666561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "displayed image",
      "offset": 22
    }
  ],
  "location": "TotalPostsSD.iVerifyAllPostsHas(String)"
});
formatter.result({
  "duration": 548535213,
  "status": "passed"
});
formatter.after({
  "duration": 3138448903,
  "status": "passed"
});
formatter.uri("validregistration.feature");
formatter.feature({
  "line": 3,
  "name": "Valid Registration",
  "description": "",
  "id": "valid-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@validregistration"
    }
  ]
});
formatter.before({
  "duration": 3613975487,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify a new user can register with a valid email address",
  "description": "",
  "id": "valid-registration;verify-a-new-user-can-register-with-a-valid-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the name as \"testuser\" email as \"test@test.com\" password as \"test12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am signed-in as a new user",
  "keyword": "Then "
});
formatter.match({
  "location": "validRegistrationSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 364368448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 21
    },
    {
      "val": "test@test.com",
      "offset": 41
    },
    {
      "val": "test12345",
      "offset": 69
    }
  ],
  "location": "validRegistrationSD.iEnterNameEmailPas(String,String,String)"
});
formatter.result({
  "duration": 408939140,
  "status": "passed"
});
formatter.match({
  "location": "validRegistrationSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 783708833,
  "status": "passed"
});
formatter.match({
  "location": "validRegistrationSD.iAmSignedInAsANewUser()"
});
formatter.result({
  "duration": 178894507,
  "status": "passed"
});
formatter.after({
  "duration": 3170067556,
  "status": "passed"
});
});