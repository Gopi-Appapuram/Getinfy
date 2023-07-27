package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CreateOperatorPage {
	// elements finder
	@FindBy(xpath = "//span[contains(text(),'ACCOUNTS')]")
	public WebElement Accounts;
	@FindBy(xpath = "//span[normalize-space()='Operators']")
	public WebElement Operators;
	@FindBy(xpath = "//button[@class='button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm flex justify-center pt-[6px] gap-1 w-full']")
	public WebElement create_button;
	@FindBy(xpath = "//input[contains(@placeholder,'Enter operator title')]")
	public WebElement Operator_title;
	@FindBy(xpath = "//div[contains(@class,'select__control select__control--is-focused select__control--menu-is-open css-d9n00t-control')]//div[contains(@class,'select-dropdown-indicator')]//*[name()='svg']")
	public WebElement parent_account;

}
