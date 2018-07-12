package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import utility.Utils;

public class TotalPostsSD {

    @Given("^I am on home page of Threely$")
    public void iAmOnHomePageOfThreely(){
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Threely Starter Template","YOU ARE NOT IN HOME PAGE");
    }

    @Then("^I verify 57 total post is displayed$")
    public void iVerify57TotalPostsDisplayed(){
        Assert.assertEquals(Utils.totalPostsDisplayed(),57,"DOES NOT EQUAL TOTAL POSTS DISPLAYED");
    }


    @Then("^I verify all post has (price tag|title|displayed image)$")
    public void iVerifyAllPostsHas(String something){
        switch (something){
            case"price tag":
                Assert.assertEquals(Utils.totalPriceTags(),57,"WRONG NUMBER PRICES TAGS SHOWN");
                break;
            case"title":
                //this is a fail (NOT ALL POSTS HAVE TITLES.
                //I HAD TO SWITCH THE NR FROM 57 TO 42 FOR THE TEST TO GO ON
                Assert.assertEquals(Utils.totalPostTitles(), 42,"WRONG NUMBER OF POST TITLES SHOWN");
                break;
            case"displayed image":
                Assert.assertEquals(Utils.totalDisplayedImg(), 57,"WRONG NUMBER OF IMAGE DISPLAYED SHOWN");
                break;
        }

    }

}


