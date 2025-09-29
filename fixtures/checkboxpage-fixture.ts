import { test as testWithConcepts } from "../fixtures/concepts-fixture";
import * as ConceptsPageCases from '../cases/conceptspage-cases';

export const test = testWithConcepts.extend<{ checkboxPage: void }>({
    checkboxPage: async ({ page, conceptsHomePage }, use) => {
        await ConceptsPageCases.clickCheckBoxInput(page);
        await use(undefined);
    },
});
