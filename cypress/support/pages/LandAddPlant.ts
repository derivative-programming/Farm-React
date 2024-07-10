
import { LandAddPlantPageSelectors as PageSelectors } from '../selectors/LandAddPlant';
import { LandAddPlantPageTexts as PageTexts } from '../texts/LandAddPlant';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'
import Helper from '../helper';
 

export class LandAddPlantPage {
    visit() {
		cy.log('LandAddPlantPage.visit() start'); 
        
        
        if(!this.isLoginRequired()){  
            cy.log('Login is not required');
            //go to it directly
            cy.visit(PageUrlPrefixes.landAddPlant + '/00000000-0000-0000-0000-000000000000');
            return;
        }

        cy.log('Login is required');

        const routingAssistant = new RoutingAssistant(); 
        const currentPage = routingAssistant.visitPage('LandPlantList');  //cancel-button destination
        routingAssistant.goToPage(currentPage,'LandAddPlant'); 
        
    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = true;
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
        else if (destinationPageName == 'LandPlantList') { //submit-button
            cy.log('click Submit button...');
            cy.get(PageSelectors.submitButton) 
                .click();
        } 
        else if (destinationPageName == 'LandPlantList') { //cancel-button
            cy.log('click Cancel button...');
            cy.get(PageSelectors.cancelButton) 
                .click();
        }
        else if (destinationPageName == 'LandAddPlant') { //other-button
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
        cy.url().should('include', PageUrlPrefixes.landAddPlant);
    }

    verifyPageElements() {


        const requestFlavorCodeIsVisible = true;
        const requestOtherFlavorIsVisible = true;
        const requestSomeIntValIsVisible = true;
        const requestSomeBigIntValIsVisible = true;
        const requestSomeBitValIsVisible = true;
        const requestIsEditAllowedIsVisible = true;
        const requestIsDeleteAllowedIsVisible = true;
        const requestSomeFloatValIsVisible = true;
        const requestSomeDecimalValIsVisible = true;
        const requestSomeUTCDateTimeValIsVisible = true;
        const requestSomeDateValIsVisible = true;
        const requestSomeMoneyValIsVisible = true;
        const requestSomeNVarCharValIsVisible = true;
        const requestSomeVarCharValIsVisible = true;
        const requestSomeTextValIsVisible = true;
        const requestSomePhoneNumberIsVisible = true;
        const requestSomeEmailAddressIsVisible = true;
        const requestSampleImageUploadFileIsVisible = true;

        if(requestFlavorCodeIsVisible){
            cy.log('Verifying requestFlavorCodeLabel control label...');
            cy.get(PageSelectors.requestFlavorCodeLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestFlavorCodeLabelText);

            cy.log('Verifying requestFlavorCode control...');
            cy.get(PageSelectors.requestFlavorCodeField)
                .should('be.visible'); 
            
        }
        if(requestOtherFlavorIsVisible){
            cy.log('Verifying requestOtherFlavorLabel control label...');
            cy.get(PageSelectors.requestOtherFlavorLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestOtherFlavorLabelText);
                
            cy.log('Verifying requestOtherFlavor control...');
            cy.get(PageSelectors.requestOtherFlavorField)
                .should('be.visible');

            this.setFieldRequestOtherFlavor("requestOtherFlavorTestVal");
            
            cy.get(PageSelectors.requestOtherFlavorField) 
                .should('have.value', 'requestOtherFlavorTestVal');
        }
        if(requestSomeIntValIsVisible){
            cy.log('Verifying requestSomeIntValLabel control label...');
            cy.get(PageSelectors.requestSomeIntValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeIntValLabelText);
                
            cy.log('Verifying requestSomeIntVal control...');
            cy.get(PageSelectors.requestSomeIntValField)
                .should('be.visible'); 

            this.setFieldRequestSomeIntVal(111);
            
            cy.get(PageSelectors.requestSomeIntValField) 
                .should('have.value', '111');
        }
        if(requestSomeBigIntValIsVisible){
            cy.log('Verifying requestSomeBigIntValLabel control label...');
            cy.get(PageSelectors.requestSomeBigIntValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeBigIntValLabelText);
                
            cy.log('Verifying requestSomeBigIntValLabel control...');
            cy.get(PageSelectors.requestSomeBigIntValField)
                .should('be.visible');

            this.setFieldRequestSomeBigIntVal(111);
            
            cy.get(PageSelectors.requestSomeBigIntValField) 
                .should('have.value', '111');
        }
        if(requestSomeBitValIsVisible){
            //cy.log('Verifying requestSomeBitVal control...');
            // cy.get(PageSelectors.requestSomeBitValField)
            //     .should('be.visible')
            //     .should('include.text', PageTexts.requestSomeBitValLabelText);
                
            cy.log('Verifying requestSomeBitValLabel control...');
            cy.get(PageSelectors.requestSomeBitValField)
                .should('be.visible');
        }
        if(requestIsEditAllowedIsVisible){
            // cy.log('Verifying requestIsEditAllowedLabel control label...');
            // cy.get(PageSelectors.requestIsEditAllowedLabel)
            //     .should('be.visible')
            //     .should('include.text', PageTexts.requestIsEditAllowedLabelText);
                
            cy.log('Verifying requestIsEditAllowedLabel control...');
            cy.get(PageSelectors.requestIsEditAllowedField)
                .should('be.visible');
        }
        if(requestIsDeleteAllowedIsVisible){
            // cy.log('Verifying requestIsDeleteAllowedLabel control label...');
            // cy.get(PageSelectors.requestIsDeleteAllowedLabel)
            //     .should('be.visible')
            //     .should('include.text', PageTexts.requestIsDeleteAllowedLabelText);
                
            cy.log('Verifying requestIsDeleteAllowedLabel control...');
            cy.get(PageSelectors.requestIsDeleteAllowedField)
                .should('be.visible');
        }
        if(requestSomeFloatValIsVisible){
            cy.log('Verifying requestSomeFloatValLabel control label...');
            cy.get(PageSelectors.requestSomeFloatValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeFloatValLabelText);
                
            cy.log('Verifying requestSomeFloatValLabel control...');
            cy.get(PageSelectors.requestSomeFloatValField)
                .should('be.visible');

            this.setFieldRequestSomeFloatVal(111);
            
            cy.get(PageSelectors.requestSomeFloatValField) 
                .should('have.value', '111');
        }
        if(requestSomeDecimalValIsVisible){
            cy.log('Verifying requestSomeDecimalValLabel control label...');
            cy.get(PageSelectors.requestSomeDecimalValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeDecimalValLabelText);
                
            cy.log('Verifying requestSomeDecimalValLabel control...');
            cy.get(PageSelectors.requestSomeDecimalValField)
                .should('be.visible');

            this.setFieldRequestSomeDecimalVal(111);
            
            cy.get(PageSelectors.requestSomeDecimalValField) 
                .should('have.value', '111');
        }
        if(requestSomeUTCDateTimeValIsVisible){
            cy.log('Verifying requestSomeUTCDateTimeValLabel control label...');
            cy.get(PageSelectors.requestSomeUTCDateTimeValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeUTCDateTimeValLabelText);
                
            cy.log('Verifying requestSomeUTCDateTimeValLabel control...');
            cy.get(PageSelectors.requestSomeUTCDateTimeValField)
                .should('be.visible');
        }
        if(requestSomeDateValIsVisible){
            cy.log('Verifying requestSomeDateValLabel control label...');
            cy.get(PageSelectors.requestSomeDateValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeDateValLabelText);
                
            cy.log('Verifying requestSomeDateValLabel control...');
            cy.get(PageSelectors.requestSomeDateValField)
                .should('be.visible');
        }
        if(requestSomeMoneyValIsVisible){
            cy.log('Verifying requestSomeMoneyValLabel control label...');
            cy.get(PageSelectors.requestSomeMoneyValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeMoneyValLabelText);
                
            cy.log('Verifying requestSomeMoneyValLabel control...');
            cy.get(PageSelectors.requestSomeMoneyValField)
                .should('be.visible');

            this.setFieldRequestSomeMoneyVal(111);
            
            cy.get(PageSelectors.requestSomeMoneyValField) 
                .should('have.value', '111');
        }
        if(requestSomeNVarCharValIsVisible){
            cy.log('Verifying requestSomeNVarCharValLabel control label...');
            cy.get(PageSelectors.requestSomeNVarCharValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeNVarCharValLabelText);
                
            cy.log('Verifying requestSomeNVarCharValLabel control...');
            cy.get(PageSelectors.requestSomeNVarCharValField)
                .should('be.visible');

            this.setFieldRequestSomeNVarCharVal("requestSomeNVarCharValTestVal");
            
            cy.get(PageSelectors.requestSomeNVarCharValField) 
                .should('have.value', 'requestSomeNVarCharValTestVal');
        }
        if(requestSomeVarCharValIsVisible){
            cy.log('Verifying requestSomeVarCharValLabel control label...');
            cy.get(PageSelectors.requestSomeVarCharValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeVarCharValLabelText);
                
            cy.log('Verifying requestSomeVarCharValLabel control...');
            cy.get(PageSelectors.requestSomeVarCharValField)
                .should('be.visible');

            this.setFieldRequestSomeVarCharVal("requestSomeVarCharValTestVal");
            
            cy.get(PageSelectors.requestSomeVarCharValField) 
                .should('have.value', 'requestSomeVarCharValTestVal');
        }
        if(requestSomeTextValIsVisible){
            cy.log('Verifying requestSomeTextValLabel control label...');
            cy.get(PageSelectors.requestSomeTextValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeTextValLabelText);
                
            cy.log('Verifying requestSomeTextValLabel control...');
            cy.get(PageSelectors.requestSomeTextValField)
                .should('be.visible'); 

            this.setFieldRequestSomeTextVal("requestSomeTextValTestVal");
            
            cy.get(PageSelectors.requestSomeTextValField) 
                .should('have.value', 'requestSomeTextValTestVal');
        }
        if(requestSomePhoneNumberIsVisible){
            cy.log('Verifying requestSomePhoneNumberLabel control label...');
            cy.get(PageSelectors.requestSomePhoneNumberLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomePhoneNumberLabelText);
            
            cy.log('Verifying requestSomePhoneNumberLabel control...');
            cy.get(PageSelectors.requestSomePhoneNumberField)
                .should('be.visible');

            this.setFieldRequestSomePhoneNumber("111-111-1111");
            
            cy.get(PageSelectors.requestSomePhoneNumberField) 
                .should('have.value', '111-111-1111');
        }
        if(requestSomeEmailAddressIsVisible){
            cy.log('Verifying requestSomeEmailAddressLabel control label...');
            cy.get(PageSelectors.requestSomeEmailAddressLabel)
                .should('be.visible')
                .should('include.text', PageTexts.requestSomeEmailAddressLabelText);
                
            cy.log('Verifying requestSomeEmailAddressLabel control...');
            cy.get(PageSelectors.requestSomeEmailAddressField)
                .should('be.visible');

            this.setFieldRequestSomeEmailAddress("test@test.com");
            
            cy.get(PageSelectors.requestSomeEmailAddressField) 
                .should('have.value', 'test@test.com');
        }
        if(requestSampleImageUploadFileIsVisible){
            cy.log('Verifying requestSampleImageUploadFileLabel control label...');
                cy.get(PageSelectors.requestSampleImageUploadFileLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.requestSampleImageUploadFileLabelText);
                    
            cy.log('Verifying requestSampleImageUploadFileLabel control...');
            cy.get(PageSelectors.requestSampleImageUploadFileField)
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
        
        cy.get(PageSelectors.siteFooter)
            .should('be.visible')
            .should('include.text', PageTexts.siteFooterText);
         
    }

    populateFormWithRandomValues(){
        
        const helper = new Helper();

        // this.setFieldRequestFlavorCode(requestFlavorCode); 
    
        this.setFieldRequestOtherFlavor(helper.getUniqueString(50)); 
    
        this.setFieldRequestSomeIntVal(helper.getRandomNumber(3)); 
    
        this.setFieldRequestSomeBigIntVal(helper.getRandomNumber(3)); 
    
        this.setFieldRequestSomeBitVal(true); 
    
        this.setFieldRequestIsEditAllowed(true); 
    
        this.setFieldRequestIsDeleteAllowed(true); 
    
        this.setFieldRequestSomeFloatVal(helper.getRandomNumber(3)); 
    
        this.setFieldRequestSomeDecimalVal(helper.getRandomNumber(3)); 
    
        this.setFieldRequestSomeUTCDateTimeVal(helper.getRandomDateString()); 
    
        this.setFieldRequestSomeDateVal(helper.getRandomDateString()); 
    
        this.setFieldRequestSomeMoneyVal(helper.getRandomNumber(3)); 
    
        this.setFieldRequestSomeNVarCharVal(helper.getUniqueString(50)); 
    
        this.setFieldRequestSomeVarCharVal(helper.getUniqueString(50));
    
        this.setFieldRequestSomeTextVal(helper.getUniqueString(50));
    
        this.setFieldRequestSomePhoneNumber(helper.getRandomPhoneNumber());
    
        this.setFieldRequestSomeEmailAddress(helper.getRandomEmail(50));
        
        // this.setFieldRequestSampleImageUploadFile(requestSampleImageUploadFile); 

    }

    populateForm(
            
        requestFlavorCode: string,
    
        requestOtherFlavor: string,
    
        requestSomeIntVal: number,
    
        requestSomeBigIntVal: number,
    
        requestSomeBitVal: boolean,
    
        requestIsEditAllowed: boolean,
    
        requestIsDeleteAllowed: boolean,
    
        requestSomeFloatVal: number,
    
        requestSomeDecimalVal: number,
    
        requestSomeUTCDateTimeVal: string,
    
        requestSomeDateVal: string,
    
        requestSomeMoneyVal: number,
    
        requestSomeNVarCharVal: string,
    
        requestSomeVarCharVal: string,
    
        requestSomeTextVal: string,
    
        requestSomePhoneNumber: string,
    
        requestSomeEmailAddress: string,
    
        requestSampleImageUploadFile: string,

    ) { 
        this.setFieldRequestFlavorCode(requestFlavorCode); 
    
        this.setFieldRequestOtherFlavor(requestOtherFlavor); 
    
        this.setFieldRequestSomeIntVal(requestSomeIntVal); 
    
        this.setFieldRequestSomeBigIntVal(requestSomeBigIntVal); 
    
        this.setFieldRequestSomeBitVal(requestSomeBitVal); 
    
        this.setFieldRequestIsEditAllowed(requestIsEditAllowed); 
    
        this.setFieldRequestIsDeleteAllowed(requestIsDeleteAllowed); 
    
        this.setFieldRequestSomeFloatVal(requestSomeFloatVal); 
    
        this.setFieldRequestSomeDecimalVal(requestSomeDecimalVal); 
    
        this.setFieldRequestSomeUTCDateTimeVal(requestSomeUTCDateTimeVal); 
    
        this.setFieldRequestSomeDateVal(requestSomeDateVal); 
    
        this.setFieldRequestSomeMoneyVal(requestSomeMoneyVal); 
    
        this.setFieldRequestSomeNVarCharVal(requestSomeNVarCharVal); 
    
        this.setFieldRequestSomeVarCharVal(requestSomeVarCharVal);
    
        this.setFieldRequestSomeTextVal(requestSomeTextVal);
    
        this.setFieldRequestSomePhoneNumber(requestSomePhoneNumber);
    
        this.setFieldRequestSomeEmailAddress(requestSomeEmailAddress);
        
        this.setFieldRequestSampleImageUploadFile(requestSampleImageUploadFile); 
    }

    setFieldRequestFlavorCode(val:string) { 
        cy.get(PageSelectors.requestFlavorCodeField)
            .clear()
            .type(val); 
    }

    setFieldRequestOtherFlavor(val:string) { 
        cy.get(PageSelectors.requestOtherFlavorField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomeIntVal(val:number) { 
        cy.get(PageSelectors.requestSomeIntValField)
            .clear()
            .type(val.toString()); 
    }

    setFieldRequestSomeBigIntVal(val:number) { 
        cy.get(PageSelectors.requestSomeBigIntValField)
            .clear()
            .type(val.toString()); 
    }

    setFieldRequestSomeBitVal(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.requestSomeBitValField)
                .click(); 
        }
    }

    setFieldRequestIsEditAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.requestIsEditAllowedField)
            .click(); 
        }
    }

    setFieldRequestIsDeleteAllowed(val:boolean) { 
        if(val === true){
            cy.get(PageSelectors.requestIsDeleteAllowedField)
            .click(); 
        }
    }

    setFieldRequestSomeFloatVal(val:number) { 
        cy.get(PageSelectors.requestSomeFloatValField)
            .clear()
            .type(val.toString()); 
    }

    setFieldRequestSomeDecimalVal(val:number) { 
        cy.get(PageSelectors.requestSomeDecimalValField)
            .clear()
            .type(val.toString()); 
    }

    setFieldRequestSomeUTCDateTimeVal(val:string) { 
        cy.get(PageSelectors.requestSomeUTCDateTimeValField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomeDateVal(val:string) { 
        cy.get(PageSelectors.requestSomeDateValField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomeMoneyVal(val:number) { 
        cy.get(PageSelectors.requestSomeMoneyValField)
            .clear()
            .type(val.toString()); 
    }

    setFieldRequestSomeNVarCharVal(val:string) { 
        cy.get(PageSelectors.requestSomeNVarCharValField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomeVarCharVal(val:string) { 
        cy.get(PageSelectors.requestSomeVarCharValField)
            .clear()
            .type(val, { parseSpecialCharSequences: false }); 
    }

    setFieldRequestSomeTextVal(val:string) { 
        cy.get(PageSelectors.requestSomeTextValField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomePhoneNumber(val:string) { 
        cy.get(PageSelectors.requestSomePhoneNumberField)
            .clear()
            .type(val); 
    }

    setFieldRequestSomeEmailAddress(val:string) { 
        cy.get(PageSelectors.requestSomeEmailAddressField)
            .clear()
            .type(val); 
    }

    setFieldRequestSampleImageUploadFile(val:string) { 
        // cy.get(PageSelectors.requestSampleImageUploadFileField)
        //     .clear()
        //     .type(val); 
    }
    
    submitForm() {
        cy.get(PageSelectors.submitButton).click();
    }

}
export default LandAddPlantPage;
