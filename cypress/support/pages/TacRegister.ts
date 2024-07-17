/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-dupe-else-if */

import { TacRegisterPageSelectors as PageSelectors } from '../selectors/TacRegister';
import { TacRegisterPageSettings as PageSettings } from './settings/TacRegister';
import { TacRegisterPageTexts as PageTexts } from '../texts/TacRegister';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'
import Helper from '../helper';

export class TacRegisterPage {

    visit() {
		cy.log('TacRegisterPage.visit() start');

        if(!this.isLoginRequired()){
            cy.log('Login is not required');
            //go to it directly
            cy.visit(PageUrlPrefixes.tacRegister + '/00000000-0000-0000-0000-000000000000');
            return;
        }

        cy.log('Login is required');

        const routingAssistant = new RoutingAssistant();
        const currentPage = routingAssistant.visitPage('TacLogin');  //cancel-button destination
        routingAssistant.goToPage(currentPage,'TacRegister');

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
        else if (destinationPageName == 'TacLogin') { //cancel-button
            cy.log('click Cancel button...');
            cy.get(PageSelectors.cancelButton)
                .click();
        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.tacRegister);
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
        if(PageSettings.confirmPasswordIsVisible){
            cy.log('Verifying confirmPasswordLabel control label...');
            cy.get(PageSelectors.confirmPasswordLabel)
                .should('be.visible')
                .should('include.text', PageTexts.confirmPasswordLabelText);

            cy.log('Verifying confirmPasswordLabel control...');
            cy.get(PageSelectors.confirmPasswordField)
                .should('be.visible');

            this.setFieldConfirmPassword("confirmPasswordTestVal");

            cy.get(PageSelectors.confirmPasswordField)
                .should('have.value', 'confirmPasswordTestVal');
        }
        if(PageSettings.firstNameIsVisible){
            cy.log('Verifying firstNameLabel control label...');
            cy.get(PageSelectors.firstNameLabel)
                .should('be.visible')
                .should('include.text', PageTexts.firstNameLabelText);

            cy.log('Verifying firstName control...');
            cy.get(PageSelectors.firstNameField)
                .should('be.visible');

            this.setFieldFirstName("firstNameTestVal");

            cy.get(PageSelectors.firstNameField)
                .should('have.value', 'firstNameTestVal');
        }
        if(PageSettings.lastNameIsVisible){
            cy.log('Verifying lastNameLabel control label...');
            cy.get(PageSelectors.lastNameLabel)
                .should('be.visible')
                .should('include.text', PageTexts.lastNameLabelText);

            cy.log('Verifying lastName control...');
            cy.get(PageSelectors.lastNameField)
                .should('be.visible');

            this.setFieldLastName("lastNameTestVal");

            cy.get(PageSelectors.lastNameField)
                .should('have.value', 'lastNameTestVal');
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
        this.setFieldConfirmPassword(helper.getUniqueString(50));
        this.setFieldFirstName(helper.getUniqueString(50));
        this.setFieldLastName(helper.getUniqueString(50));
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

