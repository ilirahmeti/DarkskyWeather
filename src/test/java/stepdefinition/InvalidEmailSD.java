package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import framework.LoginPage;
import org.testng.Assert;

public class InvalidEmailSD {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^I am on the Registration page$")
    public void iAmOnRegistrationPage() {
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Threely Starter Template","YOU ARE NOT IN HOME PAGE");
    }

    @When("^I enter name as \"ilirahmeti\" email as (.+) password as \"test12345\"$")
           public void iEnterNameEmailPas(String anyEmail){
        homePage.clickOnJoinButton();
        homePage.enterName();
        homePage.enterWrongEmail(anyEmail);
        homePage.enterGmailPass();
    }

    @When("^I click on 'submit' button$")
    public void iClickSubmitButton() {
        homePage.clickOnSubmitButton();
    }

    @Then("^I verify invalid email address$")
    public void iVerifyInvalidEmailAddress(){
          Assert.assertEquals(homePage.getVerificationText(),"Signup","FAIL TO VERIFY WRONG INVALID EMAIL." +
                                                                              " THE EMAIL YOU PROVIDED PASSED THE TEST");
    }
}
