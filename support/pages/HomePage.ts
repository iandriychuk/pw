import {BasePage} from "../BasePage";
import {Locator, Page, test} from "@playwright/test";
import {verifyThatElementToBeVisible} from "../assertions/elementAssertions";

export class HomePage extends BasePage {

    private profileIconElement: Locator = this.page.getByTestId('profile-alerts');

    constructor(page: Page) {
        super(page);
    }

    async openProfileMenu(): Promise<void> {
        await test.step(`Open profile menu`, async () => {
            await this.profileIconElement.click();
        })
    }

    async verifyThatUserLoggedIn(): Promise<void> {
        await verifyThatElementToBeVisible("Profile Icon", this.profileIconElement)
    }
}