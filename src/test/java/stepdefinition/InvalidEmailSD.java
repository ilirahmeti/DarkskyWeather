package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import org.testng.Assert;

public class InvalidEmailSD {

    HomePage homePage = new HomePage();

    @Given("^I am on the Registration page$")
    public void iAmOnRegistrationPage() {
        homePage.clickOnJoinButton();
        Assert.assertEquals(homePage.getVerificationText(), "Signup", "YOU ARE NOT IN HOME PAGE");
    }

    @When("^I enter name as \"(.+)\" email as (.+) password as \"(.+)\"$")
    public void iEnterNameEmailPass(String anyName, String anyEmail, String anyPass) {
        homePage.enterName();
        homePage.enterWrongEmail(anyEmail);
        homePage.enterGmailPass();
    }

    @When("^I click on 'submit' button$")
    public void iClickSubmitButton() {
        homePage.clickOnSubmitButton();
    }

    @Then("^I verify invalid email address$")
    public void iVerifyInvalidEmailAddress() {
        Assert.assertEquals(homePage.getVerificationText(), "Signup", "FAIL TO VERIFY WRONG INVALID EMAIL." +
                " THE EMAIL YOU PROVIDED PASSED THE TEST");
    }
}
