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
  "duration": 5078687902,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": "homepage-verifications;verify-timline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Darksky-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Darksky home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarskskyHomePage()"
});
formatter.result({
  "duration": 643329149,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.timelieneDisplaysTwoHoursIncrement()"
});
formatter.result({
  "duration": 268873580,
  "status": "passed"
});
formatter.after({
  "duration": 3108999474,
  "status": "passed"
});
formatter.before({
  "duration": 4598937270,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "homepage-verifications;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Darksky-2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Darksky home page",
  "keyword": "Given "
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
  "location": "DarkskySD.iAmOnDarskskyHomePage()"
});
formatter.result({
  "duration": 45168707,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iExpandTodaysTimeline()"
});
formatter.result({
  "duration": 240389568,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTemp()"
});
formatter.result({
  "duration": 635713929,
  "status": "passed"
});
formatter.after({
  "duration": 3155449532,
  "status": "passed"
});
formatter.before({
  "duration": 4348488220,
  "status": "passed"
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
  "name": "I am on Darksky home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Time Machine",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify date is selected to todays date",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarskskyHomePage()"
});
formatter.result({
  "duration": 38460973,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iclickOnTimeMachine()"
});
formatter.result({
  "duration": 254985757,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTodayDateIsSelected()"
});
formatter.result({
  "duration": 30053266,
  "status": "passed"
});
formatter.after({
  "duration": 3097502755,
  "status": "passed"
});
});