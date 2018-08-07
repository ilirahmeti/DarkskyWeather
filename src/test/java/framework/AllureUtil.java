package framework;

import ru.yandex.qatools.allure.annotations.Attachment;

public class AllureUtil {


    /**
     * This method is used to attached screenshot in Allure report
     * @param screenShot
     * @return
     */
    @Attachment(value = "Page screenshot", type = "image/png")
    public static byte[] attachScreenshot(byte[] screenShot) {

        return screenShot;
    }

}
