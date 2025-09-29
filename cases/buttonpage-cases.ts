import { Page } from "@playwright/test";
import ConceptFields from "../pages/button-page";

export async function clickTryItYourself(page: Page) {
    await new ConceptFields(page).clickTryItYourself();
    return page;
}

export async function clickTestCases(page: Page) {
    await new ConceptFields(page).clickTestCases();
    return page;
}

