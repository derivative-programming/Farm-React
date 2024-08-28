/* eslint-disable no-dupe-else-if */

import { TacFarmDashboardPageSelectors  as PageSelectors } from '../selectors/TacFarmDashboard';
import { TacFarmDashboardPageSettings  as PageSettings } from './settings/TacFarmDashboard';
import { TacFarmDashboardPageTexts as PageTexts } from '../texts/TacFarmDashboard';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class TacFarmDashboardPage {

    visit() {
		cy.log('TacFarmDashboardPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.tacFarmDashboard + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'TacFarmDashboard');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.tacFarmDashboard + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.tacFarmDashboard + '/00000000-0000-0000-0000-000000000000');
            }
        });

    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = true;
        if(isAuthorizationRequired){
            return true;
        }
        //look for public pages
        return false;
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.tacFarmDashboard);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.CodeHeaderIsVisible){
                cy.get(PageSelectors.CodeHeader)
                .should('not.exist');
            }

            if(PageSettings.someMoneyValIsVisible){
                cy.log('Verifying someMoneyValLabel control label...');
                cy.get(PageSelectors.someMoneyValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMoneyValFilterLabel);

                cy.log('Verifying someMoneyValLabel control...');
                cy.get(PageSelectors.someMoneyValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeMoneyVal(111);

                cy.get(PageSelectors.someMoneyValFilterField)
                    .should('have.value', '111');
            }

            if(PageSettings.someNVarCharValIsVisible){
                cy.log('Verifying someNVarCharValLabel control label...');
                cy.get(PageSelectors.someNVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someNVarCharValFilterLabel);

                cy.log('Verifying someNVarCharValLabel control...');
                cy.get(PageSelectors.someNVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeNVarCharVal("someNVarCharValTestVal");

                cy.get(PageSelectors.someNVarCharValFilterField)
                    .should('have.value', 'someNVarCharValTestVal');
            }

            if(PageSettings.someVarCharValIsVisible){
                cy.log('Verifying someVarCharValLabel control label...');
                cy.get(PageSelectors.someVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someVarCharValFilterLabel);

                cy.log('Verifying someVarCharValLabel control...');
                cy.get(PageSelectors.someVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeVarCharVal("someVarCharValTestVal");

                cy.get(PageSelectors.someVarCharValFilterField)
                    .should('have.value', 'someVarCharValTestVal');
            }

            if(PageSettings.someTextValIsVisible){
                cy.log('Verifying someTextValLabel control label...');
                cy.get(PageSelectors.someTextValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someTextValFilterLabel);

                cy.log('Verifying someTextValLabel control...');
                cy.get(PageSelectors.someTextValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeTextVal("someTextValTestVal");

                cy.get(PageSelectors.someTextValFilterField)
                    .should('have.value', 'someTextValTestVal');
            }

            if(PageSettings.somePhoneNumberIsVisible){
                cy.log('Verifying somePhoneNumberLabel control label...');
                cy.get(PageSelectors.somePhoneNumberFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.somePhoneNumberFilterLabel);

                cy.log('Verifying somePhoneNumberLabel control...');
                cy.get(PageSelectors.somePhoneNumberFilterField)
                    .should('be.visible');

                this.setFilterFieldSomePhoneNumber("111-111-1111");

                cy.get(PageSelectors.somePhoneNumberFilterField)
                    .should('have.value', '111-111-1111');
            }

            if(PageSettings.someEmailAddressIsVisible){
                cy.log('Verifying someEmailAddressLabel control label...');
                cy.get(PageSelectors.someEmailAddressFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someEmailAddressFilterLabel);

                cy.log('Verifying someEmailAddressLabel control...');
                cy.get(PageSelectors.someEmailAddressFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeEmailAddress("test@test.com");

                cy.get(PageSelectors.someEmailAddressFilterField)
                    .should('have.value', 'test@test.com');
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkCode...');
        //cy.get(PageSelectors.detailsLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');

            if(PageSettings.updateLinkCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkCode...');
        //cy.get(PageSelectors.detailsLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('TacFarmDashboardPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        const updateLinkCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkCodeColumnIsVisible = true;
        const detailsLinkCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'Details' && //updateLinkCode
            updateLinkCodeColumnIsVisible) {
            cy.log('click row button updateLinkCode...');
            cy.get(PageSelectors.updateLinkCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'Delete' && //deleteAsyncButtonLinkCode
            deleteAsyncButtonLinkCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'Details' &&   //detailsLinkCode
            detailsLinkCodeColumnIsVisible) {
            cy.log('click row button detailsLinkCode...');
            cy.get(PageSelectors.detailsLinkCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default TacFarmDashboardPage;

