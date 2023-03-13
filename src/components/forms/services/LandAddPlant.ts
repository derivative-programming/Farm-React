import * as Yup from "yup";
import * as FormInit  from "./LandAddPlantInitObjWF"; 
  import { apiCall } from "../../../apiConfig/apiCall";
   
  
  export const initForm = (landCode:string) => { 
    const data ={}; 
    return apiCall({
      url: "/land-add-plant/" + landCode,
      method: "put" ,
      data
    });
  }; 
    
  export const submitForm = (data:SubmitRequest, landCode:string) => { 
    return apiCall({
      url:  "/land-add-plant/" + landCode,
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
//vrdebug

export const buildSubmitRequest = (initResult:FormInit.InitResult) => {
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
    result.sampleImageUploadFile = '';
    
    return result;
}

export const buildValidationSchema = () => {
    const validationSchema  = Yup.object().shape({
        flavorCode: Yup.string()
        ,
        otherFlavor: Yup.string()
        ,
        someIntVal: Yup.number().required()
        ,
        someBigIntVal: Yup.number().required()
        ,
        someBitVal: Yup.boolean().required()
        ,
        isEditAllowed: Yup.boolean().required()
        ,
        isDeleteAllowed: Yup.boolean().required()
        ,
        someFloatVal: Yup.number().required()
        ,
        someDecimalVal: Yup.number().required()
        ,
        someUTCDateTimeVal: Yup.mixed()
        ,
        someDateVal: Yup.mixed()
        ,
        someMoneyVal: Yup.number().required()
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
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    sampleImageUploadFile: string;
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
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    sampleImageUploadFile: string;
    

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
 
        this.sampleImageUploadFile = '';
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






 