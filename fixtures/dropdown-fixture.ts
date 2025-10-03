import { test as testWithConcepts } from "../fixtures/concepts-fixture";
import * as ConceptsPageCases from '../cases/conceptspage-cases';

export const test = testWithConcepts.extend<{ dropdownPage: void }>({
    dropdownPage: async ({ page, conceptsHomePage }, use) => {
        await ConceptsPageCases.clickDroppdownInput(page);
        await use(undefined);
    },
});
