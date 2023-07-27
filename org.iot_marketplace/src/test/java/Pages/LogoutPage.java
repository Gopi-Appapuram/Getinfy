package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage {
	// elements finder
	@FindBy(id = "dropdown-toggle-21-jLBZUZrKVH")
	public WebElement profilename;
	@FindBy(xpath = "//span[normalize-space()='Sign Out']")
	public WebElement signout_button;

	// constructor method
	public LogoutPage(RemoteWebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public boolean isLogoutDisplayed() {
		if (profilename.isDisplayed()) {
			return (true);
		} else {
			return (false);
		}
	}

	public void click_profile() throws Exception {
		profilename.click();
	}

	public void click_signout() throws Exception {
		signout_button.click();
	}
}
