import {defineConfig, devices} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 2,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        testIdAttribute: 'id',
        screenshot: 'on',
        video: 'on',
        headless: true,
        trace: 'on',
    },
    timeout: 45000,

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        }
    ],

});
