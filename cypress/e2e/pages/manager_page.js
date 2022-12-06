export class ManagerPage {

    addCustomerButton = '[ng-class="btnClass1"]'
    openAccountButton = '[ng-class="btnClass2"]'
    customersButton = '[ng-class="btnClass3"]'
    firstNameField = '[ng-model="fName"]'
    lastNameField = '[ng-model="lName"]'
    postCodeField = '[ng-model="postCd"]'
    addCustomerSubmitButton = '[type="submit"]'
    customerNameField = '[id="userSelect"]'
    currencyField = '[id="currency"]'
    processButton = '[type="submit"]'
    customersTable = '[class="marTop ng-scope"]'

    clickAddCustomerButton() {
        cy.get(this.addCustomerButton).click()
    }

    enterFirstName(firstname) {
        cy.get(this.firstNameField).type(firstname)
    }

    enterLastName(lastName) {
        cy.get(this.lastNameField).type(lastName)
    } 

    enterPostCode(postCode) {
        cy.get(this.postCodeField).type(postCode)
    }

    clickAddCustomerSubmitButton() {
        cy.get(this.addCustomerSubmitButton).click()
    }

    clickOpenAccountButton() {
        cy.get(this.openAccountButton).click()
    }

    selectCustomerName(){
        cy.get(this.customerNameField).children().should('have.text', 'Ben Benson')
    }

    clickCustomersButton() {
        cy.get(this.customersButton).click()
    }

    customerIsVisibleInTable(customerName){
        cy.get(this.customersTable).should('contain', customerName)
    }
}
