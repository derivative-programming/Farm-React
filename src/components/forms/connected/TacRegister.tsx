import React, { FC, ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as FormService from "../services/TacRegister"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {FormInputEmail} from "../InputFields/InputEmail" 
import {FormInputPassword} from "../InputFields/InputPassword" 
import {FormInputText} from "../InputFields/InputText" 
import {ErrorDisplay } from '../InputFields/ErrorDisplay';
   
export interface FormProps {
    name?:string
  }

const FormConnectedTacRegister: FC<FormProps> = ({
    name="formConnectedTacRegister", 
  }): ReactElement => { 

    const [initialValues, setInitialValues] = useState(new FormService.SubmitRequestInstance);   
    const isInitializedRef = useRef(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const tacCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.tacCode = tacCode;
 
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        .required()
        ,
        password: Yup.string()
        .required()
        , 
        confirmPassword: Yup.string()
        .required()
        , 
        firstName: Yup.string()
        .required()
        , 
        lastName: Yup.string()
        .required()
        , 
      });

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = [];

    const handleInit = (responseFull:any) => {
        
        const initFormResponse: FormService.InitResult = responseFull.data; 

        if(!initFormResponse.success)
        {
            return;
        } 

        initialValues.email = initFormResponse.email;
        initialValues.password = initFormResponse.password;
        initialValues.confirmPassword = initFormResponse.confirmPassword;
        initialValues.firstName = initFormResponse.firstName;
        initialValues.lastName = initFormResponse.lastName;
        
        setInitialValues({...initialValues}); 
    }

    const submitButtonClick = async (
        values: FormService.SubmitRequest,
        actions: FormikHelpers<FormService.SubmitRequest>
    ) => { 
        try { 
            const responseFull: any = await FormService.submitForm(values);
            const response: FormService.SubmitResult = responseFull.data; 
            if (!response.success) {  
                headerErrors = FormService.getValidationErrors("",response); 
                Object.entries(new FormService.SubmitRequestInstance)
                    .forEach(([key, value]) => 
                    actions.setFieldError(key, FormService.getValidationErrors(key,response).join(','))) 
                return;
            }
            authContext.setToken(response.apiKey);
            localStorage.setItem("@token", response.apiKey);
            actions.setSubmitting(false);
            actions.resetForm();  
        } catch (error) {
            actions.setSubmitting(false);
        }
    }; 

    const backToLoginButtonClick = (() => {
        navigate("/tac-login");
    });
    
    useEffect(() => {
        if(isInitializedRef.current){
            return;
        }
        isInitializedRef.current = true;
        FormService.initForm()
        .then(response => handleInit(response));
    }); 
    

    return ( 
        <div className="auth-container" data-testid="formConnectedTacRegister">
            <Card>
                <h1>Register</h1>
                <h6>Please enter your email and password.</h6>

                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values,actions) => {await submitButtonClick(values, actions)}}>
                    {(props) => (
                        <Form 
                            name={name} 
                            data-testid={name}
                            onReset={props.handleReset} 
                            onSubmit={props.handleSubmit}> 
                            <ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <FormInputEmail name="email" label="Email" autoFocus={true} />
                            <FormInputPassword name="password" label="Password" /> 
                            <FormInputPassword name="confirmPassword" label="Confirm Password" /> 
                            <FormInputText name="firstName" label="First Name" /> 
                            <FormInputText name="lastName" label="Last Name" /> 
                            <div className="d-flex btn-container">
                                <Button type="submit" data-testid="submit">
                                    Register
                                </Button>
                                <Button
                                    onClick={() => {backToLoginButtonClick();}}
                                    variant="secondary"
                                    data-testid="backToLogin"
                                >
                                    Back To Login
                                </Button>
                            </div>
                        </Form>  
                    )}
                </Formik>
            </Card>
        </div> 
    );
};
  
export default FormConnectedTacRegister;
