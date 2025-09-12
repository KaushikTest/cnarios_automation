import { expect } from "@playwright/test";
import * as HomePageCases from '../cases/homepage-cases';
import { test } from "../fixtures/homepage-fixture";


test.describe('HomePage Tests', async () => {

    test('Validate Scroll to Features', async ({ page, homePage }) => {
        await HomePageCases.clickFeaturesAtHomepage(page);
        const element = page.getByText('Hands-On Practice');
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/#features');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Scroll to How it works? ', async ({ page, homePage }) => {
        await HomePageCases.clickHowItWorksAtHomepage(page);
        const element = page.locator('p', { hasText: 'Search for the topic you want to master' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/#how-it-works');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();

    })

    test('Validate Scroll to Contact Us ', async ({ page, homePage }) => {
        await HomePageCases.clickContactUsAtHomePage(page);
        const element = page.getByRole('link', { name: 'Email' })
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/#contact-us');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();

    })

    test('Validate Navigation to Blogs', async ({ page, homePage }) => {
        await HomePageCases.clickBlogsAtHomePage(page);
        const element = page.getByText('Latest Blogs & Insights');
        expect(page.url()).toEqual('https://www.cnarios.com/blogs');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();

    })

    test('Validate Navigation to Explore', async ({ page, homePage }) => {
        await HomePageCases.clickStartExploringAtHomepage(page);
        const element = page.getByText('Explore. Practice. Master.');
        expect(page.url()).toEqual('https://www.cnarios.com/explore');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();

    })

    test('Validate Navigation to Challenges', async ({ page, homePage }) => {
        await HomePageCases.clickChallengesAtHomepage(page);
        const element = page.getByText('Automation Challenges');
        expect(page.url()).toEqual('https://www.cnarios.com/challenges');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

})

