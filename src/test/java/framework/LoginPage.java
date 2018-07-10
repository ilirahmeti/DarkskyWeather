package framework;

import org.openqa.selenium.By;

public class LoginPage extends BasePage{

    private static By headerVerification = By.xpath("//*[text()='Login']");
    private static By profileImage = By.xpath("//img[@class='img-circle']");
    private static By logoutButton = By.xpath("//a[text()='Logout']");



    public static String getLoginErrorText(){
        return getText(headerVerification);
    }

    public static String getLoginRightText(){
        return getText(headerVerification);
    }

    public static void clickOnProfilePic(){
        clickOn(profileImage);
    }

    public static String getLogoutTextButton(){
        return getText(logoutButton);
    }


}
