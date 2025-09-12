import { expect } from "@playwright/test";
import * as ButtonPageCases from '../cases/buttonpage-cases';
import { test } from "../fixtures/buttonpage-fixture";

test.describe('ButtonPage Tests', async () => {

    test('Validate Navigation to Try It Yourself', async ({ page, exploredHomepage, conceptsHomePage, buttonPage }) => {
        await ButtonPageCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'Profile Suggestion Cnario' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/button#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to TestCases', async ({ page, exploredHomepage, conceptsHomePage, buttonPage }) => {
        await ButtonPageCases.clickTestCases(page);
        const element = page.getByRole('heading', { name: 'Test Cases' })
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/button#test-cases');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })
})