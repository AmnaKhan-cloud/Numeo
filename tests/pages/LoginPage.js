import { expect } from '@playwright/test';

export class PLoginPage {


  constructor(page) {
    this.page = page;
    this.email_box = page.getByLabel('E-Mail Address')
    this.password_box = page.getByLabel('Password');
    this.submit_btn = page.locator("input[value='Login']")
    this.toast1 = page.getByText('Warning: No match for E-Mail Address and/or Password.')
    this.toast = page.locator('div.alert-danger'); // dynamic error messages
    this.user = page.locator('h2').filter({ hasText: 'My Account' });


    // Optional failure message (if used on forms)
    this.failureMessage = page.locator("mat-error[role='alert']");



  }

  async goto(url) {
    await this.page.goto(url);

  }

  // convenient helper to perform full login flow
  async login(email, password, url = 'https://demo.opencart.com/index.php?route=account/login') {
    await this.goto(url);
    await this.enterEmailAddress(email);
    await this.enterPassword(password);
    await this.clickOnLogin();
    await this.verifyLandonHome();
  }
  async enterEmailAddress(emailAddress) {
    await this.email_box.fill(emailAddress);
  }

  async enterPassword(password) {
    await this.password_box.fill(password);
  }

  async clickOnLogin() {

    await this.submit_btn.click();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(2000);



  }

  async verifyUrlContains(expected) {
    await expect(this.page).toHaveURL(expected);
  }

  async verifyLandonHome() {


    await expect(this.user).toBeVisible({ timeout: 10000 });

    const userName = await this.user.textContent();
    console.log("Username: " + userName);
    console.log("Username: " + userName);
    // Optional: log for debugging
    console.log('Successfully landed on Home Page');
  }

  async getErrorMessage() {
    return (await this.toast.textContent()).trim();
  }

  async verifyErrorContains(expectedTexts) {
    const actualText = (await this.toast.textContent()).trim();
    console.log('Actual error:', actualText);

    // Convert string to array if only one expected message is passed
    if (!Array.isArray(expectedTexts)) expectedTexts = [expectedTexts];

    // Check if any expected message is contained in actual text
    const matched = expectedTexts.some(text => actualText.includes(text));
    expect(matched).toBeTruthy();
  }
  async enterSearchText(productName) {
    await this.searchBox.fill(productName);
  }

  async clickSearchButton() {
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getSearchResultsText() {
    return this.searchResults.allTextContents();
  }

}
