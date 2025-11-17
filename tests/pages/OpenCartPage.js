import { expect } from '@playwright/test';

export class POpenCartPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('input[name="search"]');
        this.searchButton = page.locator('button.btn-default[type="button"]');
        this.searchResults = page.locator('div.product-layout .caption h4 a');
        this.pageHeading = page.locator('h2');
    }

    async goto(url = 'https://demo.opencart.com') {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
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
