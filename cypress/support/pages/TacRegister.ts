import { TacRegisterPageSelectors as PageSelectors } from '../selectors/TacRegister';
import { TacRegisterPageTexts as PageTexts } from '../texts/TacRegister';
import   RoutingAssistant   from '../routingAssistant'
export class TacRegisterPage {
    visit() {
		cy.log('TacRegisterPage.visit() start'); 
        let currentURL = ""
        cy.url().then(url => {
            currentURL = url
        });
        if(currentURL.includes('/tac-register/'))
        {
            cy.log('already there');
            return;  //already there
        } 
        if(!this.isLoginRequired()){  
            cy.log('Login is not requrired');
            //go to it directly
            cy.visit('/tac-register/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login is requrired');
        const routingAssistant = new RoutingAssistant();
        routingAssistant.visitPage('TacLogin');  //cancel-button destination
        routingAssistant.goToPage('TacRegister');
    }
    isLoginRequired():boolean {
        const isLoginPage = true;
        if(isLoginPage){
            return false; //its register or login page, so its public
        }
        //look for public pages too
        return true;
    }
    clickButtonWithDestination(destinationPageName) {
        if (destinationPageName == 'XXXX') { //placeholder
        }
        //report buttons
        else if (destinationPageName == 'TacFarmDashboard') { //submit-button
            cy.log('click Submit button...');
            cy.get(PageSelectors.submitButton)
                .click();
        }
        else if (destinationPageName == 'TacLogin') { //cancel-button
            cy.log('click Cancel button...');
            cy.get(PageSelectors.cancelButton)
                .click();
        }

        else {
            //throw error
        } 
    }
    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', '/tac-register');
    }
    verifyPageElements() {
        const emailIsVisible = true;
        const passwordIsVisible = true;
        const confirmPasswordIsVisible = true;
        const firstNameIsVisible = true;
        const lastNameIsVisible = true;
        if(emailIsVisible){
            cy.log('Verifying emailLabel control label...');
            cy.get(PageSelectors.emailLabel)
                .should('be.visible')
                .should('include.text', PageTexts.emailLabelText);
            cy.log('Verifying emailLabel control...');
            cy.get(PageSelectors.emailField)
                .should('be.visible');
        }
        if(passwordIsVisible){
            cy.log('Verifying passwordLabel control label...');
            cy.get(PageSelectors.passwordLabel)
                .should('be.visible')
                .should('include.text', PageTexts.passwordLabelText);
            cy.log('Verifying passwordLabel control...');
            cy.get(PageSelectors.passwordField)
                .should('be.visible');
        }
        if(confirmPasswordIsVisible){
            cy.log('Verifying confirmPasswordLabel control label...');
            cy.get(PageSelectors.confirmPasswordLabel)
                .should('be.visible')
                .should('include.text', PageTexts.confirmPasswordLabelText);
            cy.log('Verifying confirmPasswordLabel control...');
            cy.get(PageSelectors.confirmPasswordField)
                .should('be.visible');
        }
        if(firstNameIsVisible){
            cy.log('Verifying firstNameLabel control label...');
            cy.get(PageSelectors.firstNameLabel)
                .should('be.visible')
                .should('include.text', PageTexts.firstNameLabelText);
            cy.log('Verifying firstNameLabel control...');
            cy.get(PageSelectors.firstNameField)
                .should('be.visible');
        }
        if(lastNameIsVisible){
            cy.log('Verifying lastNameLabel control label...');
            cy.get(PageSelectors.lastNameLabel)
                .should('be.visible')
                .should('include.text', PageTexts.lastNameLabelText);
            cy.log('Verifying lastNameLabel control...');
            cy.get(PageSelectors.lastNameField)
                .should('be.visible');
        }
        cy.log('Verifying title text...');
        if(PageTexts.titleText.length > 0){
            cy.get(PageSelectors.title)
            .should('be.visible')
            .should('include.text', PageTexts.titleText);
        } else {
            cy.get(PageSelectors.title)
            .should('not.be.visible');
        }
        cy.log('Verifying intro text...');
        if(PageTexts.introText.length > 0){
            cy.get(PageSelectors.introText)
            .should('be.visible')
            .should('include.text', PageTexts.introText);
        } else {
            cy.get(PageSelectors.introText)
            .should('not.be.visible');
        }
        cy.log('Verifying footer text...');
        if(PageTexts.footerText.length > 0){
            cy.get(PageSelectors.footerText)
            .should('be.visible')
            .should('include.text', PageTexts.footerText);
        } else {
            cy.get(PageSelectors.footerText)
            .should('not.be.visible');
        }
    }
    populateForm(
        email: string,
        password: string,
        confirmPassword: string,
        firstName: string,
        lastName: string,
    ) {
        this.setFieldEmail(email);
        this.setFieldPassword(password);
        this.setFieldConfirmPassword(confirmPassword);
        this.setFieldFirstName(firstName);
        this.setFieldLastName(lastName);
    }
    setFieldEmail(val:string) {
        cy.get(PageSelectors.emailField)
            .clear()
            .type(val);
    }
    setFieldPassword(val:string) {
        cy.get(PageSelectors.passwordField)
            .clear()
            .type(val, { parseSpecialCharSequences: false });
    }
    setFieldConfirmPassword(val:string) {
        cy.get(PageSelectors.confirmPasswordField)
            .clear()
            .type(val, { parseSpecialCharSequences: false });
    }
    setFieldFirstName(val:string) {
        cy.get(PageSelectors.firstNameField)
            .clear()
            .type(val);
    }
    setFieldLastName(val:string) {
        cy.get(PageSelectors.lastNameField)
            .clear()
            .type(val);
    }
    submitForm() {
        cy.get(PageSelectors.submitButton).click();
    }
}
export default TacRegisterPage;

