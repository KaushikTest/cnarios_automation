
import { expect } from "@playwright/test";
import * as RadioCases from '../cases/buttonpage-cases';
import { test } from "../fixtures/radiopage-fixture";
import { attemptQuiz, generateCombinations } from "../commons/helper";

test.describe('Radio Tests', async () => {

    const correctAnswers = ['get(url)', 'To locate a single web element', 'ID', 'To provide explicit wait'];
    const allOptions = [['get(url)', 'navigate().refresh()', 'open(url)', 'launch(url)'], ['To locate a single web element', 'To close the browser', 'To submit a form', 'To take screenshots'], ['ID', 'Class Name', 'XPath', 'CSS Selector'], ['To provide explicit wait', 'To refresh the browser', 'To wait for an element to', 'To stop execution permanently']];

    const allCombinations = generateCombinations(allOptions);
    test('Validate Navigation to Try It Yourself', async ({ page, radioPage }) => {
        await RadioCases.clickTryItYourself(page);
        const element = page.getByRole('heading', { name: 'Quiz Board Cnario' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/radio#try-it-yourself');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate submission of correct options', async ({ page, radioPage }) => {
        await RadioCases.clickTryItYourself(page);
        await page.getByRole('radio', { name: 'get(url)' }).check();
        await page.getByRole('radio', { name: 'To locate a single web element' }).check();
        await page.getByRole('radio', { name: 'ID', exact: true }).check();
        await page.getByRole('radio', { name: 'To provide explicit wait' }).check();
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('h5')).toContainText('Pass 🎉');
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/radio#try-it-yourself');
    })

    allCombinations.forEach((answers, index) => {

        test(`Validate submission of options-> ${answers}`, async ({ page, radioPage }) => {
            const expectedResult = JSON.stringify(answers) === JSON.stringify(correctAnswers) ? 'Pass 🎉' : 'Fail ❌';
            await RadioCases.clickTryItYourself(page);
            await attemptQuiz(page, answers, expectedResult);
        });
    })

})









