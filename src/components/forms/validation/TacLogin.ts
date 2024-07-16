import * as Yup from "yup";

export const buildValidationSchema = () => {
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        ,
        password: Yup.string()
        ,
      });

    return validationSchema;
}

