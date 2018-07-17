$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darksky.feature");
formatter.feature({
  "line": 3,
  "name": "Correct format",
  "description": "",
  "id": "correct-format",
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
  "duration": 6173924489,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": "correct-format;verify-timline-is-displayed-in-correct-format",
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
  "duration": 844570630,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.timelieneDisplaysTwoHoursIncrement()"
});
formatter.result({
  "duration": 564405112,
  "status": "passed"
});
formatter.after({
  "duration": 3155746918,
  "status": "passed"
});
formatter.before({
  "duration": 4709517442,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "correct-format;verify-individual-day-temp-timeline",
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
  "name": "I am on Darksky Home Page",
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
  "location": "DarkskySD.iAmOnDarskskyHomePag()"
});
formatter.result({
  "duration": 296692832,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iExpandTodaysTimeline()"
});
formatter.result({
  "duration": 560831332,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTemp()"
});
formatter.result({
  "duration": 267021879,
  "status": "passed"
});
formatter.after({
  "duration": 3098095701,
  "status": "passed"
});
formatter.before({
  "duration": 4656000553,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Time Machine Calendar",
  "description": "",
  "id": "correct-format;verify-time-machine-calendar",
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
  "duration": 57732048,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iclickOnTimeMachine()"
});
formatter.result({
  "duration": 238490612,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTodayDateIsSelected()"
});
formatter.result({
  "duration": 735386367,
  "status": "passed"
});
formatter.after({
  "duration": 3145857153,
  "status": "passed"
});
});