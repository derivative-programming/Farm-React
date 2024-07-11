
import { LandPlantListPageSelectors  as PageSelectors } from '../selectors/LandPlantList';
import { LandPlantListPageTexts as PageTexts } from '../texts/LandPlantList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'


export class LandPlantListPage {

    
    private static calculatedIsVisualizationGrid = true;

    private static plantCodeHeaderIsVisible = true;
    private static someIntValHeaderIsVisible = true; 
    private static someBigIntValHeaderIsVisible = true;
    private static someBitValHeaderIsVisible = true;
    private static isEditAllowedHeaderIsVisible = true;
    private static isDeleteAllowedHeaderIsVisible = true;
    private static someFloatValHeaderIsVisible = true;
    private static someDecimalValHeaderIsVisible = true;
    private static someUTCDateTimeValHeaderIsVisible = true;
    private static someDateValHeaderIsVisible = true;
    private static someMoneyValHeaderIsVisible = true;
    private static someNVarCharValHeaderIsVisible = true;
    private static someVarCharValHeaderIsVisible = true;
    private static someTextValHeaderIsVisible = true;
    private static somePhoneNumberHeaderIsVisible = true;
    private static someEmailAddressHeaderIsVisible = true;
    private static flavorNameHeaderIsVisible = true;
    private static flavorCodeHeaderIsVisible = false;
    private static someIntConditionalOnDeletableHeaderIsVisible = true;
    private static nVarCharAsUrlHeaderIsVisible = true;
    private static updateLinkPlantCodeHeaderIsVisible = false;
    private static deleteAsyncButtonLinkPlantCodeHeaderIsVisible = true;
    private static detailsLinkPlantCodeHeaderIsVisible = true;

    
    private static isFilterSectionHidden = false;
    
    private static someIntValIsVisible = true;
    private static someBigIntValIsVisible = true;
    private static someBitValIsVisible = true;
    private static isEditAllowedIsVisible = true;
    private static isDeleteAllowedIsVisible = true;
    private static someFloatValIsVisible = true;
    private static someDecimalValIsVisible = true;
    private static someMinUTCDateTimeValIsVisible = true;
    private static someMinDateValIsVisible = true;
    private static someMoneyValIsVisible = true;
    private static someNVarCharValIsVisible = true;
    private static someVarCharValIsVisible = true;
    private static someTextValIsVisible = true;
    private static somePhoneNumberIsVisible = true;
    private static someEmailAddressIsVisible = true;
    private static flavorCodeIsVisible = true; 
    

    visit() { 
		cy.log('LandPlantListPage.visit() start'); 

        if(!this.isLoginRequired()){  
            //go to it directly
            cy.visit(PageUrlPrefixes.landPlantList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required'); 
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""
        currentPage = routingAssistant.goToPage(currentPage, 'TacFarmDashboard'); //tacFarmDashboardBreadcrumb 
        routingAssistant.goToPage(currentPage,'LandPlantList'); 
        
        cy.url().then(url => { 
            if(!url.includes( PageUrlPrefixes.landPlantList + '/')) 
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.landPlantList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.landPlantList);
    }

    verifyPageElements() { 


        //column headers
        if(LandPlantListPage.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(LandPlantListPage.plantCodeHeaderIsVisible){
                cy.get(PageSelectors.plantCodeHeader)
                .should('not.exist');
            }
            if(LandPlantListPage.someIntValHeaderIsVisible){
                cy.get(PageSelectors.someIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValHeaderText); 
                
                cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValHeaderText); 
                
                cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someBitValHeaderIsVisible){
                cy.get(PageSelectors.someBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValHeaderText); 
                
                cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.isEditAllowedHeaderIsVisible){
                cy.get(PageSelectors.isEditAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedHeaderText); 
                
                cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.isDeleteAllowedHeaderIsVisible){
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedHeaderText); 
                
                cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someFloatValHeaderIsVisible){
                cy.get(PageSelectors.someFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValHeaderText); 
                
                cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValHeaderText); 
                
                cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValHeaderText); 
                
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someDateValHeaderIsVisible){
                cy.get(PageSelectors.someDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValHeaderText); 
                
                cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValHeaderText); 
                
                cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValHeaderText); 
                
                cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValHeaderText); 
                
                cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someTextValHeaderIsVisible){
                cy.get(PageSelectors.someTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValHeaderText); 
                
                cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.somePhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.somePhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberHeaderText);
                
                cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someEmailAddressHeaderIsVisible){ 
                cy.get(PageSelectors.someEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressHeaderText); 
                
                cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText); 
                
                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.flavorCodeHeaderIsVisible){
                cy.get(PageSelectors.flavorCodeHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorCodeHeaderText); 
                
                cy.get(PageSelectors.flavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.someIntConditionalOnDeletableHeaderIsVisible){
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntConditionalOnDeletableHeaderText); 
                
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.nVarCharAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharAsUrlHeaderText); 
                
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.updateLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.deleteAsyncButtonLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(LandPlantListPage.detailsLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            } 

            cy.log('Verifying page size control...');
            cy.get(PageSelectors.pageSizeControl)
            .should('be.visible');
            
            cy.get(PageSelectors.pageSizeControlLabel)
            .should('be.visible');

            cy.log('Verifying pagination control...');
            cy.get(PageSelectors.pagingControl)
            .should('be.visible');

            cy.log('Verifying report result count display...');
            cy.get(PageSelectors.tableRowCountDisplay)
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

        cy.get(PageSelectors.siteFooter)
            .should('be.visible')
            .should('include.text', PageTexts.siteFooterText);

        
        
        
        //breadcrumbs text 
        cy.log('Verifying breadcrumb tacFarmDashboardBreadcrumb...');
            cy.get(PageSelectors.tacFarmDashboardBreadcrumbText)
            .should('be.visible')
            .should('include.text', PageTexts.tacFarmDashboardBreadcrumbText);

        if(LandPlantListPage.calculatedIsVisualizationGrid && !isFilterSectionHidden){

            cy.get(PageSelectors.filterSearchButton)
            .should('not.be.visible');
            
            cy.get(PageSelectors.filterRefreshButton)
            .should('not.be.visible');

            //default is closed
            cy.get(PageSelectors.filterHeader)
            .click()
            .get(PageSelectors.filterSearchButton)
            .should('be.visible')
            .get(PageSelectors.filterRefreshButton)
            .should('be.visible');

            //test filter fields
            if(LandPlantListPage.flavorCodeIsVisible){
                cy.log('Verifying flavorCodeLabel control label...');
                cy.get(PageSelectors.flavorCodeFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.flavorCodeFilterLabel);

                cy.log('Verifying flavorCode control...');
                cy.get(PageSelectors.flavorCodeFilterField)
                    .should('be.visible'); 
                
            } 

            if(LandPlantListPage.someIntValIsVisible){
                cy.log('Verifying someIntValLabel control label...');
                cy.get(PageSelectors.someIntValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someIntValFilterLabel);
                    
                cy.log('Verifying someIntVal control...');
                cy.get(PageSelectors.someIntValFilterField)
                    .should('be.visible'); 

                this.setFilterFieldSomeIntVal(111);
                
                cy.get(PageSelectors.someIntValFilterField) 
                    .should('have.value', '111');
            }

            if(LandPlantListPage.someBigIntValIsVisible){
                cy.log('Verifying someBigIntValLabel control label...');
                cy.get(PageSelectors.someBigIntValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someBigIntValFilterLabel);
                    
                cy.log('Verifying someBigIntValLabel control...');
                cy.get(PageSelectors.someBigIntValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeBigIntVal(111);
                
                cy.get(PageSelectors.someBigIntValFilterField) 
                    .should('have.value', '111');
            }

            if(LandPlantListPage.someBitValIsVisible){
                //cy.log('Verifying someBitVal control...');
                // cy.get(PageSelectors.someBitValField)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.someBitValLabelText);
                    
                cy.log('Verifying someBitValLabel control...');
                cy.get(PageSelectors.someBitValFilterField)
                    .should('be.visible');
            }

            if(LandPlantListPage.isEditAllowedIsVisible){
                // cy.log('Verifying isEditAllowedLabel control label...');
                // cy.get(PageSelectors.isEditAllowedLabel)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.isEditAllowedLabelText);
                    
                cy.log('Verifying isEditAllowedLabel control...');
                cy.get(PageSelectors.isEditAllowedFilterField)
                    .should('be.visible');
            }

            if(LandPlantListPage.isDeleteAllowedIsVisible){
                // cy.log('Verifying isDeleteAllowedLabel control label...');
                // cy.get(PageSelectors.isDeleteAllowedLabel)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.isDeleteAllowedLabelText);
                    
                cy.log('Verifying isDeleteAllowedLabel control...');
                cy.get(PageSelectors.isDeleteAllowedFilterField)
                    .should('be.visible');
            }

            if(LandPlantListPage.someFloatValIsVisible){
                cy.log('Verifying someFloatValLabel control label...');
                cy.get(PageSelectors.someFloatValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFloatValFilterLabel);
                    
                cy.log('Verifying someFloatValLabel control...');
                cy.get(PageSelectors.someFloatValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFloatVal(111);
                
                cy.get(PageSelectors.someFloatValFilterField) 
                    .should('have.value', '111');
            }

            if(LandPlantListPage.someDecimalValIsVisible){
                cy.log('Verifying someDecimalValLabel control label...');
                cy.get(PageSelectors.someDecimalValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someDecimalValFilterLabel);
                    
                cy.log('Verifying someDecimalValLabel control...');
                cy.get(PageSelectors.someDecimalValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeDecimalVal(111);
                
                cy.get(PageSelectors.someDecimalValFilterField) 
                    .should('have.value', '111');
            }

            if(LandPlantListPage.someMinUTCDateTimeValIsVisible){
                cy.log('Verifying someMinUTCDateTimeValLabel control label...');
                cy.get(PageSelectors.someMinUTCDateTimeValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMinUTCDateTimeValFilterLabel);
                    
                cy.log('Verifying someMinUTCDateTimeValLabel control...');
                cy.get(PageSelectors.someMinUTCDateTimeValFilterField)
                    .should('be.visible');
            }

            if(LandPlantListPage.someMinDateValIsVisible){
                cy.log('Verifying someMinDateValLabel control label...');
                cy.get(PageSelectors.someMinDateValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMinDateValFilterLabel);
                    
                cy.log('Verifying someMinDateValLabel control...');
                cy.get(PageSelectors.someMinDateValFilterField)
                    .should('be.visible');
            }

            if(LandPlantListPage.someMoneyValIsVisible){
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

            if(LandPlantListPage.someNVarCharValIsVisible){
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

            if(LandPlantListPage.someVarCharValIsVisible){
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

            if(LandPlantListPage.someTextValIsVisible){
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

            if(LandPlantListPage.somePhoneNumberIsVisible){
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

            if(LandPlantListPage.someEmailAddressIsVisible){
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
        //cy.log('Verifying row button deleteAsyncButtonLinkPlantCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkPlantCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkPlantCode...');
        //cy.get(PageSelectors.detailsLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkPlantCodeRowButtonText);
    }

    
    verifySort() { 


        //column headers
        if(LandPlantListPage.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(LandPlantListPage.plantCodeHeaderIsVisible){
                cy.get(PageSelectors.plantCodeHeader)
                .should('not.exist');
            }
            if(LandPlantListPage.someIntValHeaderIsVisible){
                cy.get(PageSelectors.someIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValHeaderText); 
                
                cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntValHeader)
                        .click()
                        .get(PageSelectors.someIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntValHeader)
                        .click()
                        .get(PageSelectors.someIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
                 
            }
            if(LandPlantListPage.someBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValHeaderText); 
                
                cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someBigIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someBigIntValHeader)
                        .click()
                        .get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someBigIntValHeader)
                        .click()
                        .get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someBitValHeaderIsVisible){
                cy.get(PageSelectors.someBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValHeaderText); 
                
                cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeader)
                .click()
                .click()
                .get(PageSelectors.someBitValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someBitValHeader)
                        .click()
                        .get(PageSelectors.someBitValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someBitValHeader)
                        .click()
                        .get(PageSelectors.someBitValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.isEditAllowedHeaderIsVisible){
                cy.get(PageSelectors.isEditAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedHeaderText); 
                
                cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeader)
                .click()
                .click()
                .get(PageSelectors.isEditAllowedHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.isEditAllowedHeader)
                        .click()
                        .get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.isEditAllowedHeader)
                        .click()
                        .get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.isDeleteAllowedHeaderIsVisible){
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedHeaderText); 
                
                cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .click()
                .click()
                .get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.isDeleteAllowedHeader)
                        .click()
                        .get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.isDeleteAllowedHeader)
                        .click()
                        .get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someFloatValHeaderIsVisible){
                cy.get(PageSelectors.someFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValHeaderText); 
                
                cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeader)
                .click()
                .click()
                .get(PageSelectors.someFloatValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someFloatValHeader)
                        .click()
                        .get(PageSelectors.someFloatValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someFloatValHeader)
                        .click()
                        .get(PageSelectors.someFloatValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValHeaderText); 
                
                cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeader)
                .click()
                .click()
                .get(PageSelectors.someDecimalValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someDecimalValHeader)
                        .click()
                        .get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someDecimalValHeader)
                        .click()
                        .get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValHeaderText); 
                
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .click()
                .click()
                .get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someDateValHeaderIsVisible){
                cy.get(PageSelectors.someDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValHeaderText); 
                
                cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeader)
                .click()
                .click()
                .get(PageSelectors.someDateValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someDateValHeader)
                        .click()
                        .get(PageSelectors.someDateValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someDateValHeader)
                        .click()
                        .get(PageSelectors.someDateValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValHeaderText); 
                
                cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeader)
                .click()
                .click()
                .get(PageSelectors.someMoneyValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someMoneyValHeader)
                        .click()
                        .get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someMoneyValHeader)
                        .click()
                        .get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValHeaderText); 
                
                cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someNVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValHeaderText); 
                
                cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someVarCharValHeader)
                        .click()
                        .get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someVarCharValHeader)
                        .click()
                        .get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someTextValHeaderIsVisible){
                cy.get(PageSelectors.someTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValHeaderText); 
                
                cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeader)
                .click()
                .click()
                .get(PageSelectors.someTextValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someTextValHeader)
                        .click()
                        .get(PageSelectors.someTextValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someTextValHeader)
                        .click()
                        .get(PageSelectors.someTextValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.somePhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.somePhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberHeaderText);
                
                cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeader)
                .click()
                .click()
                .get(PageSelectors.somePhoneNumberHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.somePhoneNumberHeader)
                        .click()
                        .get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.somePhoneNumberHeader)
                        .click()
                        .get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someEmailAddressHeaderIsVisible){ 
                cy.get(PageSelectors.someEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressHeaderText); 
                
                cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeader)
                .click()
                .click()
                .get(PageSelectors.someEmailAddressHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText); 
                
                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeader)
                .click()
                .click()
                .get(PageSelectors.flavorNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorNameHeader)
                        .click()
                        .get(PageSelectors.flavorNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorNameHeader)
                        .click()
                        .get(PageSelectors.flavorNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.flavorCodeHeaderIsVisible){
                cy.get(PageSelectors.flavorCodeHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorCodeHeaderText); 
                
                cy.get(PageSelectors.flavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorCodeHeader)
                .click()
                .click()
                .get(PageSelectors.flavorCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorCodeHeader)
                        .click()
                        .get(PageSelectors.flavorCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.flavorCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorCodeHeader)
                        .click()
                        .get(PageSelectors.flavorCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.someIntConditionalOnDeletableHeaderIsVisible){
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntConditionalOnDeletableHeaderText); 
                
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .click()
                .click()
                .get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntConditionalOnDeletableHeader)
                        .click()
                        .get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntConditionalOnDeletableHeader)
                        .click()
                        .get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.nVarCharAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharAsUrlHeaderText); 
                
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .click()
                .click()
                .get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.updateLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.updateLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.deleteAsyncButtonLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(LandPlantListPage.detailsLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            } 
        }
 
  
        //report buttons 
        

        

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkPlantCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkPlantCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkPlantCode...');
        //cy.get(PageSelectors.detailsLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkPlantCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('LandPlantListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName); 

        const updateLinkPlantCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkPlantCodeColumnIsVisible = true;
        const detailsLinkPlantCodeColumnIsVisible = true;
        
        if (destinationPageName == 'XXXX') { //placeholder

        } 
        //report buttons 
        else if (destinationPageName == 'LandAddPlant') {  //add-button
            cy.log('click add button...');
            cy.get(PageSelectors.addButton)
                .click();
            cy.wait(2000);
        }  
        else if (destinationPageName == 'LandAddPlant') {  //otherAddButton
            cy.log('click otherAddButton button...');
            cy.get(PageSelectors.otherAddButton)
                .click();
            cy.wait(2000);
        }  
        else if (destinationPageName == 'TacFarmDashboard') {  //back-button
            cy.log('click add button...');
            cy.get(PageSelectors.backButton)
                .click();
            cy.wait(2000);
        }  
          
         
        //row buttons
        else if (destinationPageName == 'PlantUserDetails' && //updateLinkPlantCode
            updateLinkPlantCodeColumnIsVisible) {  
            cy.log('click row button updateLinkPlantCode...');
            cy.get(PageSelectors.updateLinkPlantCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDelete' && //deleteAsyncButtonLinkPlantCode
            deleteAsyncButtonLinkPlantCodeColumnIsVisible) { 
            cy.log('click row button deleteAsyncButtonLinkPlantCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeRowButton)  
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'PlantUserDetails' &&   //detailsLinkPlantCode
            detailsLinkPlantCodeColumnIsVisible) {
            cy.log('click row button detailsLinkPlantCode...');
            cy.get(PageSelectors.detailsLinkPlantCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else {
            //throw error
        }
    }

    
    setFilterFieldFlavorCode(val:string) { 
        cy.get(PageSelectors.flavorCodeFilterField)
            .clear()
            .type(val); 
    }
 

    setFilterFieldSomeIntVal(val:number) { 
        cy.get(PageSelectors.someIntValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeBigIntVal(val:number) { 
        cy.get(PageSelectors.someBigIntValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeBitVal(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.someBitValFilterField)
            .click(); 
        }
    }

    setFilterFieldIsEditAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.isEditAllowedFilterField)
                .click(); 
        }
    }

    setFilterFieldIsDeleteAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.isDeleteAllowedFilterField)
            .click(); 
        }
    }

    setFilterFieldSomeFloatVal(val:number) { 
        cy.get(PageSelectors.someFloatValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeDecimalVal(val:number) { 
        cy.get(PageSelectors.someDecimalValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeMinUTCDateTimeVal(val:string) { 
        cy.get(PageSelectors.someMinUTCDateTimeValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeMinDateVal(val:string) { 
        cy.get(PageSelectors.someMinDateValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeMoneyVal(val:number) { 
        cy.get(PageSelectors.someMoneyValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeNVarCharVal(val:string) { 
        cy.get(PageSelectors.someNVarCharValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeVarCharVal(val:string) { 
        cy.get(PageSelectors.someVarCharValFilterField)
            .clear()
            .type(val, { parseSpecialCharSequences: false }); 
    }

    setFilterFieldSomeTextVal(val:string) { 
        cy.get(PageSelectors.someTextValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomePhoneNumber(val:string) { 
        cy.get(PageSelectors.somePhoneNumberFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeEmailAddress(val:string) { 
        cy.get(PageSelectors.someEmailAddressFilterField)
            .clear()
            .type(val); 
    }
 
}
export default LandPlantListPage;
