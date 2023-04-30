import { PlantEditPageSelectors as PageSelectors } from '../selectors/PlantEdit';
import { PlantEditPageTexts as PageTexts } from '../texts/PlantEdit';
import   RoutingAssistant   from '../routingAssistant'
export class PlantEditPage {
    visit() {
		cy.log('PlantEditPage.visit() start'); 
        let currentURL = ""
        cy.url().then(url => {
            currentURL = url
        });
        if(currentURL.includes('/plant-edit/'))
        {
            cy.log('already there');
            return;  //already there
        } 
        if(!this.isLoginRequired()){  
            cy.log('Login is not requrired');
            //go to it directly
            cy.visit('/plant-edit/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login is requrired');
        const routingAssistant = new RoutingAssistant();
        routingAssistant.visitPage('PlantUserDetails');  //cancel-button destination
        routingAssistant.goToPage('PlantEdit');
    }
    isLoginRequired():boolean {
        const isLoginPage = false;
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
        else if (destinationPageName == 'PlantUserDetails') { //submit-button
            cy.log('click Submit button...');
            cy.get(PageSelectors.submitButton)
                .click();
        }
        else if (destinationPageName == 'PlantUserDetails') { //cancel-button
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
        cy.url().should('include', '/plant-edit');
    }
    verifyPageElements() {
        const flavorCodeIsVisible = true;
        const otherFlavorIsVisible = true;
        const someIntValIsVisible = true;
        const someBigIntValIsVisible = true;
        const someBitValIsVisible = true;
        const isEditAllowedIsVisible = true;
        const isDeleteAllowedIsVisible = true;
        const someFloatValIsVisible = true;
        const someDecimalValIsVisible = true;
        const someUTCDateTimeValIsVisible = true;
        const someDateValIsVisible = true;
        const someMoneyValIsVisible = true;
        const someNVarCharValIsVisible = true;
        const someVarCharValIsVisible = true;
        const someTextValIsVisible = true;
        const somePhoneNumberIsVisible = true;
        const someEmailAddressIsVisible = true;
        if(flavorCodeIsVisible){
            cy.log('Verifying flavorCodeLabel control label...');
            cy.get(PageSelectors.flavorCodeLabel)
                .should('be.visible')
                .should('include.text', PageTexts.flavorCodeLabelText);
            cy.log('Verifying flavorCode control...');
            cy.get(PageSelectors.flavorCodeField)
                .should('be.visible');
        }
        if(otherFlavorIsVisible){
            cy.log('Verifying otherFlavorLabel control label...');
            cy.get(PageSelectors.otherFlavorLabel)
                .should('be.visible')
                .should('include.text', PageTexts.otherFlavorLabelText);
            cy.log('Verifying otherFlavor control...');
            cy.get(PageSelectors.otherFlavorField)
                .should('be.visible');
        }
        if(someIntValIsVisible){
            cy.log('Verifying someIntValLabel control label...');
            cy.get(PageSelectors.someIntValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValLabelText);
            cy.log('Verifying someIntVal control...');
            cy.get(PageSelectors.someIntValField)
                .should('be.visible');
        }
        if(someBigIntValIsVisible){
            cy.log('Verifying someBigIntValLabel control label...');
            cy.get(PageSelectors.someBigIntValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValLabelText);
            cy.log('Verifying someBigIntValLabel control...');
            cy.get(PageSelectors.someBigIntValField)
                .should('be.visible');
        }
        if(someBitValIsVisible){
            cy.log('Verifying someBitValLabel control label...');
            cy.get(PageSelectors.someBitValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValLabelText);
            cy.log('Verifying someBitValLabel control...');
            cy.get(PageSelectors.someBitValField)
                .should('be.visible');
        }
        if(isEditAllowedIsVisible){
            cy.log('Verifying isEditAllowedLabel control label...');
            cy.get(PageSelectors.isEditAllowedLabel)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedLabelText);
            cy.log('Verifying isEditAllowedLabel control...');
            cy.get(PageSelectors.isEditAllowedField)
                .should('be.visible');
        }
        if(isDeleteAllowedIsVisible){
            cy.log('Verifying isDeleteAllowedLabel control label...');
            cy.get(PageSelectors.isDeleteAllowedLabel)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedLabelText);
            cy.log('Verifying isDeleteAllowedLabel control...');
            cy.get(PageSelectors.isDeleteAllowedField)
                .should('be.visible');
        }
        if(someFloatValIsVisible){
            cy.log('Verifying someFloatValLabel control label...');
            cy.get(PageSelectors.someFloatValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValLabelText);
            cy.log('Verifying someFloatValLabel control...');
            cy.get(PageSelectors.someFloatValField)
                .should('be.visible');
        }
        if(someDecimalValIsVisible){
            cy.log('Verifying someDecimalValLabel control label...');
            cy.get(PageSelectors.someDecimalValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValLabelText);
            cy.log('Verifying someDecimalValLabel control...');
            cy.get(PageSelectors.someDecimalValField)
                .should('be.visible');
        }
        if(someUTCDateTimeValIsVisible){
            cy.log('Verifying someUTCDateTimeValLabel control label...');
            cy.get(PageSelectors.someUTCDateTimeValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValLabelText);
            cy.log('Verifying someUTCDateTimeValLabel control...');
            cy.get(PageSelectors.someUTCDateTimeValField)
                .should('be.visible');
        }
        if(someDateValIsVisible){
            cy.log('Verifying someDateValLabel control label...');
            cy.get(PageSelectors.someDateValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValLabelText);
            cy.log('Verifying someDateValLabel control...');
            cy.get(PageSelectors.someDateValField)
                .should('be.visible');
        }
        if(someMoneyValIsVisible){
            cy.log('Verifying someMoneyValLabel control label...');
            cy.get(PageSelectors.someMoneyValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValLabelText);
            cy.log('Verifying someMoneyValLabel control...');
            cy.get(PageSelectors.someMoneyValField)
                .should('be.visible');
        }
        if(someNVarCharValIsVisible){
            cy.log('Verifying someNVarCharValLabel control label...');
            cy.get(PageSelectors.someNVarCharValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValLabelText);
            cy.log('Verifying someNVarCharValLabel control...');
            cy.get(PageSelectors.someNVarCharValField)
                .should('be.visible');
        }
        if(someVarCharValIsVisible){
            cy.log('Verifying someVarCharValLabel control label...');
            cy.get(PageSelectors.someVarCharValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValLabelText);
            cy.log('Verifying someVarCharValLabel control...');
            cy.get(PageSelectors.someVarCharValField)
                .should('be.visible');
        }
        if(someTextValIsVisible){
            cy.log('Verifying someTextValLabel control label...');
            cy.get(PageSelectors.someTextValLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValLabelText);
            cy.log('Verifying someTextValLabel control...');
            cy.get(PageSelectors.someTextValField)
                .should('be.visible');
        }
        if(somePhoneNumberIsVisible){
            cy.log('Verifying somePhoneNumberLabel control label...');
            cy.get(PageSelectors.somePhoneNumberLabel)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberLabelText);
            cy.log('Verifying somePhoneNumberLabel control...');
            cy.get(PageSelectors.somePhoneNumberField)
                .should('be.visible');
        }
        if(someEmailAddressIsVisible){
            cy.log('Verifying someEmailAddressLabel control label...');
            cy.get(PageSelectors.someEmailAddressLabel)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressLabelText);
            cy.log('Verifying someEmailAddressLabel control...');
            cy.get(PageSelectors.someEmailAddressField)
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
        flavorCode: string,
        otherFlavor: string,
        someIntVal: number,
        someBigIntVal: number,
        someBitVal: boolean,
        isEditAllowed: boolean,
        isDeleteAllowed: boolean,
        someFloatVal: number,
        someDecimalVal: number,
        someUTCDateTimeVal: string,
        someDateVal: string,
        someMoneyVal: number,
        someNVarCharVal: string,
        someVarCharVal: string,
        someTextVal: string,
        somePhoneNumber: string,
        someEmailAddress: string,
    ) {
        this.setFieldFlavorCode(flavorCode);
        this.setFieldOtherFlavor(otherFlavor);
        this.setFieldSomeIntVal(someIntVal);
        this.setFieldSomeBigIntVal(someBigIntVal);
        this.setFieldSomeBitVal(someBitVal);
        this.setFieldIsEditAllowed(isEditAllowed);
        this.setFieldIsDeleteAllowed(isDeleteAllowed);
        this.setFieldSomeFloatVal(someFloatVal);
        this.setFieldSomeDecimalVal(someDecimalVal);
        this.setFieldSomeUTCDateTimeVal(someUTCDateTimeVal);
        this.setFieldSomeDateVal(someDateVal);
        this.setFieldSomeMoneyVal(someMoneyVal);
        this.setFieldSomeNVarCharVal(someNVarCharVal);
        this.setFieldSomeVarCharVal(someVarCharVal);
        this.setFieldSomeTextVal(someTextVal);
        this.setFieldSomePhoneNumber(somePhoneNumber);
        this.setFieldSomeEmailAddress(someEmailAddress);
    }
    setFieldFlavorCode(val:string) {
        cy.get(PageSelectors.flavorCodeField)
            .clear()
            .type(val);
    }
    setFieldOtherFlavor(val:string) {
        cy.get(PageSelectors.otherFlavorField)
            .clear()
            .type(val);
    }
    setFieldSomeIntVal(val:number) {
        cy.get(PageSelectors.someIntValField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeBigIntVal(val:number) {
        cy.get(PageSelectors.someBigIntValField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeBitVal(val:boolean) {
        cy.get(PageSelectors.someBitValField)
            .clear()
            .type(val.toString());
    }
    setFieldIsEditAllowed(val:boolean) {
        cy.get(PageSelectors.isEditAllowedField)
            .clear()
            .type(val.toString());
    }
    setFieldIsDeleteAllowed(val:boolean) {
        cy.get(PageSelectors.isDeleteAllowedField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeFloatVal(val:number) {
        cy.get(PageSelectors.someFloatValField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeDecimalVal(val:number) {
        cy.get(PageSelectors.someDecimalValField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeUTCDateTimeVal(val:string) {
        cy.get(PageSelectors.someUTCDateTimeValField)
            .clear()
            .type(val);
    }
    setFieldSomeDateVal(val:string) {
        cy.get(PageSelectors.someDateValField)
            .clear()
            .type(val);
    }
    setFieldSomeMoneyVal(val:number) {
        cy.get(PageSelectors.someMoneyValField)
            .clear()
            .type(val.toString());
    }
    setFieldSomeNVarCharVal(val:string) {
        cy.get(PageSelectors.someNVarCharValField)
            .clear()
            .type(val);
    }
    setFieldSomeVarCharVal(val:string) {
        cy.get(PageSelectors.someVarCharValField)
            .clear()
            .type(val, { parseSpecialCharSequences: false });
    }
    setFieldSomeTextVal(val:string) {
        cy.get(PageSelectors.someTextValField)
            .clear()
            .type(val);
    }
    setFieldSomePhoneNumber(val:string) {
        cy.get(PageSelectors.somePhoneNumberField)
            .clear()
            .type(val);
    }
    setFieldSomeEmailAddress(val:string) {
        cy.get(PageSelectors.someEmailAddressField)
            .clear()
            .type(val);
    }
    submitForm() {
        cy.get(PageSelectors.submitButton).click();
    }
}
export default PlantEditPage;

