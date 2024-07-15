/* eslint-disable @typescript-eslint/no-empty-interface */


export interface InitRequest {
    
}

export interface ResponseFull {
    data: InitResult;
}

export interface InitResult {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    landCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}
 

export class InitResultInstance implements InitResult {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    landCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.otherFlavor = '';
 
        this.someIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.someDateVal = '1753-01-01T00:00:00Z';
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
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


 