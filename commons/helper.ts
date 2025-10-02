import { faker } from '@faker-js/faker';
import { Page } from '@playwright/test';
import { expect } from "@playwright/test";

export async function enterFormSubmit(page: Page, event_type: string) {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const number = faker.phone.number();
    await page.getByTestId('input-fullname').fill(fullName, { timeout: 5000 });
    await page.getByTestId('input-email').fill(email, { timeout: 5000 });
    await page.getByTestId('input-phone').fill(number, { timeout: 5000 });
    await page.getByRole('combobox', { name: 'Select Event' }).click({ timeout: 5000 });
    await page.getByRole('option', { name: event_type }).click();
    await page.getByTestId('input-tickets').fill(String(5));
    await page.getByText('Register').click({ timeout: 15000 });
    return { page, fullName, email, number };
}

export async function uncheckDefault(page: Page) {
    await page.getByRole('button', { name: 'Set Preferences' }).click();
    await page.getByRole('checkbox', { name: 'Technology' }).uncheck();
    await page.getByRole('checkbox', { name: 'Sports' }).uncheck();
}

export function generateCombinations(options: string[][]): string[][] {
    if (options.length === 0) return [[]];
    const [first, ...rest] = options;
    const restCombos = generateCombinations(rest);

    return first.flatMap(option =>
        restCombos.map(combo => [option, ...combo])
    );
}

export async function attemptQuiz(page: Page, answers: string[], expectedResult: 'Pass 🎉' | 'Fail ❌') {
    for (const element of answers) {
        if (element === 'ID') {
            await page.getByRole('radio', { name: `${element}`, exact: true }).check({ timeout: 5000 });
        } else {
            await page.getByRole('radio', { name: `${element}` }).check({ timeout: 5000 });
        }

    }
    await page.getByRole('button', { name: 'Submit' }).click({ timeout: 5000 });
    await expect(page.locator('h5')).toContainText(expectedResult);
}
