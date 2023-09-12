import * as Yup from "yup"; 

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        .required('Please enter a Email')
        ,
        password: Yup.string()
        .required('Please enter a Password')
        , 
      });
      
    return validationSchema;
}
 