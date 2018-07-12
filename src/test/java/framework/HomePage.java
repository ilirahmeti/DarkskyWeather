package framework;

import org.openqa.selenium.By;

public class HomePage extends BasePage {

    private static By emailField = By.id("email");
    private static By passField = By.id("password");
    private static By submitButton = By.xpath("//button[@class='btn btn-success']");
    private static By IOSimg = By.xpath("/html/body/div[2]/div/div[5]/div/a/img");
    private static By signInButton = By.xpath("//a[text()='Sign In']");
    private static By signUpHeaderText = By.xpath("//*[text()='Signup']");
    private static By nameField = By.name("username");
    private static By gmailField = By.name("email");
    private static By wrongEmailField = By.name("email");
    private static By passwordField = By.name("password");
    private static By joinButton = By.xpath("//*[text()='Join']");
    private static By searchField = By.id("aa-search-input");


    public static void clickOnIOSimg() {
        clickOn(IOSimg);
    }

    public static void clickOnSignInButton() {
        clickOn(signInButton);
    }

    public static void enterEmail() {
        sendText(emailField, "ilirahmeti@yahoo.com");
    }

    public static void enterPass() {
        sendText(passField, "sgdfsg343");
    }

    public static void enterRightPass() {
        sendText(passField, "ilir1357");
    }

    public static String getVerificationText() {
        return getText(signUpHeaderText);
    }

    public static void enterName() {
        sendText(nameField, "testuser");
    }

    public static void enterGmail(String text) {
        sendText(gmailField, text);

    }



    public static void enterWrongEmail(String text) {
        sendText(wrongEmailField, text);
    }

    public static void enterGmailPass() {
        sendText(passwordField, "ilir1357");
    }


    public static void clickOnJoinButton() {
        clickOn(joinButton);
    }


    public static void clickOnSubmitButton() {
        clickOn(submitButton);
    }

    public static void enterTextOnSearchField(){
        sendText(searchField,"IOS");
    }

}
