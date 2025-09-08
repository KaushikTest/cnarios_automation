import { Page } from "@playwright/test";
import HomePage from "../pages/cnarios-homepage";


export async function clickFeaturesAtHomepage(page: Page) {
    await new HomePage(page).clickFeatures();
    return page;
}

export async function clickHowItWorksAtHomepage(page: Page) {
    await new HomePage(page).clickHowItWorks();
    return page;
}

export async function clickContactUsAtHomePage(page: Page) {
    await new HomePage(page).clickContactUs();
    return page;
}

export async function clickBlogsAtHomePage(page: Page) {
    await new HomePage(page).clickBlogs();
    return page;
}

export async function clickStartExploringAtHomepage(page: Page) {
    await new HomePage(page).clickStartExploring();
    return page;
}

export async function clickChallengesAtHomepage(page: Page) {
    await new HomePage(page).clickChallenges();
    return page;
}