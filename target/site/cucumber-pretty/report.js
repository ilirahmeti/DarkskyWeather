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
  "duration": 3576486873,
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
  "line": 8,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": "homepage-verifications;verify-timline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Darksky-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.timelieneDisplaysTwoHoursIncrement()"
});
formatter.result({
  "duration": 507811739,
  "status": "passed"
});
formatter.after({
  "duration": 3147192713,
  "status": "passed"
});
formatter.before({
  "duration": 2145352141,
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
  "line": 12,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "homepage-verifications;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Darksky-2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I expand todays timeline",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iExpandTodaysTimeline()"
});
formatter.result({
  "duration": 552854071,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTemp()"
});
formatter.result({
  "duration": 207920571,
  "status": "passed"
});
formatter.after({
  "duration": 3195779840,
  "status": "passed"
});
formatter.before({
  "duration": 2262842495,
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
  "duration": 580625983,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTodayDateIsSelected()"
});
formatter.result({
  "duration": 41890196,
  "status": "passed"
});
formatter.after({
  "duration": 3200004752,
  "status": "passed"
});
});