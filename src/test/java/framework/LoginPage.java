package framework;

import org.openqa.selenium.By;

public class LoginPage extends BasePage{

    private By headerVerification = By.xpath("//*[text()='Login']");
    private By profileImage = By.xpath("//img[@class='img-circle']");
    private By logoutButton = By.xpath("//a[text()='Logout']");

    public String getLoginHeaderText(){
        return getText(headerVerification);
    }

    public void clickOnProfilePic(){
        clickOn(profileImage);
    }

    public String getLogoutTextButton(){
        return getText(logoutButton);
    }


}
