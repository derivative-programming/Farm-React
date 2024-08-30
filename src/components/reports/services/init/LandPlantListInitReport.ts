/* eslint-disable @typescript-eslint/no-empty-interface */
 

export interface InitRequest {
    
}

export interface ResponseFull {
    data: InitResult;
}

export interface InitResult {
 
    someFilterIntVal: number;
 
    someFilterBigIntVal: number;
 
    someFilterBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFilterFloatVal: number;
 
    someFilterDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someFilterMoneyVal: number;
 
    someFilterNVarCharVal: string;
 
    someFilterVarCharVal: string;
 
    someFilterTextVal: string;
 
    someFilterPhoneNumber: string;
 
    someFilterEmailAddress: string;
 
    landName: string;
 
    flavorCode: string;
 
    landCode: string;
 
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
 
    someFilterIntVal: number;
 
    someFilterBigIntVal: number;
 
    someFilterBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFilterFloatVal: number;
 
    someFilterDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someFilterMoneyVal: number;
 
    someFilterNVarCharVal: string;
 
    someFilterVarCharVal: string;
 
    someFilterTextVal: string;
 
    someFilterPhoneNumber: string;
 
    someFilterEmailAddress: string;
 
    landName: string;
 
    flavorCode: string;
 
    landCode: string;
 
    tacCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.someFilterIntVal = 0;
 
        this.someFilterBigIntVal = 0;
 
        this.someFilterBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFilterFloatVal = 0;
 
        this.someFilterDecimalVal = 0;
 
        this.someMinUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.someMinDateVal = '1753-01-01T00:00:00Z';
 
        this.someFilterMoneyVal = 0.0;
 
        this.someFilterNVarCharVal = '';
 
        this.someFilterVarCharVal = '';
 
        this.someFilterTextVal = '';
 
        this.someFilterPhoneNumber = '';
 
        this.someFilterEmailAddress = '';
 
        this.landName = '';
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
 
        this.tacCode = '00000000-0000-0000-0000-000000000000';
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


 

  