package Stepdef;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import Pages.CreateOperatorPage;
import Pages.LoginPage;
import Pages.LogoutPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Stepdef {
	// declare objects as global to use in all step_def method
	public RemoteWebDriver driver;
	public LoginPage login;
	public LogoutPage logout;
	public CreateOperatorPage operator;

	@Given("open {string} browser")
	public void open_browser(String bn) {
		if (bn.equalsIgnoreCase("chrome"))
			// define objects
			driver = new ChromeDriver();
		login = new LoginPage(driver);
		logout = new LogoutPage(driver);
	}

	@When("launch site using {string}")
	public void sitelanunch(String url) {
		driver.get(url);
	}

	@Then("the title should be displayed")
	public void login_title() {
		if (login.isTitletDisplayed()) {
			System.out.println("Title is displayed");
		} else {
			System.out.println("Title is not diaplayed");
			System.exit(0);
		}
	}

	@And("Enter {string}, {string} and {string} and Click on signin button")
	public void login_data(String x, String y, String z) {
		System.out.println("x, y, z");
		login.Account_id.sendKeys(x);
		login.email_id.sendKeys(y);
		login.password.sendKeys(z);
		login.rememberme.click();
		login.submit.click();
	}

	@Then("next page should be displayed")
	public void title() {
		if (logout.isLogoutDisplayed()) {
			System.out.println("Login success");
		} else {
			System.out.println("Login Unsuccessfull");
			System.exit(0);
		}
	}

	@And("click on Operators")
	public void operators() {
		operator.Accounts.click();
		operator.Operators.click();
		if (operator.create_button.isDisplayed()) {
			System.out.println("Page is displayed");
		} else {
			System.out.println("Error :-(");
			System.exit(0);
		}
	}

}
