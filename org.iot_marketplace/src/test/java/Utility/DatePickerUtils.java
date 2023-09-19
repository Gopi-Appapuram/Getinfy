package Utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class DatePickerUtils {
    private WebDriver driver;

    public DatePickerUtils(WebDriver driver) {
        this.driver = driver;
    }

    public void selectDate(String calendarXPath, String desiredDate) throws ParseException {
        // Parse the desired date
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date dateToSelect = sdf.parse(desiredDate);

        // Find the calendar element
        WebElement calendar = driver.findElement(By.xpath(calendarXPath));

        // Navigate to the desired year and month
        WebElement yearMonthSelector = calendar.findElement(By.className("yearMonthSelector"));
        yearMonthSelector.click();

        // Assume the date format in the calendar is 'MMM yyyy'
        String desiredMonthYear = new SimpleDateFormat("MMM yyyy").format(dateToSelect);

        // Click to select the desired month and year
        driver.findElement(By.xpath("//div[contains(@class, 'monthDropdown')]//*[text()='" + desiredMonthYear + "']"))
                .click();

        // Wait for the date grid to load
        // Adjust the wait time based on your application's behavior
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Click the desired date
        selectDateInGrid(calendar, dateToSelect);
    }

    private void selectDateInGrid(WebElement calendar, Date dateToSelect) {
        // Get all date elements in the grid
        List<WebElement> dateElements = calendar.findElements(By.xpath("//div[@class='date']"));

        Calendar cal = Calendar.getInstance();
        cal.setTime(dateToSelect);
        int desiredDay = cal.get(Calendar.DAY_OF_MONTH);

        // Find and click the desired date
        for (WebElement dateElement : dateElements) {
            int day = Integer.parseInt(dateElement.getText());
            if (day == desiredDay) {
                dateElement.click();
                break;
            }
        }
    }
}





//To use this utility class to select a date, follow these steps:
//
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//public class Main {
//    public static void main(String[] args) {
//        // Set the path to your ChromeDriver executable
//        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
//
//        WebDriver driver = new ChromeDriver();
//        driver.get("URL_of_your_page");
//
//        // Provided XPath for the calendar
//        String calendarXPath = "//div[@class='your-calendar-class']";
//
//        DatePickerUtils datePickerUtils = new DatePickerUtils(driver);
//
//        try {
//            // Select a desired date (format: "dd/MM/yyyy")
//            datePickerUtils.selectDate(calendarXPath, "15/09/2023");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        // Close the browser
//        driver.quit();
//    }
//}
