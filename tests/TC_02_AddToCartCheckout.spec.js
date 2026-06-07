const { test } =
require('../fixtures/pageFixtures');

const env =
require('../config/environment');

const {
    checkoutUser
} = require('../testData/users.json');

const constants =
require('../utils/constants');

test(
'TC_02 - Add Product To Cart And Complete Checkout',
async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {

    await page.goto(env.baseUrl);

    await loginPage.login(
        env.username,
        env.password
    );

    // Add product
    await inventoryPage.addBackpackToCart();

    // Validate cart badge count
    await inventoryPage.verifyCartBadgeCount();

    // Open cart
    await inventoryPage.openCart();

    // Validate product in cart
    await cartPage.verifyProductInCart(
        constants.BACKPACK_PRODUCT
    );

    // Checkout
    await cartPage.clickCheckout();

    await checkoutPage.enterCheckoutDetails(
        checkoutUser.firstName,
        checkoutUser.lastName,
        checkoutUser.postalCode
    );

    // Validate overview
    await checkoutPage.verifyCheckoutOverview();

    // Debug
// console.log(await page.url());
// const title = await page.locator('.title').textContent();
// console.log(title);

    // Complete checkout
    await checkoutPage.finishCheckout();

    // Validate order success
    await checkoutPage.verifyOrderConfirmation();
});