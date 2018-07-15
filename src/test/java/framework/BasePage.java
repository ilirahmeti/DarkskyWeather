package framework;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import stepdefinition.SharedSD;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

public class BasePage extends SharedSD {

    public static void clickOn(By locator) {
        browser(locator).click();
    }


    public static void sendText(By locator, String text) {
        browser(locator).sendKeys(text);
    }

    public static String getText(By locator) {
        return browser(locator).getText();
    }

    public static boolean elementDisplays(By locator) {
        WebElement ele3 = browser(locator);
        WebDriverWait wait = new WebDriverWait(SharedSD.getDriver(), 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        if (ele3.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    public static WebElement browser(final By locator) {
        Wait<WebDriver> wait = new FluentWait<>(SharedSD.getDriver())
                .withTimeout(30, TimeUnit.SECONDS)
                .pollingEvery(1, TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class)
                .ignoring(StaleElementReferenceException.class)
                .ignoring(ElementNotFoundException.class)
                .withMessage("Webdriver waited for 30 seconds but still could not find the element" +
                        " therefore Timeout Exception has been thrown");

        WebElement element = wait.until(new Function<WebDriver, WebElement>() {
            @Override
            public WebElement apply(WebDriver driver) {
                return driver.findElement(locator);
            }
        });
        return element;
    }

    public static int getTotalPriceTag(By locator) {
        List<WebElement> list = SharedSD.getDriver().findElements(locator);
        int totalPosttitles = 0;
        for (WebElement i : list) {
            if (i.getText().matches(".*\\d+.*")) {
                totalPosttitles++;
            }
        }
        return (totalPosttitles);
    }

    public static int getTotalElementsCount(By locator) {
        List<WebElement> list = SharedSD.getDriver().findElements(locator);
        int totalPosts = 0;
        for (WebElement i : list) {
            if (i.isDisplayed()) {
                totalPosts++;
            }
        }
        return totalPosts;
    }

    public static int allElementsHave(By locator, String stringHolder) {
        List<WebElement> list = SharedSD.getDriver().findElements(locator);
        int totalPosttitles = 0;
        for (WebElement i : list) {
            if (!i.getText().equals(stringHolder)) {
                totalPosttitles++;
            }
        }
        return totalPosttitles;
    }

    public static String randomEmail() {
        String str;
        Random rand = new Random();
        int r = rand.nextInt(100000);
        return str = "a" + r + "@yahoo.com";
    }

    public static String randomName(int length) {
        Random rand = new Random();
        String possibleLetters = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++)
            sb.append(possibleLetters.charAt(rand.nextInt(possibleLetters.length())));
        return sb.toString();
    }

    public static String randomPassword() {
        String str = RandomStringUtils.randomAlphanumeric(8);
        return str;
    }
}