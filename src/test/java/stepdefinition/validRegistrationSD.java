package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.BasePage;
import framework.HomePage;
import framework.LoginPage;
import org.testng.Assert;

public class validRegistrationSD {
    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^I am on Registration page$")
    public void iAmOnRegistrationPage() {
        homePage.clickOnJoinButton();
        Assert.assertEquals(homePage.getVerificationText(), "Signup", "YOU ARE NOT IN HOME PAGE");
    }

    @When("^I enter the name as \"(.+)\" email as \"(.+)\" password as \"(.+)\"$")
    public void iEnterNameEmailPas(String anyName, String anyEmail, String anyPass) {
        homePage.enterName();
        homePage.enterGmail(BasePage.randomEmail());
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
