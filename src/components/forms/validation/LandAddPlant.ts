import * as Yup from "yup"; 
    
   
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
        requestSomeLongVarCharVal: Yup.string()
        ,
        requestSomeLongNVarCharVal: Yup.string()
        ,
        requestSomeTextVal: Yup.string()
        ,
        requestSomePhoneNumber: Yup.string()
        ,
        requestSomeEmailAddress: Yup.string()
        , 
        requestSampleImageUploadFile: Yup.string()
        , 
        someImageUrlVal: Yup.string()
        , 
      });

    return validationSchema;
}

 




 