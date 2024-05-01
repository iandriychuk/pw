import {BasePage} from "../BasePage";
import {Locator, Page, test} from "@playwright/test";

export class NewBlogPostPage extends BasePage {

    private allPostsBtn: Locator = this.page.getByRole('button', {name: 'All Posts'});

    constructor(page: Page) {
        super(page);
    }

    async goToAllPosts(): Promise<void> {
        await test.step(`Go to All Posts`, async () => {
            await this.allPostsBtn.click();
        })
    }
}