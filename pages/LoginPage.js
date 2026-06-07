class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.errorMessage = '[data-test="error"]';
        this.loginLogo = '.login_logo';
    }

    async login(username, password) {

        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginBtn);
    }

    async getErrorMessage() {
        await this.page.waitForSelector(this.errorMessage);
        return await this.page.textContent(this.errorMessage);
    }

    
    async isLoginPageDisplayed() {
        return await this.page.isVisible(this.loginLogo);
    }
  
}

module.exports = LoginPage;