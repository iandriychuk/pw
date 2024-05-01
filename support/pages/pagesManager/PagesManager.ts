import {Page} from "@playwright/test";
import {LoginPage} from "../LoginPage";
import {HomePage} from "../HomePage";
import {ProfileComponent} from "../components/ProfileComponent";
import {AddBlogPostPage} from "../AddBlogPostPage";
import {NewBlogPostPage} from "../NewBlogPostPage";
import {AllBlogPostPage} from "../AllBlogPostsPage";


export default class PagesManager {
    readonly loginPage: LoginPage;
    readonly homePage: HomePage;
    readonly profileComponent: ProfileComponent;
    readonly addBlogPostPage: AddBlogPostPage;
    readonly newBlogPostPage: NewBlogPostPage;
    readonly allBlogPostPage: AllBlogPostPage;
    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.profileComponent = new ProfileComponent(page);
        this.addBlogPostPage = new AddBlogPostPage(page);
        this.newBlogPostPage = new NewBlogPostPage(page);
        this.allBlogPostPage = new AllBlogPostPage(page);
    }
}