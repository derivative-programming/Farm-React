/* eslint-disable no-dupe-else-if */

import { LandPlantListPageSelectors  as PageSelectors } from '../selectors/LandPlantList';
import { LandPlantListPageSettings  as PageSettings } from './settings/LandPlantList';
import { LandPlantListPageTexts as PageTexts } from '../texts/LandPlantList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'


export class LandPlantListPage {

    visit() { 
		cy.log('LandPlantListPage.visit() start'); 

        if(!this.isLoginRequired()){  
            //go to it directly
            cy.visit(PageUrlPrefixes.landPlantList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required'); 
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
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
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
//endset
            if(PageSettings.plantCodeHeaderIsVisible){
                cy.get(PageSelectors.plantCodeHeader)
                .should('not.exist');
            }
            if(PageSettings.someIntValHeaderIsVisible){
                cy.get(PageSelectors.someIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValHeaderText); 
                
                cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalIntValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalIntValHeaderText); 
                
                cy.get(PageSelectors.someConditionalIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValHeaderText); 
                
                cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalBigIntValHeaderText); 
                
                cy.get(PageSelectors.someConditionalBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBigIntValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someBitValHeaderIsVisible){
                cy.get(PageSelectors.someBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValHeaderText); 
                
                cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalBitValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalBitValHeaderText); 
                
                cy.get(PageSelectors.someConditionalBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBitValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.isEditAllowedHeaderIsVisible){
                cy.get(PageSelectors.isEditAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedHeaderText); 
                
                cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.isDeleteAllowedHeaderIsVisible){
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedHeaderText); 
                
                cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someFloatValHeaderIsVisible){
                cy.get(PageSelectors.someFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValHeaderText); 
                
                cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalFloatValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalFloatValHeaderText); 
                
                cy.get(PageSelectors.someConditionalFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalFloatValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValHeaderText); 
                
                cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalDecimalValHeaderText); 
                
