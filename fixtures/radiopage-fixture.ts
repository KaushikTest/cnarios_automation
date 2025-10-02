import { test as testWithConcepts } from "../fixtures/concepts-fixture";
import * as ConceptsPageCases from '../cases/conceptspage-cases';

export const test = testWithConcepts.extend<{ radioPage: void }>({
    radioPage: async ({ page, conceptsHomePage }, use) => {
        await ConceptsPageCases.clickRadioButtonInput(page);
        await use(undefined);
    },
});
