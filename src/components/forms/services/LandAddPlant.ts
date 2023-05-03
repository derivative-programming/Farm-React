import * as Yup from "yup";
import * as FormInit  from "./init/LandAddPlantInitObjWF"; 
  import { apiCall } from "../../../apiConfig/apiCall";
    
  
  export const initForm = (landCode:string) => { 
    const data ={}; 
    return apiCall({
      url: "/land-add-plant/" + landCode + '/init',
      method: "get" ,
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
    
    result.requestFlavorCode = initResult.requestFlavorCode;
    result.requestOtherFlavor = initResult.requestOtherFlavor;
    result.requestSomeIntVal = initResult.requestSomeIntVal;
    result.requestSomeBigIntVal = initResult.requestSomeBigIntVal;
    result.requestSomeBitVal = initResult.requestSomeBitVal;
    result.requestIsEditAllowed = initResult.requestIsEditAllowed;
    result.requestIsDeleteAllowed = initResult.requestIsDeleteAllowed;
    result.requestSomeFloatVal = initResult.requestSomeFloatVal;
    result.requestSomeDecimalVal = initResult.requestSomeDecimalVal;
    result.requestSomeUTCDateTimeVal = initResult.requestSomeUTCDateTimeVal;
    result.requestSomeDateVal = initResult.requestSomeDateVal;
    result.requestSomeMoneyVal = initResult.requestSomeMoneyVal;
    result.requestSomeNVarCharVal = initResult.requestSomeNVarCharVal;
    result.requestSomeVarCharVal = initResult.requestSomeVarCharVal;
    result.requestSomeTextVal = initResult.requestSomeTextVal;
    result.requestSomePhoneNumber = initResult.requestSomePhoneNumber;
    result.requestSomeEmailAddress = initResult.requestSomeEmailAddress;  
    result.requestSampleImageUploadFile = '';
     
    return result;
}

export const buildValidationSchema = () => {
    const validationSchema  = Yup.object().shape({
        requestFlavorCode: Yup.string()
        ,
        requestOtherFlavor: Yup.string()
        ,
        requestSomeIntVal: Yup.number().required('Please enter a Some Int Val')
        ,
        requestSomeBigIntVal: Yup.number().required('Please enter a Some Big Int Val')
        ,
        requestSomeBitVal: Yup.boolean().required('Please enter a Some Bit Val')
        ,
        requestIsEditAllowed: Yup.boolean().required('Please enter a Is Edit Allowed')
        ,
        requestIsDeleteAllowed: Yup.boolean().required('Please enter a Is Delete Allowed')
        ,
        requestSomeFloatVal: Yup.number().required('Please enter a Some Float Val')
        ,
        requestSomeDecimalVal: Yup.number().required('Please enter a Some Decimal Val')
        ,
        requestSomeUTCDateTimeVal: Yup.mixed()
        ,
        requestSomeDateVal: Yup.mixed()
        ,
        requestSomeMoneyVal: Yup.number().required('Please enter a Some Money Val')
        ,
        requestSomeNVarCharVal: Yup.string()
        ,
        requestSomeVarCharVal: Yup.string()
        ,
        requestSomeTextVal: Yup.string()
        ,
        requestSomePhoneNumber: Yup.string()
        ,
        requestSomeEmailAddress: Yup.string()
        , 
        requestSampleImageUploadFile: Yup.string()
        , 
      });

    return validationSchema;
}



export interface SubmitRequest {
 
    requestFlavorCode: string;
 
    requestOtherFlavor: string;
 
    requestSomeIntVal: number;
 
    requestSomeBigIntVal: number;
 
    requestSomeBitVal: boolean;
 
    requestIsEditAllowed: boolean;
 
    requestIsDeleteAllowed: boolean;
 
    requestSomeFloatVal: number;
 
    requestSomeDecimalVal: number;
 
    requestSomeUTCDateTimeVal: string;
 
    requestSomeDateVal: string;
 
    requestSomeMoneyVal: number;
 
    requestSomeNVarCharVal: string;
 
    requestSomeVarCharVal: string;
 
    requestSomeTextVal: string;
 
    requestSomePhoneNumber: string;
 
    requestSomeEmailAddress: string;
 
    requestSampleImageUploadFile: string;
}

export interface SubmitResult {
    
    outputFlavorCode: string;
 
    plantCode: string; 
    
    landCode: string;
 
    outputOtherFlavor: string;
 
    outputSomeIntVal: number;
 
    outputSomeBigIntVal: number;
 
    outputSomeBitVal: boolean;
 
    outputIsDeleteAllowed: boolean;
 
    outputIsEditAllowed: boolean;
 
    outputSomeFloatVal: number;
 
    outputSomeDecimalVal: number;
 
    outputSomeUTCDateTimeVal: string;
 
    outputSomeDateVal: string;
 
    outputSomeMoneyVal: number;
 
    outputSomeNVarCharVal: string;
 
    outputSomeVarCharVal: string;
 
    outputSomeTextVal: string;
 
    outputSomePhoneNumber: string;
 
    outputSomeEmailAddress: string;

    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}


export class SubmitRequestInstance implements SubmitRequest {
 
    requestFlavorCode: string;
 
    requestOtherFlavor: string;
 
    requestSomeIntVal: number;
 
    requestSomeBigIntVal: number;
 
    requestSomeBitVal: boolean;
 
    requestIsEditAllowed: boolean;
 
    requestIsDeleteAllowed: boolean;
 
    requestSomeFloatVal: number;
 
    requestSomeDecimalVal: number;
 
    requestSomeUTCDateTimeVal: string;
 
    requestSomeDateVal: string;
 
    requestSomeMoneyVal: number;
 
    requestSomeNVarCharVal: string;
 
    requestSomeVarCharVal: string;
 
    requestSomeTextVal: string;
 
    requestSomePhoneNumber: string;
 
    requestSomeEmailAddress: string;
 
    requestSampleImageUploadFile: string;
    

    constructor() {
 
        this.requestFlavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.requestOtherFlavor = '';
 
        this.requestSomeIntVal = 0;
 
        this.requestSomeBigIntVal = 0;
 
        this.requestSomeBitVal = false;
 
        this.requestIsEditAllowed = false;
 
        this.requestIsDeleteAllowed = false;
 
        this.requestSomeFloatVal = 0;
 
        this.requestSomeDecimalVal = 0;
 
        this.requestSomeUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.requestSomeDateVal = '1753-01-01T00:00:00Z';
 
        this.requestSomeMoneyVal = 0.0;
 
        this.requestSomeNVarCharVal = '';
 
        this.requestSomeVarCharVal = '';
 
        this.requestSomeTextVal = '';
 
        this.requestSomePhoneNumber = '';
 
        this.requestSomeEmailAddress = '';
 
        this.requestSampleImageUploadFile = '';
    } 

}




export class SubmitResultInstance implements SubmitResult {
 
    
    outputFlavorCode: string;

    plantCode: string;
    
    landCode: string;
 
    outputOtherFlavor: string;
 
    outputSomeIntVal: number;
 
    outputSomeBigIntVal: number;
 
    outputSomeBitVal: boolean;
 
    outputIsDeleteAllowed: boolean;
 
    outputIsEditAllowed: boolean;
 
    outputSomeFloatVal: number;
 
    outputSomeDecimalVal: number;
 
    outputSomeUTCDateTimeVal: string;
 
    outputSomeDateVal: string;
 
    outputSomeMoneyVal: number;
 
    outputSomeNVarCharVal: string;
 
    outputSomeVarCharVal: string;
 
    outputSomeTextVal: string;
 
    outputSomePhoneNumber: string;
 
    outputSomeEmailAddress: string;

    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {

        this.outputFlavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.plantCode = '00000000-0000-0000-0000-000000000000';
        
        this.landCode = '00000000-0000-0000-0000-000000000000';
 
        this.outputOtherFlavor = '';
 
        this.outputSomeIntVal = 0;
 
        this.outputSomeBigIntVal = 0;
 
        this.outputSomeBitVal = false;
 
        this.outputIsDeleteAllowed = false;
 
        this.outputIsEditAllowed = false;
 
        this.outputSomeFloatVal = 0;
 
        this.outputSomeDecimalVal = 0;
 
        this.outputSomeUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.outputSomeDateVal = '1753-01-01T00:00:00Z';
 
        this.outputSomeMoneyVal = 0.0;
 
        this.outputSomeNVarCharVal = '';
 
        this.outputSomeVarCharVal = '';
 
        this.outputSomeTextVal = '';
 
        this.outputSomePhoneNumber = '';
 
        this.outputSomeEmailAddress = '';
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






 