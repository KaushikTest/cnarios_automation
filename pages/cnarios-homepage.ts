import { Page } from "@playwright/test";

export default class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get Features() {
        return this.page.getByRole('link', { name: 'Features' });
    }

    public get HowItWorks() {
        return this.page.getByRole('link', { name: 'How it works?' });
    }

    public get ContactUs() {
        return this.page.getByRole('link', { name: 'Contact Us' });
    }

    public get Blogs() {
        return this.page.getByRole('link', { name: 'Blogs' });
    }

    public get StartExploring() {
        return this.page.getByRole('button', { name: 'Start Exploring' });
    }

    public get Challenges() {
        return this.page.getByRole('button', { name: 'Challenges' });
    }

    public async clickFeatures() {
        await this.Features.click();
    }

    public async clickHowItWorks() {
        await this.HowItWorks.click();
    }

    public async clickContactUs() {
        await this.ContactUs.click();
    }

    public async clickBlogs() {
        await this.Blogs.click();
    }

    public async clickStartExploring() {
        await this.StartExploring.click();
    }

    public async clickChallenges() {
        await this.Challenges.click();
    }

}