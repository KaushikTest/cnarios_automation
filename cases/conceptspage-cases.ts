import { Page } from "@playwright/test";
import ConceptsPage from "../pages/concepts-page";

export async function clickButtonElement(page: Page) {
    await new ConceptsPage(page).clickButton();
    return page;
}

export async function clickFormElement(page: Page) {
    await new ConceptsPage(page).clickForm();
    return page;
}

export async function clickCheckBoxInput(page: Page) {
    await new ConceptsPage(page).clickCheckBox();
    return page;
}

export async function clickRadioButtonInput(page: Page) {
    await new ConceptsPage(page).clickRadioButton();
    return page;
}

export async function clickDatePickerInput(page: Page) {
    await new ConceptsPage(page).clickDatePicker();
    return page;
}

export async function clickDroppdownInput(page: Page) {
    await new ConceptsPage(page).clickDropdown();
    return page;
}

export async function clickTimePickerInput(page: Page) {
    await new ConceptsPage(page).clickTimePicker();
    return page;
}

export async function clickAlertPromptEvent(page: Page) {
    await new ConceptsPage(page).clickAlertPrompt();
    return page;
}

export async function clickiFrameNavigation(page: Page) {
    await new ConceptsPage(page).clickiFrame();
    return page;
}

export async function clickModalOverlay(page: Page) {
    await new ConceptsPage(page).clickModal();
    return page;
}

export async function clickTooltipInteraction(page: Page) {
    await new ConceptsPage(page).clickTooltip();
    return page;
}

export async function clickDragDropEvent(page: Page) {
    await new ConceptsPage(page).clickDragDrop();
    return page;
}

export async function clickKeyboardEventsEvent(page: Page) {
    await new ConceptsPage(page).clickKeyboardEvents();
    return page;
}

export async function clickTableInteraction(page: Page) {
    await new ConceptsPage(page).clickTable();
    return page;
}

export async function clickMultiWindowNavigation(page: Page) {
    await new ConceptsPage(page).clickMultiWindow();
    return page;
}

export async function clickSliderInput(page: Page) {
    await new ConceptsPage(page).clickSlider();
    return page;
}

export async function clickScrollEventsInteraction(page: Page) {
    await new ConceptsPage(page).clickScrollEvents();
    return page;
}

export async function clickAnchorTagNavigation(page: Page) {
    await new ConceptsPage(page).clickAnchorTag();
    return page;
}

export async function clickFileUploadInput(page: Page) {
    await new ConceptsPage(page).clickFileUpload();
    return page;
}

export async function clickWaitConditionsFlow(page: Page) {
    await new ConceptsPage(page).clickWaitConditions();
    return page;
}

export async function clickShadowDOMElement(page: Page) {
    await new ConceptsPage(page).clickShadowDOM();
    return page;
}
