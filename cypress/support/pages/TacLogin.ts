/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-dupe-else-if */

import { TacLoginPageSelectors as PageSelectors } from '../selectors/TacLogin';
import { TacLoginPageSettings as PageSettings } from './settings/TacLogin';
import { TacLoginPageTexts as PageTexts } from '../texts/TacLogin';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'
import Helper from '../helper';

export class TacLoginPage {

    visit() {
		cy.log('TacLoginPage.visit() start');

        if(!this.isLoginRequired()){
            cy.log('Login is not required');
            //go to it directly
            cy.visit(PageUrlPrefixes.tacLogin + '/00000000-0000-0000-0000-000000000000');
            return;
        }

        cy.log('Login is required');

        const routingAssistant = new RoutingAssistant();

        routingAssistant.goToPage(currentPage,'TacLogin');

    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = false;
        if(isAuthorizationRequired){
            return true;
        }
        //look for public pages
        return false;
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
        else if (destinationPageName == 'TacLogin') { //other-button
            cy.log('click Other button...');
            cy.get(PageSelectors.otherButton)
                .click();
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.tacLogin);
    }

    verifyPageElements() {
        if(PageSettings.emailIsVisible){
            cy.log('Verifying emailLabel control label...');
            cy.get(PageSelectors.emailLabel)
                .should('be.visible')
                .should('include.text', PageTexts.emailLabelText);

            cy.log('Verifying emailLabel control...');
            cy.get(PageSelectors.emailField)
                .should('be.visible');

            this.setFieldEmail("test@test.com");

            cy.get(PageSelectors.emailField)
                .should('have.value', 'test@test.com');
        }
        if(PageSettings.passwordIsVisible){
            cy.log('Verifying passwordLabel control label...');
            cy.get(PageSelectors.passwordLabel)
                .should('be.visible')
                .should('include.text', PageTexts.passwordLabelText);

            cy.log('Verifying passwordLabel control...');
            cy.get(PageSelectors.passwordField)
                .should('be.visible');

            this.setFieldPassword("passwordTestVal");

            cy.get(PageSelectors.passwordField)
                .should('have.value', 'passwordTestVal');
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

        cy.get(PageSelectors.siteFooter)
            .should('be.visible')
            .should('include.text', PageTexts.siteFooterText);

    }

    populateFormWithRandomValues(){

        const helper = new Helper();
        this.setFieldEmail(helper.getRandomEmail(50));
        this.setFieldPassword(helper.getUniqueString(50));
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

