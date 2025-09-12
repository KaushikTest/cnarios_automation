import { test as baseTest } from "../fixtures/homepage-fixture";
import * as HomePageCases from "../cases/homepage-cases";

export const test = baseTest.extend<{ exploredHomepage: void }>({
    exploredHomepage: async ({ page, homePage }, use) => {
        await HomePageCases.clickStartExploringAtHomepage(page);
        await use(undefined);
    },
});
