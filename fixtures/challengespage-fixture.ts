import { test as baseTest } from "@playwright/test";
import * as HomePageCases from "../cases/homepage-cases";

export const test = baseTest.extend<{ challengesPage: void }>({
    challengesPage: async ({ page }, use) => {
        await page.goto("https://www.cnarios.com/", { timeout: 5000 });
        await HomePageCases.clickChallengesAtHomepage(page);
        await use(undefined);
    },
});