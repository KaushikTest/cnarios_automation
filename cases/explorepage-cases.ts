import { Page } from "@playwright/test";
import ExplorePage from "../pages/explore-page";

export async function clickInterviewQuestions(page: Page) {
    await new ExplorePage(page).clickExploreQuestions();
    return page;
}

export async function clickConcepts(page: Page) {
    await new ExplorePage(page).clickStartLearning();
    return page;
}

export async function clickChallenges(page: Page) {
    await new ExplorePage(page).clickTakeChallenge();
}

export async function clickBlogs(page: Page) {
    await new ExplorePage(page).clickReadBlogs();
}