import { expect } from "@playwright/test";
import * as FormPageCases from '../cases/buttonpage-cases';
import { enterFormSubmit } from "../commons/helper";
import { test } from "../fixtures/formpage-fixture";

test.describe('FormPage Tests', async () => {
    test.describe.configure({ mode: "serial" });
    test('Validate Navigation to Try It Yourself', async ({ page, formPage }) => {
        await FormPageCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'Job Application Form Cnario' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/form#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to TestCases', async ({ page, formPage }) => {
        await FormPageCases.clickTestCases(page);
        const element = page.getByRole('heading', { name: 'Test Cases' })
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/form#test-cases');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    const events = ["Frontend Conf 2025", "Automation Summit", "Design & UX Meetup"];
    events.forEach((element: string) => {
        test(`Validate the submission with Valid Data ${element}`, async ({ page, formPage }) => {
            await FormPageCases.clickTryItYourself(page);
            const action = await enterFormSubmit(page, element);
            await expect(page.getByRole('heading', { name: 'Confirm Registration' })).toBeVisible({ timeout: 15000 });
            expect(await page.getByTestId('confirm-fullname').innerText()).toBe(action.fullName);
            expect(await page.getByTestId('confirm-email').innerText()).toBe(action.email);
            expect(await page.getByTestId('confirm-phone').innerText()).toBe(action.number);
            expect(await page.getByTestId('confirm-event').innerText()).toBe(element);
            expect(await page.getByTestId('confirm-tickets').innerText()).toBe(String(5));

        })
    });

})

