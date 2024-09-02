/* eslint-disable @typescript-eslint/no-empty-interface */

export interface InitRequest {
    
}

export interface ResponseFull {
    data: InitResult;
}

export interface InitResult {
 
    requestFlavorCode: string;
 
    requestOtherFlavor: string;
 
    requestSomeIntVal: number;
 
    requestSomeBigIntVal: number;
 
    requestSomeBitVal: boolean;
 
    requestIsDeleteAllowed: boolean;
 
    requestIsEditAllowed: boolean;
 
    requestSomeFloatVal: number;
 
    requestSomeDecimalVal: number;
 
    requestSomeUTCDateTimeVal: string;
 
    requestSomeDateVal: string;
 
    requestSomeMoneyVal: number;
 
    requestSomeNVarCharVal: string;
 
    requestSomeVarCharVal: string;
 
    requestSomeLongVarCharVal: string;
 
    requestSomeLongNVarCharVal: string;
 
    requestSomeTextVal: string;
 
    requestSomePhoneNumber: string;
 
    requestSomeEmailAddress: string;
 
    someImageUrlVal: string;
 
    landName: string;
 
    tacCode: string;

    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}
 

export class InitResultInstance implements InitResult {
 
    requestFlavorCode: string;
 
    requestOtherFlavor: string;
 
    requestSomeIntVal: number;
 
    requestSomeBigIntVal: number;
 
    requestSomeBitVal: boolean;
 
    requestIsDeleteAllowed: boolean;
 
    requestIsEditAllowed: boolean;
 
    requestSomeFloatVal: number;
 
    requestSomeDecimalVal: number;
 
    requestSomeUTCDateTimeVal: string;
 
    requestSomeDateVal: string;
 
    requestSomeMoneyVal: number;
 
    requestSomeNVarCharVal: string;
 
    requestSomeVarCharVal: string;
 
    requestSomeLongVarCharVal: string;
 
    requestSomeLongNVarCharVal: string;
 
    requestSomeTextVal: string;
 
    requestSomePhoneNumber: string;
 
    requestSomeEmailAddress: string;
 
    someImageUrlVal: string;
 
    landName: string;
 
    tacCode: string;

    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.requestFlavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.requestOtherFlavor = '';
 
        this.requestSomeIntVal = 0;
 
        this.requestSomeBigIntVal = 0;
 
        this.requestSomeBitVal = false;
 
        this.requestIsDeleteAllowed = false;
 
        this.requestIsEditAllowed = false;
 
        this.requestSomeFloatVal = 0;
 
        this.requestSomeDecimalVal = 0;
 
        this.requestSomeUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.requestSomeDateVal = '1753-01-01T00:00:00Z';
 
        this.requestSomeMoneyVal = 0.0;
 
        this.requestSomeNVarCharVal = '';
 
        this.requestSomeVarCharVal = '';
 
        this.requestSomeLongVarCharVal = '';
 
        this.requestSomeLongNVarCharVal = '';
 
        this.requestSomeTextVal = '';
 
        this.requestSomePhoneNumber = '';
 
        this.requestSomeEmailAddress = '';
 
        this.someImageUrlVal = '';

        this.landName = '';
 
        this.tacCode = '';

        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}



export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() { 
        this.property = '';
        this.message = ''; 
    }
}
