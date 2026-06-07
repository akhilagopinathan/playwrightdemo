const { expect } = require('@playwright/test');
const constants = require('../utils/constants');

class InventoryPage {

    constructor(page) {

        this.page = page;

        this.productsTitle = page.locator('.title');

        this.backpackAddToCartButton =
            page.locator('#add-to-cart-sauce-labs-backpack');

        this.cartBadge =
            page.locator('.shopping_cart_badge');

        this.cartIcon =
            page.locator('.shopping_cart_link');
    }

    /**
     * Validate Products page displayed
     */
    async verifyProductsPage() {

        await expect(this.productsTitle)
            .toHaveText(constants.PRODUCTS_PAGE);
    }

    /**
     * Add Sauce Labs Backpack to cart
     */
    async addBackpackToCart() {

        await this.backpackAddToCartButton.click();
    }

    /**
     * Verify cart count
     */
    async verifyCartBadgeCount(count = '1') {

        await expect(this.cartBadge)
            .toHaveText(count);
    }

    /**
     * Navigate to cart
     */
    async openCart() {

        await this.cartIcon.click();
    }
}

module.exports = InventoryPage;