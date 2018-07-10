$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("autocompletesearch.feature");
formatter.feature({
  "line": 4,
  "name": "",
  "description": "Verify autocomplete",
  "id": "",
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
  "duration": 5061039928,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "Verify auto complete search result",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search on top search bar with text \"ios\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify \"Title: I will teach you IOS\" as displayed result",
  "keyword": "Then "
});
formatter.match({
  "location": "AutocompleteSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 289259286,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteSD.iEnterTextOnSearchBar()"
});
formatter.result({
  "duration": 261619372,
  "status": "passed"
});
formatter.match({
  "location": "AutocompleteSD.iVerifyDisplayedResult()"
});
formatter.result({
  "duration": 2196171058,
  "status": "passed"
});
formatter.after({
  "duration": 3133746165,
  "status": "passed"
});
formatter.uri("invalidemail.feature");
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
  "line": 7,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name as \"ilirahmeti\" email as \u003cemail\u003e password as \"test12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "invalid-email;verify-invalid-email-on-registration;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 13,
      "id": "invalid-email;verify-invalid-email-on-registration;;1"
    },
    {
      "cells": [
        "test.com"
      ],
      "line": 14,
      "id": "invalid-email;verify-invalid-email-on-registration;;2"
    },
    {
      "cells": [
        "test@test@test.com"
      ],
      "line": 15,
      "id": "invalid-email;verify-invalid-email-on-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3435450525,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "line": 7,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name as \"ilirahmeti\" email as test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 6644839,
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
  "duration": 713977496,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 85056763,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 54479881,
  "status": "passed"
});
formatter.after({
  "duration": 3171027195,
  "status": "passed"
});
formatter.before({
  "duration": 3781759618,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "line": 7,
  "name": "I am on the Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name as \"ilirahmeti\" email as test@test@test.com password as \"test12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify invalid email address",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailSD.iAmOnRegistrationPage()"
});
formatter.result({
  "duration": 7519900,
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
  "duration": 956511792,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 82130708,
  "status": "passed"
});
formatter.match({
  "location": "InvalidEmailSD.iVerifyInvalidEmailAddress()"
});
formatter.result({
  "duration": 54689519,
  "status": "passed"
});
formatter.after({
  "duration": 3167447280,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "",
  "description": "Verifying invalid login",
  "id": "",
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
  "duration": 3358463017,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "",
  "description": "Verifying invalid login",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login-1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Threely home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter ilirahmeti@yahoo.com on the email field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter testingPass on the password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am an invalid log in",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.enterEmailOntheEmailField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.enterPassowrdOnThePassField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.iClickOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.iVerifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3104264518,
  "status": "passed"
});
formatter.before({
  "duration": 3866230814,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "Verifying Valid login",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@login-2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the Threely home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter ilirahmeti@yahoo.com on the email field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter ilir1357 on the password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify that I am a Valid log in",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.enterEmailOntheEmailField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.enterRightPassowrdOnThePassField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.iClickOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.iVerifyValidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3121386981,
  "status": "passed"
});
formatter.uri("totalposts.feature");
formatter.feature({
  "line": 3,
  "name": "",
  "description": "Number of Pages",
  "id": "",
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
  "duration": 3916695878,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "Verify total number of posts on home page",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page of Threely",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I verify 57 total post is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify all post has price tag",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify all post has title",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify all post has displayed image",
  "keyword": "And "
});
formatter.match({
  "location": "TotalPostsSD.iAmOnHomePageOfThreely()"
});
formatter.result({
  "duration": 7884243,
  "status": "passed"
});
formatter.match({
  "location": "TotalPostsSD.iVerify56TotalPostsDisplayed()"
});
formatter.result({
  "duration": 1024255134,
  "status": "passed"
});
formatter.match({
  "location": "TotalPostsSD.iVerifyAllPostsHasPriceTags()"
});
formatter.result({
  "duration": 1327021552,
  "status": "passed"
});
formatter.match({
  "location": "TotalPostsSD.iVerifyAllPostHasTitle()"
});
formatter.result({
  "duration": 1305066620,
  "status": "passed"
});
formatter.match({
  "location": "TotalPostsSD.iVerifyAllPostHasDisplayedImage()"
});
formatter.result({
  "duration": 24411430,
  "status": "passed"
});
formatter.after({
  "duration": 3202047841,
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
  "duration": 3987820266,
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
  "name": "I enter name as \"ilir ahmeti\" email as \"ilirahmeti4@gmail.com\" password as \"ilir1357\"",
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
  "duration": 7722323,
  "status": "passed"
});
formatter.match({
  "location": "validRegistrationSD.iEnterNameEmailPass()"
});
formatter.result({
  "duration": 738513921,
  "status": "passed"
});
formatter.match({
  "location": "validRegistrationSD.iClickSubmitButton()"
});
formatter.result({
  "duration": 326060617,
  "status": "passed"
});
formatter.match({
  "location": "validRegistrationSD.iAmSignedInAsANewUser()"
});
formatter.result({
  "duration": 30046280013,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Webdriver waited for 30 seconds but still could not find the element therefore Timeout Exception has been thrown (tried for 30 second(s) with 1 SECONDS interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:264)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat framework.BasePage.browser(BasePage.java:39)\n\tat framework.BasePage.clickOn(BasePage.java:16)\n\tat framework.LoginPage.clickOnProfilePic(LoginPage.java:22)\n\tat stepdefinition.validRegistrationSD.iAmSignedInAsANewUser(validRegistrationSD.java:36)\n\tat ✽.Then I am signed-in as a new user(validregistration.feature:9)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@class\u003d\u0027img-circle\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.13.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027ilirs-MacBook-Pro-2.local\u0027, ip: \u00272604:2000:1202:36a:442:fa96:66fd:c8a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011), userDataDir\u003d/var/folders/hk/8k5sgpn524bfh_l58ddh2_nc0000gn/T/.org.chromium.Chromium.8GXLYU}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c58830f5f267f74bebc92230d017d256\n*** Element info: {Using\u003dxpath, value\u003d//img[@class\u003d\u0027img-circle\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\n\tat framework.BasePage$1.apply(BasePage.java:42)\n\tat framework.BasePage$1.apply(BasePage.java:39)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat framework.BasePage.browser(BasePage.java:39)\n\tat framework.BasePage.clickOn(BasePage.java:16)\n\tat framework.LoginPage.clickOnProfilePic(LoginPage.java:22)\n\tat stepdefinition.validRegistrationSD.iAmSignedInAsANewUser(validRegistrationSD.java:36)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.after({
  "duration": 3108454863,
  "status": "passed"
});
});