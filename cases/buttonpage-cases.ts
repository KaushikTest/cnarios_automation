import { Page } from "@playwright/test";
import ButtonPage from "../pages/button-page";

export async function clickTryItYourself(page: Page) {
    await new ButtonPage(page).clickTryItYourself();
    return page;
}

export async function clickTestCases(page: Page) {
    await new ButtonPage(page).clickTestCases();
    return page;
}

