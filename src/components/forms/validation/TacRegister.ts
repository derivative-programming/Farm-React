import * as Yup from "yup";

export const buildValidationSchema = () => {
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        ,
        password: Yup.string()
        ,
        confirmPassword: Yup.string()
        ,
        firstName: Yup.string()
        ,
        lastName: Yup.string()
        ,
      });

    return validationSchema;
}

