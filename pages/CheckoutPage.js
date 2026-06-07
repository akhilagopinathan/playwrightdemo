const { expect } = require('@playwright/test');
const constants = require('../utils/constants');

class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        this.pageTitle = page.locator('.title');

        this.successMessage =
            page.locator('.complete-header');
    }

    /**
     * Enter checkout details
     */
    async enterCheckoutDetails(
        firstName,
        lastName,
        postalCode
    ) {
        
        await this.firstName.fill(firstName);
        await this.lastName.waitFor({ state: 'attached' });
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    /**
     * Verify checkout overview page
     */
    async verifyCheckoutOverview() {

        await expect(this.pageTitle)
            .toHaveText(constants.CHECKOUT_OVERVIEW);
    }

    /**
     * Complete checkout
     */
    async finishCheckout() {

        await this.finishButton.click();
    }

    /**
     * Verify order success
     */
    async verifyOrderConfirmation() {

        await expect(this.successMessage)
            .toHaveText(
                constants.ORDER_SUCCESS_MESSAGE
            );
    }
}

module.exports = CheckoutPage;