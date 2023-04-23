import * as Yup from "yup"; 
import * as FormInit  from "./init/PlantEditInitObjWF"; 
import { apiCall } from "../../../apiConfig/apiCall";
   
   
  export const initForm = (plantCode:string) => {
    const data ={};
    return apiCall({
      url: "/plant-edit/" + plantCode + '/init',
      method: "get",
      data
    });
  };

  export const submitForm = (data:SubmitRequest, plantCode:string) => {
    return apiCall({
      url: "/plant-edit/" + plantCode,
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
                if(validationError.property.toLowerCase() === propertyName.toLowerCase()){
                    result.push(validationError.message);
                }
            }
        );  
    }
    return result;
}

export const buildSubmitRequest = (initResult:FormInit.InitResult) => {
    let result:SubmitRequest = new SubmitRequestInstance();
    
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
        someIntVal: Yup.number().required('Please enter a Some Int Val')
        ,
        someBigIntVal: Yup.number().required('Please enter a Some Big Int Val')
        ,
        someBitVal: Yup.boolean().required('Please enter a Some Bit Val')
        ,
        isEditAllowed: Yup.boolean().required('Please enter a Is Edit Allowed')
        ,
        isDeleteAllowed: Yup.boolean().required('Please enter a Is Delete Allowed')
        ,
        someFloatVal: Yup.number().required('Please enter a Some Float Val')
        ,
        someDecimalVal: Yup.number().required('Please enter a Some Decimal Val')
        ,
        someUTCDateTimeVal: Yup.mixed()
        ,
        someDateVal: Yup.mixed()
        ,
        someMoneyVal: Yup.number().required('Please enter a Some Money Val')
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
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
}

export interface SubmitResult {
 
    landCode: string;
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
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
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
 
        this.someUTCDateTimeVal = '01-01-1753 00:00:00'
 
        this.someDateVal = '01-01-1753 00:00:00';
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
    }
}


export class SubmitResultInstance implements SubmitResult {
 
    landCode: string;
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
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



