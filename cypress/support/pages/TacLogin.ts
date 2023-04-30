import { TacLoginPageSelectors as PageSelectors } from '../selectors/TacLogin';
import { TacLoginPageTexts as PageTexts } from '../texts/TacLogin';
import   RoutingAssistant   from '../routingAssistant'
export class TacLoginPage {
    visit() {
		cy.log('TacLoginPage.visit() start'); 
        let currentURL = ""
        cy.url().then(url => {
            currentURL = url
        });
        if(currentURL.includes('/tac-login/'))
        {
            cy.log('already there');
            return;  //already there
        } 
        if(!this.isLoginRequired()){  
            cy.log('Login is not requrired');
            //go to it directly
            cy.visit('/tac-login/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login is requrired');
        const routingAssistant = new RoutingAssistant();

        routingAssistant.goToPage('TacLogin');
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
        else if (destinationPageName == 'TacRegister') { //other-button
            cy.log('click Other button...');
            cy.get(PageSelectors.otherButton)
                .click();
        }
        else {
            //throw error
        } 
    }
    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', '/tac-login');
    }
    verifyPageElements() {
        const emailIsVisible = true;
        const passwordIsVisible = true;
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
    ) {
        this.setFieldEmail(email);
        this.setFieldPassword(password);
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
    submitForm() {
        cy.get(PageSelectors.submitButton).click();
    }
}
export default TacLoginPage;

