/* eslint-disable no-dupe-else-if */

import { PacUserRoleListPageSelectors  as PageSelectors } from '../selectors/PacUserRoleList';
import { PacUserRoleListPageSettings  as PageSettings } from './settings/PacUserRoleList';
import { PacUserRoleListPageTexts as PageTexts } from '../texts/PacUserRoleList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserRoleListPage {

    visit() {
		cy.log('PacUserRoleListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserRoleList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserRoleList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserRoleList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserRoleList + '/00000000-0000-0000-0000-000000000000');
            }
        });

    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = false;
        if(isAuthorizationRequired){
            return true;
        }
        //look for public pages
        return false;
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.pacUserRoleList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.roleCodeHeaderIsVisible){
                cy.get(PageSelectors.roleCodeHeader)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkRoleCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkRoleCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkRoleCode...');
        //cy.get(PageSelectors.detailsLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkRoleCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.roleDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.roleDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleDisplayOrderHeaderText);

                cy.get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.roleIsActiveHeaderIsVisible){
                cy.get(PageSelectors.roleIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleIsActiveHeaderText);

                cy.get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.roleIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleIsActiveHeader)
                        .click()
                        .get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleIsActiveHeader)
                        .click()
                        .get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.roleLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.roleLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleLookupEnumNameHeaderText);

                cy.get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.roleNameHeaderIsVisible){
                cy.get(PageSelectors.roleNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleNameHeaderText);

                cy.get(PageSelectors.roleNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleNameHeader)
                .click()
                .click()
                .get(PageSelectors.roleNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleNameHeader)
                        .click()
                        .get(PageSelectors.roleNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleNameHeader)
                        .click()
                        .get(PageSelectors.roleNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.pacNameHeaderIsVisible){
                cy.get(PageSelectors.pacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.pacNameHeaderText);

                cy.get(PageSelectors.pacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.pacNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.pacNameHeader)
                .click()
                .click()
                .get(PageSelectors.pacNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.pacNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.pacNameHeader)
                        .click()
                        .get(PageSelectors.pacNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.pacNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.pacNameHeader)
                        .click()
                        .get(PageSelectors.pacNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.updateLinkRoleCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkRoleCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkRoleCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkRoleCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkRoleCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkRoleCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkRoleCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkRoleCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkRoleCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkRoleCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkRoleCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkRoleCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkRoleCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkRoleCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkRoleCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkRoleCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkRoleCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkRoleCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkRoleCode...');
        //cy.get(PageSelectors.detailsLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkRoleCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserRoleListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        const updateLinkRoleCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkRoleCodeColumnIsVisible = true;
        const detailsLinkRoleCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'RoleDetails' && //updateLinkRoleCode
            updateLinkRoleCodeColumnIsVisible) {
            cy.log('click row button updateLinkRoleCode...');
            cy.get(PageSelectors.updateLinkRoleCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'RoleDelete' && //deleteAsyncButtonLinkRoleCode
            deleteAsyncButtonLinkRoleCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkRoleCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'RoleDetails' &&   //detailsLinkRoleCode
            detailsLinkRoleCodeColumnIsVisible) {
            cy.log('click row button detailsLinkRoleCode...');
            cy.get(PageSelectors.detailsLinkRoleCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserRoleListPage;

