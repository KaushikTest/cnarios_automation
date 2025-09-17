import { Page } from "@playwright/test";

export default class ExplorePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get ExploreQuestions() {
        return this.page.getByRole('button', { name: 'Explore Questions' });
    }

    public get StartLearning() {
        return this.page.getByRole('button', { name: 'Start Learning' });
    }

    public get TakeChallenge() {
        return this.page.getByRole('button', { name: 'Take Challenge' });
    }

    public get ReadBlogs() {
        return this.page.getByRole('button', { name: 'Read Blogs' });
    }

    public async clickExploreQuestions() {
        return this.ExploreQuestions.click();
    }

    public async clickStartLearning() {
        return this.StartLearning.click();
    }

    public async clickTakeChallenge() {
        return this.TakeChallenge.click();
    }

    public async clickReadBlogs() {
        return this.ReadBlogs.click();
    }
}
