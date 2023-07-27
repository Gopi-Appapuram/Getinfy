package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

//	@Given("open browser")
//	public void open_browser()
//	{
//		//open chrome browser
//		WebDriverManager.chromedriver().setup();
//		ChromeDriver driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.get("http://3.109.42.45:3000/sign-in");
//		//define wait
//		FluentWait<ChromeDriver> w = new FluentWait<ChromeDriver>(driver);
//		w.withTimeout(Duration.ofSeconds(20));
//		w.pollingEvery(Duration.ofMillis(1000));
//	}
	// elements finder
	@FindBy(name = "enterAccount")
	public WebElement Account_id;
	@FindBy(name = "usernameOrEmail")
	public WebElement email_id;
	@FindBy(name = "password")
	public WebElement password;
	@FindBy(name = "rememberMe")
	public WebElement rememberme;
	@FindBy(xpath = "//p[@class='text-white']")
	public WebElement submit;
	@FindBy(xpath = "//h4[@class='font-bold text-2xl']")
	public WebElement title;

	// constructor method
	public LoginPage(RemoteWebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public boolean isTitletDisplayed() {
		if (title.isDisplayed()) {
			return (true);
		} else {
			return (false);
		}
	}

	public void fill_email_id(String x) {
		password.sendKeys(x);
	}

	public void fill_password(String y) {
		password.sendKeys(y);
	}

	public void fill_account_id(String z) {
		password.sendKeys(z);
	}

	public void click_login() throws Exception {
		submit.click();
		Thread.sleep(5000);
	}

}
