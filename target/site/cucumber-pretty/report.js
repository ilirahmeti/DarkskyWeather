$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("invalidemail.feature");
formatter.feature({
  "line": 3,
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
  "line": 6,
  "name": "Verify invalid email on registration",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter name as \"ilirahmeti\" email as \u003cemail\u003e password as \"test12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 14,
      "id": "invalid-email;verify-invalid-email-on-registration;;1"
    },
    {
      "cells": [
        "test.com"
      ],
      "line": 15,
      "id": "invalid-email;verify-invalid-email-on-registration;;2"
    },
    {
      "cells": [
        "test@test@test.com"
      ],
      "line": 16,
      "id": "invalid-email;verify-invalid-email-on-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5724769163,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "line": 8,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter name as \"ilirahmeti\" email as test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 1158929535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.com",
      "offset": 38
    }
  ],
  "location": "InvalidEmailSD.iEnterNameEmailPas(String)"
});
formatter.result({
  "duration": 344945493,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 87955753,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 84176837,
  "status": "passed"
});
formatter.after({
  "duration": 3146106128,
  "status": "passed"
});
formatter.before({
  "duration": 3794435943,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "line": 8,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter name as \"ilirahmeti\" email as test@test@test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 602351047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test@test.com",
      "offset": 38
    }
  ],
  "location": "InvalidEmailSD.iEnterNameEmailPas(String)"
});
formatter.result({
  "duration": 299573613,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 102669150,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 59359283,
  "status": "passed"
});
formatter.after({
  "duration": 3144459915,
  "status": "passed"
});
});