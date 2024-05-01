import {Locator, expect, test} from "@playwright/test";

export async function verifyThatElementToBeVisible(elementName: string, element: Locator) {
    await test.step(`Verify that ${elementName} element is visible`, async () => {
        await expect(element).toBeVisible();
    })
}