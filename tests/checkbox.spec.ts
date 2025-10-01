import { expect } from "@playwright/test";
import * as CheckboxCases from '../cases/buttonpage-cases';
import { uncheckDefault } from "../commons/helper";
import { test } from "../fixtures/checkboxpage-fixture";

test.describe('Checkbox Tests', async () => {
    test.describe.configure({ mode: "serial" });
    test('Validate Navigation to Try It Yourself', async ({ page, checkboxPage }) => {
        await CheckboxCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'News Feed Cnario' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/checkbox#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate the default category feed selected', async ({ page, checkboxPage }) => {
        await CheckboxCases.clickTryItYourself(page);
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/checkbox#try-it-yourself');
        await expect(page.getByText('Category: Technology')).toBeVisible();
        await expect(page.getByText('Category: Sports')).toBeVisible();
    })

    const categories = ['Technology', 'Sports', 'Business', 'Science', 'Health', 'Entertainment'];

    categories.forEach((element: string) => {
        test(`Validate the selection of category ${element}`, async ({ page, checkboxPage }) => {
            await CheckboxCases.clickTryItYourself(page);
            await uncheckDefault(page);
            await page.getByRole('checkbox', { name: element }).check();
            await page.getByRole('button', { name: 'Done' }).click();
            await expect(page.getByText(`Category: ${element}`)).toBeVisible();
        })

    })

    const two_categories = [['Technology', 'Sports'], ['Sports', 'Business'], ['Business', 'Science'], ['Science', 'Health'], ['Health', 'Entertainment'], ['Technology', 'Entertainment']];

    two_categories.forEach(([category1, category2]) => {
        test(`Validate the selection of two_category ${category1} & ${category2}`, async ({ page, checkboxPage }) => {
            await CheckboxCases.clickTryItYourself(page);
            await uncheckDefault(page);
            await page.getByRole('checkbox', { name: category1 }).check();
            await page.getByRole('checkbox', { name: category2 }).check();
            await page.getByRole('button', { name: 'Done' }).click();
            await expect(page.getByText(`Category: ${category1}`)).toBeVisible();
            await expect(page.getByText(`Category: ${category2}`)).toBeVisible();
        })
    })

})
