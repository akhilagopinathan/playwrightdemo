const { test, expect } =
require('../fixtures/pageFixtures');

const env =
require('../config/environment');

test(
'TC_01 - Login with Valid Credentials',
async ({
    page,
    loginPage,
    inventoryPage
}) => {

    await page.goto(env.baseUrl);

    await loginPage.login(
        env.username,
        env.password
    );

    // Validate inventory page
    await expect(page)
        .toHaveURL(/inventory/);

    // Validate Products page
    await inventoryPage.verifyProductsPage();
});