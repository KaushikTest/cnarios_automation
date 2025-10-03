
import { expect } from "@playwright/test";
import * as DropdownCases from '../cases/buttonpage-cases';
import { test } from "../fixtures/dropdown-fixture";


test.describe('Radio Tests', async () => {

    const country_currency = [['United States', 'USD'], ['India', 'INR'], ['Japan', 'JPY'], ['United Kingdom', 'GBP'], ['Canada', 'CAD'], ['Australia', 'AUD'], ['Germany', 'EUR'], ['France', 'EUR'], ['Italy', 'EUR'], ['Spain', 'EUR'], ['Brazil', 'BRL'], ['Russia', 'RUB'], ['China', 'CNY'], ['South Korea', 'KRW'], ['Mexico', 'MXN'], ['South Africa', 'ZAR'], ['New Zealand', 'NZD'], ['Switzerland', 'CHF'], ['Sweden', 'SEK'], ['Norway', 'NOK'], ['Denmark', 'DKK'], ['Saudi Arabia', 'SAR'], ['United Arab Emirates', 'AED'], ['Singapore', 'SGD'], ['Turkey', 'TRY'], ['Argentina', 'ARS'], ['Indonesia', 'IDR'], ['Thailand', 'THB'], ['Malaysia', 'MYR']];

    test('Validate Navigation to Try It Yourself', async ({ page, dropdownPage }) => {
        await DropdownCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'Country Currency Checker' })
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/dropdown#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    country_currency.forEach(([country, currency]) => {

        test(`Validate Country ->${country} & Currency ->${currency}`, async ({ page, dropdownPage }) => {
            await DropdownCases.clickTryItYourself(page);
            await page.getByRole('combobox', { name: 'Select Country' }).click({ timeout: 5000 });
            await page.getByRole('option', { name: country }).click({ timeout: 5000 });
            await expect(page.getByRole('heading', { name: `Currency: ${currency}` })).toBeVisible({ timeout: 5000 });
            await expect(page.locator('#root')).toContainText(`Currency: ${currency}`);
            expect(page.url()).toEqual('https://www.cnarios.com/concepts/dropdown#try-it-yourself');
        });

    })

})