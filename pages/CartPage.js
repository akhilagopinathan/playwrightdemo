const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {

        this.page = page;

        this.checkoutButton =
            page.locator('#checkout');
    }

    /**
     * Verify product exists in cart
     */
    async verifyProductInCart(productName) {

        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
    }

    /**
     * Proceed to checkout
     */
    async clickCheckout() {

        await this.checkoutButton.click();
    }
}

module.exports = CartPage;