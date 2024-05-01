import {BasePage} from "../BasePage";
import {Locator, Page, test} from "@playwright/test";
import {Blog} from "../types/BlogType";

export class AddBlogPostPage extends BasePage {

    private blogPostTitle: Locator = this.page.getByLabel('Post title');
    private blogPostSummary: Locator = this.page.getByLabel('Post Summary');
    private blogPostContent: Locator = this.page.getByTestId('blogPostBodyContent')
    private publishCheckBox: Locator = this.page.locator("//label[@data-original-title='Published blog posts are visible for everyone']");
    private saveBtn: Locator = this.page.getByRole('link', {name: 'Save'});
    private continueBtn: Locator = this.page.getByLabel('Continue');
    private uploadImage: Locator = this.page.locator("//input[@name='qqfile']");

    constructor(page: Page) {
        super(page);
    }

    async fillAndPublishBlogPost(blog: Blog): Promise<void> {
        await this.fillPost(blog);
        await test.step(`Click on 'Continue' button`, async () => {
            await this.continueBtn.click();
        })
        await this.publishBlogPost();
    }

    private async fillPost(blog: Blog): Promise<void> {
        await test.step(`Fill post data`, async () => {
            if (blog.pathToImage != null) {
                await this.uploadImageToPost(blog.pathToImage);
            }
            await this.addPostTitle(blog.title);
            await this.addPostSummary(blog.summary);
            await this.addPostContent(blog.content);
        })
    }

    async addPostTitle(postTitle: string): Promise<void> {
        await test.step(`Fill Post Title`, async () => {
            await this.blogPostTitle.click();
            await this.blogPostTitle.clear();
            await this.page.keyboard.type(postTitle);
        })
    }

    async addPostSummary(postSummary: string): Promise<void> {
        await test.step(`Fill Post Summary`, async () => {
            await this.blogPostSummary.click();
            await this.blogPostSummary.clear();
            await this.page.keyboard.type(postSummary);
        })
    }

    async addPostContent(postContent: string): Promise<void> {
        await test.step(`Fill Post Content`, async () => {
            await this.blogPostContent.click();
            await this.blogPostContent.clear();
            await this.page.keyboard.type(postContent);
        })
    }

    async publishBlogPost(): Promise<void> {
        await test.step(`Publish Blog Post`, async () => {
            await this.publishCheckBox.check();
            await this.saveBtn.click();
        })
    }

    async uploadImageToPost(pathToImage: string): Promise<void> {
        await test.step(`Upload Image for Post`, async () => {
            const fileChooserPromise = this.page.waitForEvent('filechooser');
            await this.uploadImage.click();
            const fileChooser = await fileChooserPromise;
            await fileChooser.setFiles(pathToImage);
        })
    }
}