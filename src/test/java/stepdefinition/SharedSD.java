package stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import utility.ConfigReader;

import java.util.concurrent.TimeUnit;

public class SharedSD {

   private static WebDriver driver = null;

    @Before
    public static void before(){
        ConfigReader configReader = new ConfigReader();
        System.setProperty("webdriver.chrome.driver", configReader.getDriverLocation());
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get(configReader.getUrl());
    }

    @After
    public static void after() {
        if (driver != null) {
            driver.manage().deleteAllCookies();
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            driver.quit();
        }
    }

    public static WebDriver getDriver() {
        return driver;
    }
}
