import { Page } from "@playwright/test";

export default class Concepts {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get Button() {
        return this.page.getByRole('link', { name: 'Element Button' });
    }

    public get Form() {
        return this.page.getByRole('link', { name: 'Element Form' });
    }

    public get Checkbox() {
        return this.page.getByRole('link', { name: 'Input Checkbox' });

    }

    public get RadioButton() {
        return this.page.getByRole('link', { name: 'Input Radio Button' });
    }

    public get DatePicker() {
        return this.page.getByRole('link', { name: 'Input Date Picker' });
    }

    public get Dropdown() {
        return this.page.getByRole('link', { name: 'Input Dropdown' });
    }

    public get TimePicker() {
        return this.page.getByRole('link', { name: 'Input Time Picker' });
    }

    public get AlertPrompt() {
        return this.page.getByRole('link', { name: 'Event Alert' });
    }

    public get iFrame() {
        return this.page.getByRole('link', { name: 'Navigation iFrame' });
    }

    public get Modal() {
        return this.page.getByRole('link', { name: 'Overlay Modal' });
    }

    public get Tooltip() {
        return this.page.getByRole('link', { name: 'Interaction Tooltip' });
    }

    public get DragDrop() {
        return this.page.getByRole('link', { name: 'Event Drag' });
    }

    public get KeyboardEvents() {
        return this.page.getByRole('link', { name: 'Event Keyboard' });
    }

    public get Table() {
        return this.page.getByRole('link', { name: 'Interaction Table' });
    }

    public get MultiWindow() {
        return this.page.getByRole('link', { name: 'Navigation Multi' });
    }

    public get Slider() {
        return this.page.getByRole('link', { name: 'Input Slider' });
    }

    public get ScrollEvents() {
        return this.page.getByRole('link', { name: 'Interaction Scroll' });
    }

    public get AnchorTag() {
        return this.page.getByRole('link', { name: 'Navigation Anchor' });
    }

    public get FileUpload() {
        return this.page.getByRole('link', { name: 'Input File' });
    }

    public get WaitConditions() {
        return this.page.getByRole('link', { name: 'Control Flow' });
    }

    public get ShawdowDOM() {
        return this.page.getByRole('link', { name: 'Element Shadow' });
    }

    public async clickButton() {
        await this.Button.click();
    }

    public async clickForm() {
        await this.Form.click();
    }

    public async clickCheckBox() { await this.Checkbox.click(); }
    public async clickRadioButton() { await this.RadioButton.click(); }
    public async clickDatePicker() { await this.DatePicker.click(); }
    public async clickDropdown() { await this.Dropdown.click(); }
    public async clickTimePicker() { await this.TimePicker.click(); }
    public async clickAlertPrompt() { await this.AlertPrompt.click(); }
    public async clickiFrame() { await this.iFrame.click(); }
    public async clickModal() { await this.Modal.click(); }
    public async clickTooltip() { await this.Tooltip.click(); }
    public async clickDragDrop() { await this.DragDrop.click(); }
    public async clickKeyboardEvents() { await this.KeyboardEvents.click(); }
    public async clickTable() { await this.Table.click(); }
    public async clickMultiWindow() { await this.MultiWindow.click(); }
    public async clickSlider() { await this.Slider.click(); }
    public async clickScrollEvents() { await this.ScrollEvents.click(); }
    public async clickAnchorTag() { await this.AnchorTag.click(); }
    public async clickFileUpload() { await this.FileUpload.click(); }
    public async clickWaitConditions() { await this.WaitConditions.click(); }
    public async clickShadowDOM() { await this.ShawdowDOM.click(); }
}