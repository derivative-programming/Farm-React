import * as Yup from "yup"; 

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        .required('Please enter a Email')
        ,
        password: Yup.string()
        .required('Please enter a Password')
        , 
        confirmPassword: Yup.string()
        .required('Please enter a Confirm Password')
        , 
        firstName: Yup.string()
        .required('Please enter a First Name')
        , 
        lastName: Yup.string()
        .required('Please enter a Last Name')
        , 
      });
      
    return validationSchema;
}
 