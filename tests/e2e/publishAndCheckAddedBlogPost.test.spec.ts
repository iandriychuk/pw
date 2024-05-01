import {test} from "../baseTest";
import {generateRandomText} from "../../support/utils/stringUtils";
import {Blog} from "../../support/types/BlogType";


test.describe(`PublishAndCheckAddedBlogPost`, () => {

    const blog: Blog = {
        title: generateRandomText(12),
        summary: generateRandomText(35),
        content: generateRandomText(75),
        pathToImage: './support/data/testImage.png'
    };

    test.beforeEach(`Login into system`, async ({app}) => {
        await app.loginPage.openLoginPage();
        await app.loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
        await app.homePage.verifyThatUserLoggedIn();
    })

    test('Create Publish and Verify the Added Blog Post', async ({app, page}) => {
        await app.homePage.openProfileMenu();
        await app.profileComponent.openAddBlogPostPage();
        await app.addBlogPostPage.fillAndPublishBlogPost(blog);
        await app.newBlogPostPage.goToAllPosts();
        await app.allBlogPostPage.verifyThatBlogWithTitleHasValues(blog)
    });
})