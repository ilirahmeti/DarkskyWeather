package framework;

import org.openqa.selenium.By;

public class HomePage extends BasePage {

    private By homePageHeader = By.xpath("//p[contains(text(),'Browse. Buy. Done.')]");
    private By emailField = By.id("email");
    private By passField = By.id("password");
    private By submitButton = By.xpath("//button[@class='btn btn-success']");
    private By IOSimg = By.xpath("/html/body/div[2]/div/div[5]/div/a/img");
    private By signInButton = By.xpath("//a[text()='Sign In']");
    private By signUpHeaderText = By.xpath("//*[text()='Signup']");
    private By nameField = By.name("username");
    private By gmailField = By.name("email");
    private By wrongEmailField = By.name("email");
    private By passwordField = By.name("password");
    private By joinButton = By.xpath("//*[text()='Join']");
    private By searchField = By.id("aa-search-input");
    private By totalPostsDisplay = By.xpath("/html//body//descendant::img");
    private By totalPricestags = By.xpath("//div[@class='container section']//descendant::h3");
    private By totalPostsTitles = By.xpath("//h4");
    private By totalImageDisplay = By.xpath("//*[contains(@src,'jpg')]");
    private By displayDropdownField = By.xpath("//div[@class='aa-dataset-1']");

    public String geHomepageVerification(){
        return getText(homePageHeader);
    }

    public void clickOnSignInButton() {
        clickOn(signInButton);
    }

    public void enterEmail() {
        sendText(emailField, "ilirahmeti@yahoo.com");
    }

    public void enterRightPass() {
        sendText(passField, "ilir1357");
    }

    public String getVerificationText() {
        return getText(signUpHeaderText);
    }

    public void enterName() {
        sendText(nameField, BasePage.randomName(7));
    }

    public void enterGmail(String email) {
        sendText(gmailField, email);
    }

    public void enterWrongEmail(String text) {
        sendText(wrongEmailField, text);
    }

    public void enterGmailPass() {
        sendText(passwordField, BasePage.randomPassword());
    }

    public void clickOnJoinButton() {
        clickOn(joinButton);
    }

    public void clickOnSubmitButton() {
        clickOn(submitButton);
    }

    public void enterTextOnSearchField() {
        sendText(searchField, "IOS");
    }

    public int totalPostsDisplayed() {
        return getTotalElementsCount(totalPostsDisplay);
    }

    public int totalPriceTags() {
        return getTotalPriceTag(totalPricestags);
    }

    public int totalPostTitles() {
        return allElementsHave(totalPostsTitles, "");
    }

    public boolean IOSisDisplayed() {
        return elementDisplays(displayDropdownField);
    }

    public int totalDisplayedImg() {
        return getTotalElementsCount(totalImageDisplay);
    }


}


