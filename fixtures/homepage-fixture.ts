import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{ homePage: void }>({
    homePage: async ({ page }, use) => {
        await page.goto("https://www.cnarios.com/");
        await use(undefined);
    },
});
