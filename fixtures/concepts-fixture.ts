import { test as testWithExplore } from "../fixtures/explorepage-fixture";
import * as ExplorePageCases from '../cases/explorepage-cases';

export const test = testWithExplore.extend<{ conceptsHomePage: void }>({
    conceptsHomePage: async ({ page, exploredHomepage }, use) => {
        await ExplorePageCases.clickConcepts(page);
        await use(undefined);
    },
});
