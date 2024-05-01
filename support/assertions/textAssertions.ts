import {Locator, expect, test} from "@playwright/test";

export async function verifyThatElementContainText(element: Locator, elementText: string | RegExp) {
    await test.step(`Verify that ${element} element contain text: `, async () => {
        await expect(element).toContainText(elementText);
    })
}