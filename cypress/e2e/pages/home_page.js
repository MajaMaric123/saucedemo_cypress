export class HomePage {

    cutomerLoginButton = '.borderM > :nth-child(1) > .btn'
    bankManagerLoginButton = ':nth-child(3) > .btn'

    clickBankManagerLogin() {
        cy.get(this.bankManagerLoginButton).click()
    }
}