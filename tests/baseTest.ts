import { test as base} from '@playwright/test';
import PagesManager from "../support/pages/pagesManager/PagesManager";

export const test = base.extend<{app: PagesManager}>({
    app: async function ({page}, use){
        const app = new PagesManager(page);
        await use(app);
    }
})