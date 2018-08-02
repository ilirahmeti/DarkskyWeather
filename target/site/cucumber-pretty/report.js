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
  "duration": 5083098438,
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
  "duration": 588164840,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.timelieneDisplaysTwoHoursIncrement()"
});
formatter.result({
  "duration": 195153663,
  "status": "passed"
});
formatter.after({
  "duration": 3103615092,
  "status": "passed"
});
formatter.before({
  "duration": 4125504317,
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
  "duration": 63109888,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iExpandTodaysTimeline()"
});
formatter.result({
  "duration": 381270431,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTemp()"
});
formatter.result({
  "duration": 599166337,
  "status": "passed"
});
formatter.after({
  "duration": 3179476006,
  "status": "passed"
});
formatter.before({
  "duration": 3780927226,
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
  "duration": 199760131,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iclickOnTimeMachine()"
});
formatter.result({
  "duration": 419028879,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTodayDateIsSelected()"
});
formatter.result({
  "duration": 34770204,
  "status": "passed"
});
formatter.after({
  "duration": 3143008275,
  "status": "passed"
});
});