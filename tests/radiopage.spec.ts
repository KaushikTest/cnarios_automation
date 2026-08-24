
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
        // This matrix tests the SITE's grading logic (does 3-of-4 pass?), not
        // browser rendering — that logic can't differ per browser, so running
        // all 256 combinations x3 browsers is redundant work. Every 20th
        // combination is the representative sample; the rest are tagged
        // @radio-matrix-only. CI runs the full matrix on chromium, and
        // filters those tagged tests OUT on firefox/webkit via --grep-invert
        // — so they're never even collected there, not run-then-skipped.
        const isSample = index % 20 === 0;
        const title = isSample
            ? `Validate submission of options-> ${answers}`
            : `Validate submission of options-> ${answers} @radio-matrix-only`;

        test(title, async ({ page, radioPage }) => {
            // The live quiz grades on a 3-of-4 threshold, not an exact match —
            // confirmed by running the full combination matrix against the site.
            const matchCount = answers.filter((a, i) => a === correctAnswers[i]).length;
            const expectedResult = matchCount >= 3 ? 'Pass 🎉' : 'Fail ❌';
            await RadioCases.clickTryItYourself(page);
            await attemptQuiz(page, answers, expectedResult);
        });
    })

})









