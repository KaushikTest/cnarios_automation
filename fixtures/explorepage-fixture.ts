import { test as baseTest } from "@playwright/test";
import * as HomePageCases from "../cases/homepage-cases";

export const test = baseTest.extend<{ exploredHomepage: void }>({
    exploredHomepage: async ({ page }, use) => {
        await page.goto("https://www.cnarios.com/");
        await HomePageCases.clickStartExploringAtHomepage(page);
        await use(undefined);
    },
});
