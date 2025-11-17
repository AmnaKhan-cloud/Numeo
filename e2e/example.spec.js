// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
/*
Hey,

Glad to share an update on the automation framework development and the key tasks we have accomplished / planned:  

Developed a scalable Playwright framework supporting Web UI and API automation

Integrated BDD (Cucumber), Page Object Model (POM), and data-driven testing

Handled positive,negative scenarios and edge cases for login and OpenCart

Have done with post api call with json data reader.Already attached image on API_Result folder github

You can also use readme file to deep into details:

https://github.com/AmnaKhan-cloud/Numeo.git
Have integrated with CI/CD pipelines for automated execution and reporting using Jenkins with github.You can access it via :

http://localhost:8080/job/numeo6/1/console
 Provide details technical documentation in readme file on github for architecture,setup,test coverage:
https://github.com/AmnaKhan-cloud/Numeo/blob/main/README.md
Download attached automation and manual testing strategies pptx for your review.

Kindly review my tasks .I am really waiting for your generous response.


*/