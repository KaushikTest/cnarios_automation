import { test as testWithConcepts } from "../fixtures/concepts-fixture";
import * as ConceptsPageCases from '../cases/conceptspage-cases';

export const test = testWithConcepts.extend<{ formPage: void }>({
    formPage: async ({ page, conceptsHomePage }, use) => {
        await ConceptsPageCases.clickFormElement(page);
        await use(undefined);
    },
});
