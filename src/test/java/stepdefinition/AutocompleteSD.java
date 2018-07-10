package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import org.testng.Assert;
import utility.Utils;

public class AutocompleteSD {

    HomePage homePage = new HomePage();
    Utils utils = new Utils();


    @Given("^I am on home page$")
    public void iAmOnHomePage(){
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Threely Starter Template","YOU ARE NOT IN HOME PAGE");
    }

    @When("^I search on top search bar with text \"ios\"")
    public void iEnterTextOnSearchBar(){
        homePage.enterTextOnSearchField();
    }

    @Then("^I verify \"Title: I will teach you IOS\" as displayed result$")
    public void iVerifyDisplayedResult(){
        Assert.assertEquals(utils.itDisplays(),true,"THE IOS ELEMENT IS NOT VISIBLE");
    }
}
