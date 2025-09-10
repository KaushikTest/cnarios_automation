import { expect } from "@playwright/test";
import * as ConceptsPageCases from '../cases/conceptspage-cases';
import { test } from "../fixtures/concepts-fixture";

test.describe('ConceptsPage Tests', async () => {

    test('Validate Navigation to Concepts Button', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickButtonElement(page);
        const element = page.getByText('Finding Button');
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/button');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Form', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickFormElement(page);
        const element = page.getByRole('heading', { name: 'Form' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/form');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Checkbox', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickChechBoxInput(page);
        const element = page.getByRole('heading', { name: 'Checkbox' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/checkbox');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Radio Button', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickRadioButtonInput(page);
        const element = page.getByRole('heading', { name: 'Radio' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/radio');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Date Picker', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickDatePickerInput(page);
        const element = page.getByRole('heading', { name: 'Datepicker' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/datepicker');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Dropdown', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickDroppdownInput(page);
        const element = page.getByRole('heading', { name: 'Dropdown' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/dropdown');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })


    test('Validate Navigation to Concepts Timepicker', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickTimePickerInput(page);
        const element = page.getByRole('heading', { name: 'Timepicker' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/timepicker');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Alert&Prompt', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickAlertPromptEvent(page);
        const element = page.getByRole('heading', { name: 'Alert' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/alert');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Iframe', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickiFrameNavigation(page);
        const element = page.getByRole('heading', { name: 'Iframe' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/iframe');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Modal', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickModalOverlay(page);
        const element = page.getByRole('heading', { name: 'Modal' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/modal');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Tooltip', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickTooltipInteraction(page);
        const element = page.getByRole('heading', { name: 'Tooltip' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/tooltip');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Draganddrop', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickDragDropEvent(page);
        const element = page.getByRole('heading', { name: 'Draganddrop' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/draganddrop');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Keyboard Events', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickKeyboardEventsEvent(page);
        const element = page.getByRole('heading', { name: 'Keyboard' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/keyboard');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Table', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickTableInteraction(page);
        const element = page.getByRole('heading', { name: 'Table' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/table');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Multiwindow', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickMultiWindowNavigation(page);
        const element = page.getByRole('heading', { name: 'Multiwindow' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/multiwindow');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Slider', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickSliderInput(page);
        const element = page.getByRole('heading', { name: 'Slider' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/slider');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Scroll', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickScrollEventsInteraction(page);
        const element = page.getByRole('heading', { name: 'Scroll' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/scroll');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Anchor', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickAnchorTagNavigation(page);
        const element = page.getByRole('heading', { name: 'Link' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/links');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Fileupload', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickFileUploadInput(page);
        const element = page.getByRole('heading', { name: 'Fileupload' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/fileupload');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Wait', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickWaitConditionsFlow(page);
        const element = page.getByRole('heading', { name: 'Wait' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/wait');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Navigation to Concepts Shadowdom', async ({ page, conceptsHomePage }) => {
        await ConceptsPageCases.clickShadowDOMElement(page);
        const element = page.getByRole('heading', { name: 'Shadowdom' });
        await element.scrollIntoViewIfNeeded({ timeout: 5000 });
        expect(page.url()).toEqual('https://www.cnarios.com/concepts/shadowdom');
        await expect(element).toBeVisible();
        await expect(element).toBeInViewport();
    })

    test('Validate Number of Cards in Concepts Page', async ({ page, conceptsHomePage }) => {
        const elements = page.locator("//div[starts-with(@class,'grid')]//a[starts-with(@href,'/concepts')]");
        await elements.first().waitFor({ state: "visible" });
        const count = await elements.count();
        expect(count).toEqual(21);
    })

})