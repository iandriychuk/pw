import {BasePage} from "../BasePage";
import {Locator, Page, test} from "@playwright/test";

export class LoginPage extends BasePage {

    private userNameInputField: Locator = this.page.getByTestId('Username');
    private passwordInputField: Locator = this.page.getByTestId('Password');
    private loginButton: Locator = this.page.getByTestId('loginbtn');

    constructor(page: Page) {
        super(page);
    }

    async openLoginPage(): Promise<void> {
        await this.page.goto(process.env.TEST_ENV!)
    }

    async login(username: string, password: string): Promise<void> {
        await test.step(`Login under user "${username}/${password}"`, async () => {
            await this.userNameInputField.fill(username);
            await this.passwordInputField.fill(password);
            await this.loginButton.click();
        })
    }
}