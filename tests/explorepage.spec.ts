import { expect } from "@playwright/test";
import * as ExplorePageCases from '../cases/explorepage-cases';
import { test } from "../fixtures/homepage-fixture";

test.describe('ExplorePage Tests', async () => {

    test('Validate Navigation to Explore Questions', async ({ page, exploredHomepage }) => {
        await ExplorePageCases.clickInterviewQuestions(page);
        const element = page.getByText('Automation Interview Questions');
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/interview-questions');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts', async ({ page, exploredHomepage }) => {
        await ExplorePageCases.clickConcepts(page);
        const element = page.getByText('What do you want to explore today?');
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Challenges', async ({ page, exploredHomepage }) => {
        await ExplorePageCases.clickChallenges(page);
        const element = page.locator('h1', { hasText: 'Automation Challenges' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/challenges');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Blogs', async ({ page, exploredHomepage }) => {
        await ExplorePageCases.clickBlogs(page);
        const element = page.locator('h1', { hasText: 'Latest Blogs & Insights' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/blogs');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

})