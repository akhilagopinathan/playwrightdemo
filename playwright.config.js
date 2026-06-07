const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 1,
    
    // Explicit safety timeouts to prevent random flakiness
    timeout: 45000,
    expect: {
        timeout: 10000,
    },

    reporter: [
        ['html'],
        ['list']
    ],

    use: {
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 10000,
        navigationTimeout: 15000
    },

    /* Configures testing targets across major browser engines */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ]
});