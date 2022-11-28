export class HomePage{
    
    cutomerLoginButton = '//*[@id="user-name"]'
    password_textbox = '//*[@id="password"]'
    login_button = '//*[@id="login-button"]'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }
}