import * as Yup from "yup";

import { 
    LAND_ADD_PLANT, 
  } from "../../../apiConfig/apiEndpoints";
  import { apiCall } from "../../../apiConfig/apiCall";
   
  
  export const initForm = (landCode:string) => { 
    const data ={};
    return apiCall({
      url: LAND_ADD_PLANT + "/" + landCode,
      method: "put" ,
      data
    });
  }; 
    
  export const submitForm = (data:SubmitRequest, landCode:string) => {
    return apiCall({
      url: LAND_ADD_PLANT + "/" + landCode,
      method: "post",
      data,
    });
  };
  
  export const getValidationErrors =  (propertyName: string, response:SubmitResult) => {
    let result: string[] = [];
    if (
        response &&
        response.validationErrors &&
        response.validationErrors.length
    ) { 
        response.validationErrors.forEach(
            (validationError: SubmitValidationError) => {
                if(validationError.property.toLowerCase() == propertyName.toLowerCase()){
                    result.push(validationError.message);
                }
            }
        );  
    }
    return result;
}

export const buildSubmitRequest = (initResult:InitResult) => {
    let result:SubmitRequest = new SubmitRequestInstance;
    
    result.flavorCode = initResult.flavorCode;
    result.otherFlavor = initResult.otherFlavor;
    result.someIntVal = initResult.someIntVal;
    result.someBigIntVal = initResult.someBigIntVal;
    result.someBitVal = initResult.someBitVal;
    result.isEditAllowed = initResult.isEditAllowed;
    result.isDeleteAllowed = initResult.isDeleteAllowed;
    result.someFloatVal = initResult.someFloatVal;
    result.someDecimalVal = initResult.someDecimalVal;
    result.someUTCDateTimeVal = initResult.someUTCDateTimeVal;
    result.someDateVal = initResult.someDateVal;
    result.someMoneyVal = initResult.someMoneyVal;
    result.someNVarCharVal = initResult.someNVarCharVal;
    result.someVarCharVal = initResult.someVarCharVal;
    result.someTextVal = initResult.someTextVal;
    result.somePhoneNumber = initResult.somePhoneNumber;
    result.someEmailAddress = initResult.someEmailAddress;  
    
    return result;
}

export const buildValidationSchema = () => {
    const validationSchema  = Yup.object().shape({
        flavorCode: Yup.string()
        ,
        someIntVal: Yup.number()
        ,
        someBigIntVal: Yup.number()
        ,
        someBitVal: Yup.boolean()
        ,
        isEditAllowed: Yup.boolean()
        ,
        isDeleteAllowed: Yup.boolean()
        ,
        someFloatVal: Yup.number()
        ,
        someDecimalVal: Yup.number()
        ,
        someUTCDateTimeVal: Yup.mixed()
        ,
        someDateVal: Yup.mixed()
        ,
        someMoneyVal: Yup.number()
        ,
        someNVarCharVal: Yup.string()
        ,
        someVarCharVal: Yup.string()
        ,
        someTextVal: Yup.string()
        ,
        somePhoneNumber: Yup.string()
        ,
        someEmailAddress: Yup.string()
        , 
        sampleImageUploadFile: Yup.string()
        , 
      });

    return validationSchema;
}



export interface SubmitRequest {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: Date;
 
    someDateVal: Date;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
}

export interface SubmitResult {
 
    plantCode: string;
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}


export class SubmitRequestInstance implements SubmitRequest {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: Date;
 
    someDateVal: Date;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;

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
 
        this.someUTCDateTimeVal = new Date('01-01-1753 00:00:00 UTC')
 
        this.someDateVal = new Date('01-01-1753 00:00:00 UTC');
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
    } 

}




export class SubmitResultInstance implements SubmitResult {
 
    plantCode: string;
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {
 
        this.plantCode = '00000000-0000-0000-0000-000000000000';
        this.success = false;
        this.message = '';
        this.validationErrors = [];
    }
}



export class SubmitValidationErrorInstance implements SubmitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}





export interface InitRequest {
    
}

export interface InitResult {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isDeleteAllowed: boolean;
 
    isEditAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: Date;
 
    someDateVal: Date;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
 
    flavorCode: string;
 
    otherFlavor: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isDeleteAllowed: boolean;
 
    isEditAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: Date;
 
    someDateVal: Date;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.otherFlavor = '';
 
        this.someIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.isDeleteAllowed = false;
 
        this.isEditAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someUTCDateTimeVal = new Date('01-01-1753 00:00:00 UTC')
 
        this.someDateVal = new Date('01-01-1753 00:00:00 UTC');
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
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


 