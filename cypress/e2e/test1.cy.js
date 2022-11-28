import { HomePage } from "./pages/home_page"
import { ManagerPage } from "./pages/manager_page"

const homePage = new HomePage()
const managerPage = new ManagerPage()

describe('All Login tests', function () {

    it('Login test 1', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        homePage.clickBankManagerLogin()
    })

    it('Login test 2', () => {
        managerPage.clickAddCustomerButton()
        managerPage.enterFirstName('Ben')
        managerPage.enterLastName('Benson')
        managerPage.enterPostCode('2100')
        managerPage.clickAddCustomerSubmitButton()
    })
})    