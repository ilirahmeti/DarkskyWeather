package utility;

import framework.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import stepdefinition.SharedSD;

import java.util.List;

public class Utils extends BasePage {

    public static int totalPostsDisplayed() {

        List<WebElement> list = SharedSD.getDriver().findElements(By.xpath("/html//body//descendant::img"));
        int totalPosts = 0;
        for (WebElement i : list) {
            if (i.isDisplayed()) {
                totalPosts++;
            }
        }
        return totalPosts;
    }

    public static int totalPriceTags(){

        List<WebElement> list = SharedSD.getDriver().findElements(By.xpath("//div[@class='container section']//descendant::div[@class='gig-card']"));
        int totalPricetags = 0;
        for (WebElement i : list) {
            if (i.getText().contains("$")){
                totalPricetags++;
            }
        }
        return totalPricetags;
    }

    public static int totalPostTitles(){
        List<WebElement> list = SharedSD.getDriver().findElements(By.xpath("//h4"));
        int totalPosttitles = 0;
        for (WebElement i : list) {
            if (!i.getText().equals("")){
                totalPosttitles++;
            }
        }
        return totalPosttitles;
    }

    public static int totalDisplayedImg(){
        List<WebElement> list = SharedSD.getDriver().findElements(By.xpath("//*[contains(@src,'jpg')]"));
        int totalDisplayedimg = 0;
        for (WebElement i : list) {
            totalDisplayedimg++;
        }
        return totalDisplayedimg;
    }

    public static boolean itDisplays(){

       WebElement ele3 = browser(By.xpath("//div[@class='aa-dataset-1']"));
        WebDriverWait wait = new WebDriverWait(SharedSD.getDriver(),10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='aa-dataset-1']")));
        if(ele3.isDisplayed()){
            return true;
        }else{
            return false;
        }
    }
}
