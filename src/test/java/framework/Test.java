package framework;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.Select;
import stepdefinition.SharedSD;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class Test {

  static  WebDriver driver=null;

    public static ExpectedCondition<List<WebElement>> visibilityOfNbElementsLocatedBy(final By locator, final int nb) {
        return new ExpectedCondition<List<WebElement>>() {
            @Override
            public List<WebElement> apply(WebDriver driver) {
                int nbElementIsDisplayed = 0;
                final List<WebElement> elements = driver.findElements(locator);
                for (final WebElement element : elements) {
                    if (element.isDisplayed()) {
                        nbElementIsDisplayed++;
                    }
                }
                return nbElementIsDisplayed == nb ? elements : null;
            }
        };
    }

    public static boolean isVisible(By selector) {
        WebElement element = driver.findElement(selector);

        if (element == null) {
            return false;
        }

        return element.isDisplayed();
    }


    public static boolean itDisplays(){
        WebElement ele =  driver.findElement(By.id("aa-search-input"));
        ele.sendKeys("IOS");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement ele3 = driver.findElement(By.xpath("//div[@class='aa-dataset-1']"));
        if(ele3.isDisplayed()){
            return true;
        }else{
            return false;
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/Users/ilirahmeti/Documents/chromedriver");

        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        driver.get("https://floating-anchorage-58495.herokuapp.com/");

        System.out.println(itDisplays());

        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println();


      WebElement ele =  driver.findElement(By.id("aa-search-input"));
        ele.sendKeys("ios");

//      List<WebElement> elms = driver.findElements(By.xpath("//span[@id='algolia-autocomplete-listbox-0']"));
//
//       for(WebElement i:elms){
//           String x = i.getText();
//           System.out.println(x);
//       }

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement ele3 = driver.findElement(By.xpath("//span[@id='algolia-autocomplete-listbox-0']"));
        if(ele3.isDisplayed()){
            System.out.println("Is Displayed");
        }else{
            System.out.println("NOt DISPLAYED");
        }

        String ele4 = driver.findElement(By.xpath("//*[@id=\"algolia-autocomplete-listbox-0\"]/div")).getText();
        if(ele4.contains("I will teach you")){
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }

        System.out.println(isVisible(By.xpath("//div[@class='aa-dataset-1']")));





//        JavascriptExecutor js = (JavascriptExecutor)driver;
//        js.executeScript("arguments[0].click;",ele3);

//        Actions action = new Actions(driver);
//        action.moveToElement(ele3).click().build().perform();

//        JavascriptExecutor executor = (JavascriptExecutor)driver;
//        executor.executeScript("document.getElementById('elms').style.display='block';");
//
//        Select select = new Select(driver.findElement(By.id("elms")));
//        select.deselectAll();
//        select.selectByVisibleText("Title: I will teach you IOS");

        try {
            Thread.sleep(3000);

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.quit();
    }

}
//    private static By IOSimg = By.xpath("/html/body/div[2]/div/div[5]/div/a/img");
//    private static By signInButton = By.tagName("Sign In");
//    private static By emailField = By.id("email");
//    private static By passField = By.id("password");
//    private static By submitButton = By.tagName("Submit");


//div[@id='bs-example-navbar-collapse-1']//descendant::span
//span[@id='algolia-autocomplete-listbox-0']
//div[@class='aa-dataset-1']
