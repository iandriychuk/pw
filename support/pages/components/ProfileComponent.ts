import {Locator, Page, test} from "@playwright/test";
import {BasePage} from "../../BasePage";

export class ProfileComponent extends BasePage {

    private addBlogPost: Locator = this.page.getByText('Add Blog Post');

    constructor(page: Page) {
        super(page);
    }

    async openAddBlogPostPage(): Promise<void> {
        await test.step(`Add Blog Post Page`, async () => {
            await this.addBlogPost.click();
        })
    }

}