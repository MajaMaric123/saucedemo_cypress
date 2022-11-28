import { HomePage } from "./pages/home_page"
import { ManagerPage } from "./pages/manager_page"

const homePage = new HomePage()
const managerPage = new ManagerPage()

describe('All Login tests', function () {

    it('Bank Manager Login', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        homePage.clickBankManagerLogin()
    })

    it('Add customer test', () => {
        managerPage.clickAddCustomerButton()
        managerPage.enterFirstName('Ben')
        managerPage.enterLastName('Benson')
        managerPage.enterPostCode('2100')
        managerPage.clickAddCustomerSubmitButton()
    })
})    