const { test, expect } =
require('../fixtures/pageFixtures');

const env =
require('../config/environment');

test(
'TC_03 - Intentional Failed Validation',
async ({
    page,
    loginPage
}) => {

    await page.goto(env.baseUrl);

    await loginPage.login(
        env.username,
        env.password
    );

    /**
     * Intentional failure
     * Verify screenshot appears
     * Verify HTML report shows failure
     */

    await expect(page)
        .toHaveURL(/wrongUrl/);
});