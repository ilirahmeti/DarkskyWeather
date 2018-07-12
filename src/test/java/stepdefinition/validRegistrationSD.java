package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import framework.LoginPage;
import org.testng.Assert;
import utility.Utils;

import java.util.Random;

public class validRegistrationSD {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();


    @Given("^I am on Registration page$")
    public void iAmOnRegistrationPage() {
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Threely Starter Template","YOU ARE NOT IN HOME PAGE");
    }

    @When("^I enter name as \"testuser\" email as \"(.+)\" password as \"test12345\"$")
    public void iEnterNameEmailPass(String anyEmail) {
        homePage.clickOnJoinButton();
        homePage.enterName();
        homePage.enterGmail(Utils.change());
        homePage.enterGmailPass();
    }

    @When("^I click 'submit' button$")
    public void iClickSubmitButton() {
        homePage.clickOnSubmitButton();
    }

    @Then("^I am signed-in as a new user")
    public void iAmSignedInAsANewUser() {
        loginPage.clickOnProfilePic();
        Assert.assertEquals(loginPage.getLogoutTextButton(), "Logout", "Verification of valid log in FAILED");
    }

}
