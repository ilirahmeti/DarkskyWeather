$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darksky.feature");
formatter.feature({
  "line": 3,
  "name": "HomePage verifications",
  "description": "",
  "id": "homepage-verifications",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Darksky"
    }
  ]
});
formatter.before({
  "duration": 5121783148,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Given I am on Darksky home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Time Machine Calendar",
  "description": "",
  "id": "homepage-verifications;verify-time-machine-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Darksky-3"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on Time Machine",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify date is selected to todays date",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iclickOnTimeMachine()"
});
formatter.result({
  "duration": 805630220,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTodayDateIsSelected()"
});
formatter.result({
  "duration": 50062434,
  "status": "passed"
});
formatter.after({
  "duration": 3147461859,
  "status": "passed"
});
});