package stepdefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import framework.LoginPage;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class LoginSD {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @When("^I click on Sign in button$")
    public void iClickOnSignInButton(){
        homePage.clickOnSignInButton();
    }

    @When("^I enter ilirahmeti@yahoo.com on the email field$")
    public void enterEmailOntheEmailField(){
        homePage.enterEmail();
    }

    @When("^I enter testingPass on the password field$")
    public void enterPassowrdOnThePassField(){
        homePage.enterPass();
    }


    @When("^I click on Submit button$")
    public void iClickOnSubmitButton(){
        homePage.clickOnSubmitButton();
    }

    @Then("^I verify that I am an invalid log in$")
    public void iVerifyInvalidLogin(){
        Assert.assertEquals(LoginPage.getLoginErrorText(), "Login","VARIFICATION FAILED");
    }

    @When("^I enter ilir1357 on the password field$")
    public void enterRightPassowrdOnThePassField(){
        homePage.enterRightPass();
    }


    @Then("^I verify that I am a Valid log in$")
    public void iVerifyValidLogin(){
        loginPage.clickOnProfilePic();
        Assert.assertEquals(loginPage.getLogoutTextButton(), "Logout", "Verification of valid log in FAILED");

    }



}
