import { test as baseTest } from "@playwright/test";
import * as HomePageCases from "../cases/homepage-cases";
import * as ExplorePageCases from '../cases/explorepage-cases';

export const test = baseTest.extend<{ conceptsHomePage: void }>({
    conceptsHomePage: async ({ page }, use) => {
        await page.goto("https://www.cnarios.com/");
        await HomePageCases.clickStartExploringAtHomepage(page);
        await ExplorePageCases.clickConcepts(page);
        await use(undefined);
    },
});