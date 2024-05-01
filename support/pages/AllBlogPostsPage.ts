import {BasePage} from "../BasePage";
import {Locator, Page, test} from "@playwright/test";
import {Blog} from "../types/BlogType";
import {verifyThatElementContainText} from "../assertions/textAssertions";

export class AllBlogPostPage extends BasePage {

    readonly blogPostTitleLink = (title: string) => this.page.getByRole('link', {name: title})
    readonly blogTitle: Locator = this.page.locator('h1');
    readonly blogSummary: Locator = this.page.locator("//header//p");
    readonly blogContent: Locator = this.page.locator("//div[@class='container content-container']//section/p")

    constructor(page: Page) {
        super(page);
    }

    async verifyThatBlogWithTitleHasValues(blog: Blog): Promise<void> {
        await test.step(`Open Post with Title: "${blog.title}"`, async () => {
            await this.blogPostTitleLink(blog.title).click();
        })

        await test.step(`Check Post Title`, async () => {
            await verifyThatElementContainText(this.blogTitle, blog.title);
        })

        await test.step(`Check Post Summary`, async () => {
            await verifyThatElementContainText(this.blogSummary, blog.summary);
        })

        await test.step(`Check Post Content`, async () => {

            await verifyThatElementContainText(this.blogContent, blog.content);
        })
    }
}