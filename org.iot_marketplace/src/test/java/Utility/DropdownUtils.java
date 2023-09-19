package Utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropdownUtils {
    private WebDriver driver;

    public DropdownUtils(WebDriver driver) {
        this.driver = driver;
    }

    public void selectByValue(By locator, String value) {
        Select dropdown = new Select(driver.findElement(locator));// should include the locator
        dropdown.selectByValue(value);
    }

    public void selectByText(By locator, String text) {
        Select dropdown = new Select(driver.findElement(locator));// should include the locator
        dropdown.selectByVisibleText(text);
    }

    public void selectByIndex(By locator, int index) {
        Select dropdown = new Select(driver.findElement(locator));// should include the locator
        dropdown.selectByIndex(index);
    }

    public String getSelectedOptionText(By locator) {
        Select dropdown = new Select(driver.findElement(locator));
        WebElement selectedOption = dropdown.getFirstSelectedOption();
        return selectedOption.getText();
    }
}



//this utility class in a Page Object (DropdownPage) to interact with a dropdown on a web page.

//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//
//public class DropdownPage {
//    private WebDriver driver;
//    private DropdownUtils dropdownUtils;
//
//    private By dropdownLocator = By.id("dropdown");
//
//    public DropdownPage(WebDriver driver) {
//        this.driver = driver;
//        this.dropdownUtils = new DropdownUtils(driver);
//    }
//
//    public void selectOptionByValue(String value) {
//        dropdownUtils.selectByValue(dropdownLocator, value);
//    }
//
//    public void selectOptionByText(String text) {
//        dropdownUtils.selectByText(dropdownLocator, text);
//    }
//
//    public void selectOptionByIndex(int index) {
//        dropdownUtils.selectByIndex(dropdownLocator, index);
//    }
//
//    public String getSelectedOptionText() {
//        return dropdownUtils.getSelectedOptionText(dropdownLocator);
//    }
//}

