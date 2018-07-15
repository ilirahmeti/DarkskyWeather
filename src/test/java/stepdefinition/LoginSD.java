package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import framework.LoginPage;
import org.testng.Assert;

public class LoginSD {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^User is on the Threely login page$")
        public void iAmOntheThreelyHomePage(){
        homePage.clickOnSignInButton();
        Assert.assertEquals(loginPage.getLoginHeaderText(),"Login","YOU ARE NOT IN HOME PAGE");
    }

    @When("^I enter username as “n12345@test.com” and password as “123456”$")
    public void enterEmailOntheEmailField(){
        homePage.enterEmail();
        homePage.enterRightPass();
    }

    @When("^I click on submit button$")
    public void iClickOnSubmitButton() {
        homePage.clickOnSubmitButton();
    }

    @Then("^I verify logout button is displayed")
    public void iVerifyValidLogin(){
        loginPage.clickOnProfilePic();
        Assert.assertEquals(loginPage.getLogoutTextButton(), "Logout", "Verification of valid log in FAILED");

    }
}
