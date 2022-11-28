import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login tests', function () {

    it('Login test 1', () => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.enterUsername('standard_user')
        loginPage.enterPassword('asecret_sauce')
        loginPage.clickLogin()
    })

    it('Login test 2', () => {
        loginPage.enterUsername('Adm')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })
})    