                cy.get(PageSelectors.someConditionalDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDecimalValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValHeaderText); 
                
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalUTCDateTimeValHeaderText); 
                
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someDateValHeaderIsVisible){
                cy.get(PageSelectors.someDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValHeaderText); 
                
                cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalDateValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalDateValHeaderText); 
                
                cy.get(PageSelectors.someConditionalDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDateValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValHeaderText); 
                
                cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalMoneyValHeaderText); 
                
                cy.get(PageSelectors.someConditionalMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalMoneyValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValHeaderText); 
                
                cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalNVarCharValHeaderText); 
                
                cy.get(PageSelectors.someConditionalNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalNVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValHeaderText); 
                
                cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalVarCharValHeaderText); 
                
                cy.get(PageSelectors.someConditionalVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalVarCharValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someTextValHeaderIsVisible){
                cy.get(PageSelectors.someTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValHeaderText); 
                
                cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalTextValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalTextValHeaderText); 
                
                cy.get(PageSelectors.someConditionalTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalTextValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.somePhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.somePhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberHeaderText);
                
                cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalPhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.someConditionalPhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalPhoneNumberHeaderText);
                
                cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someEmailAddressHeaderIsVisible){ 
                cy.get(PageSelectors.someEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressHeaderText); 
                
                cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someConditionalEmailAddressHeaderIsVisible){ 
                cy.get(PageSelectors.someConditionalEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalEmailAddressHeaderText); 
                
                cy.get(PageSelectors.someConditionalEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalEmailAddressHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.isImageUrlAvailableHeaderIsVisible){
                cy.get(PageSelectors.isImageUrlAvailableHeader)
                .should('exist');
                
                cy.get(PageSelectors.isImageUrlAvailableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isImageUrlAvailableHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.someImageUrlValHeaderIsVisible){
                cy.get(PageSelectors.someImageUrlValHeader)
                .should('exist');
                
                cy.get(PageSelectors.someImageUrlValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someImageUrlValHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.someConditionalImageUrlHeaderIsVisible){
                cy.get(PageSelectors.someConditionalImageUrlHeader)
                .should('exist');
                
                cy.get(PageSelectors.someConditionalImageUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalImageUrlHeaderSortUpIndicator)
                .should('not.exist'); 
            }

            if(PageSettings.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText); 
                
                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.flavorCodeHeaderIsVisible){
                cy.get(PageSelectors.flavorCodeHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorCodeHeaderText); 
                
                cy.get(PageSelectors.flavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.someIntConditionalOnDeletableHeaderIsVisible){
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntConditionalOnDeletableHeaderText); 
                
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.nVarCharAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharAsUrlHeaderText); 
                
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.nVarCharConditionalAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharConditionalAsUrlHeaderText); 
                
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.updateLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.deleteAsyncButtonLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            if(PageSettings.detailsLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            } 

            
            
            if(PageSettings.testFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.testConditionalFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.testAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.testConditionalAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
            if(PageSettings.conditionalBtnExampleLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist'); 
            }
            
//endset

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

        if(PageSettings.calculatedIsVisualizationGrid && !PageSettings.isFilterSectionHidden){

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
//endset
            //test filter fields
            if(PageSettings.flavorFilterCodeIsVisible){
                cy.log('Verifying flavorFilterCodeLabel control label...');
                cy.get(PageSelectors.flavorFilterCodeFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.flavorFilterCodeFilterLabel);

                cy.log('Verifying flavorFilterCode control...');
                cy.get(PageSelectors.flavorFilterCodeFilterField)
                    .should('be.visible'); 
                
            } 

            if(PageSettings.someFilterIntValIsVisible){
                cy.log('Verifying someFilterIntValLabel control label...');
                cy.get(PageSelectors.someFilterIntValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterIntValFilterLabel);
                    
                cy.log('Verifying someFilterIntVal control...');
                cy.get(PageSelectors.someFilterIntValFilterField)
                    .should('be.visible'); 

                this.setFilterFieldSomeFilterIntVal(111);
                
                cy.get(PageSelectors.someFilterIntValFilterField) 
                    .should('have.value', '111');
            }

            if(PageSettings.someFilterBigIntValIsVisible){
                cy.log('Verifying someFilterBigIntValLabel control label...');
                cy.get(PageSelectors.someFilterBigIntValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterBigIntValFilterLabel);
                    
                cy.log('Verifying someFilterBigIntValLabel control...');
                cy.get(PageSelectors.someFilterBigIntValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterBigIntVal(111);
                
                cy.get(PageSelectors.someFilterBigIntValFilterField) 
                    .should('have.value', '111');
            }

            if(PageSettings.someFilterBitValIsVisible){
                //cy.log('Verifying someFilterBitVal control...');
                // cy.get(PageSelectors.someFilterBitValField)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.someFilterBitValLabelText);
                    
                cy.log('Verifying someFilterBitValLabel control...');
                cy.get(PageSelectors.someFilterBitValFilterField)
                    .should('be.visible');
            }

            if(PageSettings.isFilterEditAllowedIsVisible){
                // cy.log('Verifying isFilterEditAllowedLabel control label...');
                // cy.get(PageSelectors.isFilterEditAllowedLabel)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.isFilterEditAllowedLabelText);
                    
                cy.log('Verifying isFilterEditAllowedLabel control...');
                cy.get(PageSelectors.isFilterEditAllowedFilterField)
                    .should('be.visible');
            }

            if(PageSettings.isFilterDeleteAllowedIsVisible){
                // cy.log('Verifying isFilterDeleteAllowedLabel control label...');
                // cy.get(PageSelectors.isFilterDeleteAllowedLabel)
                //     .should('be.visible')
                //     .should('include.text', PageTexts.isFilterDeleteAllowedLabelText);
                    
                cy.log('Verifying isFilterDeleteAllowedLabel control...');
                cy.get(PageSelectors.isFilterDeleteAllowedFilterField)
                    .should('be.visible');
            }

            if(PageSettings.someFilterFloatValIsVisible){
                cy.log('Verifying someFilterFloatValLabel control label...');
                cy.get(PageSelectors.someFilterFloatValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterFloatValFilterLabel);
                    
                cy.log('Verifying someFilterFloatValLabel control...');
                cy.get(PageSelectors.someFilterFloatValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterFloatVal(111);
                
                cy.get(PageSelectors.someFilterFloatValFilterField) 
                    .should('have.value', '111');
            }

            if(PageSettings.someFilterDecimalValIsVisible){
                cy.log('Verifying someFilterDecimalValLabel control label...');
                cy.get(PageSelectors.someFilterDecimalValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterDecimalValFilterLabel);
                    
                cy.log('Verifying someFilterDecimalValLabel control...');
                cy.get(PageSelectors.someFilterDecimalValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterDecimalVal(111);
                
                cy.get(PageSelectors.someFilterDecimalValFilterField) 
                    .should('have.value', '111');
            }

            if(PageSettings.someMinUTCDateTimeValIsVisible){
                cy.log('Verifying someMinUTCDateTimeValLabel control label...');
                cy.get(PageSelectors.someMinUTCDateTimeValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMinUTCDateTimeValFilterLabel);
                    
                cy.log('Verifying someMinUTCDateTimeValLabel control...');
                cy.get(PageSelectors.someMinUTCDateTimeValFilterField)
                    .should('be.visible');
            }

            if(PageSettings.someMinDateValIsVisible){
                cy.log('Verifying someMinDateValLabel control label...');
                cy.get(PageSelectors.someMinDateValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMinDateValFilterLabel);
                    
                cy.log('Verifying someMinDateValLabel control...');
                cy.get(PageSelectors.someMinDateValFilterField)
                    .should('be.visible');
            }

            if(PageSettings.someFilterMoneyValIsVisible){
                cy.log('Verifying someFilterMoneyValLabel control label...');
                cy.get(PageSelectors.someFilterMoneyValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterMoneyValFilterLabel);
                    
                cy.log('Verifying someFilterMoneyValLabel control...');
                cy.get(PageSelectors.someFilterMoneyValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterMoneyVal(111);
                
                cy.get(PageSelectors.someFilterMoneyValFilterField) 
                    .should('have.value', '111');
            }

            if(PageSettings.someFilterNVarCharValIsVisible){
                cy.log('Verifying someFilterNVarCharValLabel control label...');
                cy.get(PageSelectors.someFilterNVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterNVarCharValFilterLabel);
                    
                cy.log('Verifying someFilterNVarCharValLabel control...');
                cy.get(PageSelectors.someFilterNVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterNVarCharVal("someFilterNVarCharValTestVal");
                
                cy.get(PageSelectors.someFilterNVarCharValFilterField) 
                    .should('have.value', 'someFilterNVarCharValTestVal');
            }

            if(PageSettings.someFilterVarCharValIsVisible){
                cy.log('Verifying someFilterVarCharValLabel control label...');
                cy.get(PageSelectors.someFilterVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterVarCharValFilterLabel);
                    
                cy.log('Verifying someFilterVarCharValLabel control...');
                cy.get(PageSelectors.someFilterVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterVarCharVal("someFilterVarCharValTestVal");
                
                cy.get(PageSelectors.someFilterVarCharValFilterField) 
                    .should('have.value', 'someFilterVarCharValTestVal');
            }

            if(PageSettings.someFilterTextValIsVisible){
                cy.log('Verifying someFilterTextValLabel control label...');
                cy.get(PageSelectors.someFilterTextValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterTextValFilterLabel);
                    
                cy.log('Verifying someFilterTextValLabel control...');
                cy.get(PageSelectors.someFilterTextValFilterField)
                    .should('be.visible'); 

                this.setFilterFieldSomeFilterTextVal("someFilterTextValTestVal");
                
                cy.get(PageSelectors.someFilterTextValFilterField) 
                    .should('have.value', 'someFilterTextValTestVal');
            }

            if(PageSettings.someFilterPhoneNumberIsVisible){
                cy.log('Verifying someFilterPhoneNumberLabel control label...');
                cy.get(PageSelectors.someFilterPhoneNumberFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterPhoneNumberFilterLabel);
                
                cy.log('Verifying someFilterPhoneNumberLabel control...');
                cy.get(PageSelectors.someFilterPhoneNumberFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterPhoneNumber("111-111-1111");
                
                cy.get(PageSelectors.someFilterPhoneNumberFilterField) 
                    .should('have.value', '111-111-1111');
            }

            if(PageSettings.someFilterEmailAddressIsVisible){
                cy.log('Verifying someFilterEmailAddressLabel control label...');
                cy.get(PageSelectors.someFilterEmailAddressFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someFilterEmailAddressFilterLabel);
                    
                cy.log('Verifying someFilterEmailAddressLabel control...');
                cy.get(PageSelectors.someFilterEmailAddressFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeFilterEmailAddress("test@test.com");
                
                cy.get(PageSelectors.someFilterEmailAddressFilterField) 
                    .should('have.value', 'test@test.com');
            }
//endset
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
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');

//endset
            if(PageSettings.plantCodeHeaderIsVisible){
                cy.get(PageSelectors.plantCodeHeader)
                .should('not.exist');
            }
            if(PageSettings.someIntValHeaderIsVisible){
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
            if(PageSettings.someConditionalIntValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalIntValHeaderText); 
                
                cy.get(PageSelectors.someConditionalIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalIntValHeader)
                        .click()
                        .get(PageSelectors.someConditionalIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalIntValHeader)
                        .click()
                        .get(PageSelectors.someConditionalIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
                 
            }
            if(PageSettings.someBigIntValHeaderIsVisible){
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
            if(PageSettings.someConditionalBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalBigIntValHeaderText); 
                
                cy.get(PageSelectors.someConditionalBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBigIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBigIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalBigIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalBigIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalBigIntValHeader)
                        .click()
                        .get(PageSelectors.someConditionalBigIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalBigIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalBigIntValHeader)
                        .click()
                        .get(PageSelectors.someConditionalBigIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someBitValHeaderIsVisible){
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
            if(PageSettings.someConditionalBitValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalBitValHeaderText); 
                
                cy.get(PageSelectors.someConditionalBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBitValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalBitValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalBitValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalBitValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalBitValHeader)
                        .click()
                        .get(PageSelectors.someConditionalBitValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalBitValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalBitValHeader)
                        .click()
                        .get(PageSelectors.someConditionalBitValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.isEditAllowedHeaderIsVisible){
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
            if(PageSettings.isDeleteAllowedHeaderIsVisible){
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
            if(PageSettings.someFloatValHeaderIsVisible){
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
            if(PageSettings.someConditionalFloatValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalFloatValHeaderText); 
                
                cy.get(PageSelectors.someConditionalFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalFloatValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalFloatValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalFloatValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalFloatValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalFloatValHeader)
                        .click()
                        .get(PageSelectors.someConditionalFloatValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalFloatValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalFloatValHeader)
                        .click()
                        .get(PageSelectors.someConditionalFloatValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someDecimalValHeaderIsVisible){
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
            if(PageSettings.someConditionalDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalDecimalValHeaderText); 
                
                cy.get(PageSelectors.someConditionalDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDecimalValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDecimalValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalDecimalValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalDecimalValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalDecimalValHeader)
                        .click()
                        .get(PageSelectors.someConditionalDecimalValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalDecimalValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalDecimalValHeader)
                        .click()
                        .get(PageSelectors.someConditionalDecimalValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someUTCDateTimeValHeaderIsVisible){
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
            if(PageSettings.someConditionalUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalUTCDateTimeValHeaderText); 
                
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalUTCDateTimeValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalUTCDateTimeValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someConditionalUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someConditionalUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someDateValHeaderIsVisible){
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
            if(PageSettings.someConditionalDateValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalDateValHeaderText); 
                
                cy.get(PageSelectors.someConditionalDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDateValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalDateValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalDateValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalDateValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalDateValHeader)
                        .click()
                        .get(PageSelectors.someConditionalDateValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalDateValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalDateValHeader)
                        .click()
                        .get(PageSelectors.someConditionalDateValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someMoneyValHeaderIsVisible){
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
            if(PageSettings.someConditionalMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalMoneyValHeaderText); 
                
                cy.get(PageSelectors.someConditionalMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalMoneyValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalMoneyValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalMoneyValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalMoneyValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalMoneyValHeader)
                        .click()
                        .get(PageSelectors.someConditionalMoneyValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalMoneyValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalMoneyValHeader)
                        .click()
                        .get(PageSelectors.someConditionalMoneyValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someNVarCharValHeaderIsVisible){
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
            if(PageSettings.someConditionalNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalNVarCharValHeaderText); 
                
                cy.get(PageSelectors.someConditionalNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalNVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalNVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalNVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalNVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someConditionalNVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalNVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someConditionalNVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someVarCharValHeaderIsVisible){
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
            if(PageSettings.someConditionalVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalVarCharValHeaderText); 
                
                cy.get(PageSelectors.someConditionalVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalVarCharValHeader)
                        .click()
                        .get(PageSelectors.someConditionalVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalVarCharValHeader)
                        .click()
                        .get(PageSelectors.someConditionalVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someTextValHeaderIsVisible){
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
            if(PageSettings.someConditionalTextValHeaderIsVisible){
                cy.get(PageSelectors.someConditionalTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalTextValHeaderText); 
                
                cy.get(PageSelectors.someConditionalTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalTextValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalTextValHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalTextValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalTextValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalTextValHeader)
                        .click()
                        .get(PageSelectors.someConditionalTextValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalTextValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalTextValHeader)
                        .click()
                        .get(PageSelectors.someConditionalTextValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.somePhoneNumberHeaderIsVisible){
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
            if(PageSettings.someConditionalPhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.someConditionalPhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalPhoneNumberHeaderText);
                
                cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalPhoneNumberHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalPhoneNumberHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalPhoneNumberHeader)
                        .click()
                        .get(PageSelectors.someConditionalPhoneNumberHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalPhoneNumberHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalPhoneNumberHeader)
                        .click()
                        .get(PageSelectors.someConditionalPhoneNumberHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someEmailAddressHeaderIsVisible){ 
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
            if(PageSettings.someConditionalEmailAddressHeaderIsVisible){ 
                cy.get(PageSelectors.someConditionalEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someConditionalEmailAddressHeaderText); 
                
                cy.get(PageSelectors.someConditionalEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalEmailAddressHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalEmailAddressHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalEmailAddressHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalEmailAddressHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someConditionalEmailAddressHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalEmailAddressHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someConditionalEmailAddressHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            
            if(PageSettings.isImageUrlAvailableHeaderIsVisible){
                cy.get(PageSelectors.isImageUrlAvailableHeader)
                .should('exist');
                
                cy.get(PageSelectors.isImageUrlAvailableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isImageUrlAvailableHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isImageUrlAvailableHeader)
                .click()
                .click()
                .get(PageSelectors.isImageUrlAvailableHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.isImageUrlAvailableHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.isImageUrlAvailableHeader)
                        .click()
                        .get(PageSelectors.isImageUrlAvailableHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.isImageUrlAvailableHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.isImageUrlAvailableHeader)
                        .click()
                        .get(PageSelectors.isImageUrlAvailableHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someImageUrlValHeaderIsVisible){
                cy.get(PageSelectors.someImageUrlValHeader)
                .should('exist');
                
                cy.get(PageSelectors.someImageUrlValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someImageUrlValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someImageUrlValHeader)
                .click()
                .click()
                .get(PageSelectors.someImageUrlValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someImageUrlValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someImageUrlValHeader)
                        .click()
                        .get(PageSelectors.someImageUrlValHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someImageUrlValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someImageUrlValHeader)
                        .click()
                        .get(PageSelectors.someImageUrlValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someConditionalImageUrlHeaderIsVisible){
                cy.get(PageSelectors.someConditionalImageUrlHeader)
                .should('exist');
                
                cy.get(PageSelectors.someConditionalImageUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalImageUrlHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someConditionalImageUrlHeader)
                .click()
                .click()
                .get(PageSelectors.someConditionalImageUrlHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someConditionalImageUrlHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalImageUrlHeader)
                        .click()
                        .get(PageSelectors.someConditionalImageUrlHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.someConditionalImageUrlHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someConditionalImageUrlHeader)
                        .click()
                        .get(PageSelectors.someConditionalImageUrlHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            
            if(PageSettings.flavorNameHeaderIsVisible){
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
            if(PageSettings.flavorCodeHeaderIsVisible){
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
            if(PageSettings.someIntConditionalOnDeletableHeaderIsVisible){
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
            if(PageSettings.nVarCharAsUrlHeaderIsVisible){
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
            if(PageSettings.nVarCharConditionalAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharConditionalAsUrlHeaderText); 
                
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharConditionalAsUrlHeader)
                .click()
                .click()
                .get(PageSelectors.nVarCharConditionalAsUrlHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharConditionalAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharConditionalAsUrlHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.nVarCharConditionalAsUrlHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharConditionalAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharConditionalAsUrlHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.updateLinkPlantCodeHeaderIsVisible){
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
            if(PageSettings.deleteAsyncButtonLinkPlantCodeHeaderIsVisible){
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
            if(PageSettings.detailsLinkPlantCodeHeaderIsVisible){
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


            
            if(PageSettings.testFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }

            
            if(PageSettings.testConditionalFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }

            
            if(PageSettings.testAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }

            
            if(PageSettings.testConditionalAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            
            if(PageSettings.conditionalBtnExampleLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeader)
                .should('exist');
                
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {  
                        cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.conditionalBtnExampleLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            
//endset
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
        const testFileDownloadLinkPacCodeColumnIsVisible = true;
        const testConditionalFileDownloadLinkPacCodeColumnIsVisible = true;
        const testAsyncFlowReqLinkPacCodeColumnIsVisible = true;
        const testConditionalAsyncFlowReqLinkPacCodeColumnIsVisible = true; 
        const conditionalBtnExampleLinkPlantCodeColumnIsVisible = true; 
        
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
        else if (destinationPageName == 'PlantUserDetails' &&   //testFileDownloadLinkPacCode
            testFileDownloadLinkPacCodeColumnIsVisible) {
            cy.log('click row button testFileDownloadLinkPacCode...');
            cy.get(PageSelectors.testFileDownloadLinkPacCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDetails' &&   //testConditionalFileDownloadLinkPacCode
            testConditionalFileDownloadLinkPacCodeColumnIsVisible) {
            cy.log('click row button testConditionalFileDownloadLinkPacCode...');
            cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDetails' &&   //testAsyncFlowReqLinkPacCode
            testAsyncFlowReqLinkPacCodeColumnIsVisible) {
            cy.log('click row button testAsyncFlowReqLinkPacCode...');
            cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDetails' &&   //testConditionalAsyncFlowReqLinkPacCode
            testConditionalAsyncFlowReqLinkPacCodeColumnIsVisible) {
            cy.log('click row button testConditionalAsyncFlowReqLinkPacCode...');
            cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDetails' &&   //conditionalBtnExampleLinkPlantCode
            conditionalBtnExampleLinkPlantCodeColumnIsVisible) {
            cy.log('click row button conditionalBtnExampleLinkPlantCode...');
            cy.get(PageSelectors.conditionalBtnExampleLinkPlantCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

    
//endset
    setFilterFieldFlavorFilterCode(val:string) { 
        cy.get(PageSelectors.flavorFilterCodeFilterField)
            .clear()
            .type(val); 
    }
 

    setFilterFieldSomeFilterIntVal(val:number) { 
        cy.get(PageSelectors.someFilterIntValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeFilterBigIntVal(val:number) { 
        cy.get(PageSelectors.someFilterBigIntValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeFilterBitVal(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.someFilterBitValFilterField)
            .click(); 
        }
    }

    setFilterFieldIsFilterEditAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.isFilterEditAllowedFilterField)
                .click(); 
        }
    }

    setFilterFieldIsFilterDeleteAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.isFilterDeleteAllowedFilterField)
            .click(); 
        }
    }

    setFilterFieldSomeFilterFloatVal(val:number) { 
        cy.get(PageSelectors.someFilterFloatValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeFilterDecimalVal(val:number) { 
        cy.get(PageSelectors.someFilterDecimalValFilterField)
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

    setFilterFieldSomeFilterMoneyVal(val:number) { 
        cy.get(PageSelectors.someFilterMoneyValFilterField)
            .clear()
            .type(val.toString()); 
    }

    setFilterFieldSomeFilterNVarCharVal(val:string) { 
        cy.get(PageSelectors.someFilterNVarCharValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeFilterVarCharVal(val:string) { 
        cy.get(PageSelectors.someFilterVarCharValFilterField)
            .clear()
            .type(val, { parseSpecialCharSequences: false }); 
    }

    setFilterFieldSomeFilterTextVal(val:string) { 
        cy.get(PageSelectors.someFilterTextValFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeFilterPhoneNumber(val:string) { 
        cy.get(PageSelectors.someFilterPhoneNumberFilterField)
            .clear()
            .type(val); 
    }

    setFilterFieldSomeFilterEmailAddress(val:string) { 
        cy.get(PageSelectors.someFilterEmailAddressFilterField)
            .clear()
            .type(val); 
    }
//endset
 
}
export default LandPlantListPage;
