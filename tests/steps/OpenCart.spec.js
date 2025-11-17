import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture.js';
const { Given, When, Then } = createBdd(test);

Given('the user is on the OpenCart home page', async ({ openCartPage }) => {
    await openCartPage.goto();
});

When('the user enters {string} into the search box', async ({ openCartPage }, productName) => {
    await openCartPage.enterSearchText(productName);
});

When('clicks on the search button', async ({ openCartPage }) => {
    await openCartPage.clickSearchButton();
});

Then('the search results page should be displayed', async ({ openCartPage }) => {
    const results = await openCartPage.getSearchResultsText();
    if (!results || results.length === 0) throw new Error('No search results found');
});

Then(
    'the system should show {string}',
    async ({ openCartPage }, { text: productName }) => {
        const results = await openCartPage.getSearchResultsText();
        const found = results.some(text => text.includes(productName));
        if (!found) throw new Error(`No products related to ${productName} found`);
    });
