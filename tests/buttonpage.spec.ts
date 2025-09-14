import { expect } from "@playwright/test";
import * as ButtonPageCases from '../cases/buttonpage-cases';
import { test } from "../fixtures/buttonpage-fixture";

test.describe('ButtonPage Tests', async () => {

    test('Validate Navigation to Try It Yourself', async ({ page, buttonPage }) => {
        await ButtonPageCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'Profile Suggestion Cnario' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/button#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to TestCases', async ({ page, buttonPage }) => {
        await ButtonPageCases.clickTestCases(page);
        const element = page.getByRole('heading', { name: 'Test Cases' })
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/button#test-cases');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Button test should change to following', async ({ page, buttonPage }) => {
        await ButtonPageCases.clickTryItYourself(page);
        const follow_element = page.getByRole('button', { name: 'Follow' }).nth(1);
        await expect(follow_element).toBeVisible({ timeout: 5000 });
        await follow_element.click();
        const following_element = page.getByRole('button', { name: 'Following' });
        await expect(following_element).toBeVisible({ timeout: 5000 });
        await expect(following_element).toBeInViewport();
    })

    test('Button test should change to follow from following', async ({ page, buttonPage }) => {
        await ButtonPageCases.clickTryItYourself(page);
        const follow_element = page.getByRole('button', { name: 'Follow' }).nth(1);
        await expect(follow_element).toBeVisible({ timeout: 5000 });
        await follow_element.click();
        const following_element = page.getByText('Following');
        await expect(following_element).toBeVisible({ timeout: 5000 });
        await following_element.click();
        await expect(following_element).not.toBeVisible({ timeout: 5000 });
    })

    test('Button test should change show Processing', async ({ page, buttonPage }) => {
        await ButtonPageCases.clickTryItYourself(page);
        const follow_element = page.getByRole('button', { name: 'Follow' }).nth(1);
        await expect(follow_element).toBeVisible({ timeout: 5000 });
        await follow_element.click();
        const processing_element = page.getByRole('button', { name: 'Processing' });
        await expect(processing_element).toBeVisible({ timeout: 5000 });
        await expect(processing_element).toBeInViewport();
    })
})