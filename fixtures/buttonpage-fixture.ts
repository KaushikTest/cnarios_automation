import { test as testWithConcepts } from "../fixtures/concepts-fixture";
import * as ConceptsPageCases from '../cases/conceptspage-cases';

export const test = testWithConcepts.extend<{ buttonPage: void }>({
    buttonPage: async ({ page, conceptsHomePage }, use) => {
        await ConceptsPageCases.clickButtonElement(page);
        await use(undefined);
    },
});
