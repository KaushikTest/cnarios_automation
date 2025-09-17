import { Page } from "@playwright/test";

export default class ConceptFields {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get TryItYourself() {
        return this.page.getByRole('tab', { name: 'Try It Yourself' });
    }

    public get TestCases() {
        return this.page.getByRole('tab', { name: 'Test Cases' })
    }

    public async clickTryItYourself() {
        await this.TryItYourself.click();
    }

    public async clickTestCases() {
        await this.TestCases.click();
    }

}