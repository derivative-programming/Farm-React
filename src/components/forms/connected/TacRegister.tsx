import React, { FC, ReactElement, useContext, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
    useField,
} from "formik";
import * as FormService from "../services/TacRegister"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {InputEmail} from "../../InputFields/InputEmail" 
import {InputPassword} from "../../InputFields/InputPassword" 
import {InputText} from "../../InputFields/InputText" 
import {ErrorDisplay } from '../../InputFields/ErrorDisplay';
   
export interface FormProps {
    name?:string
  }

const FormConnectedTacRegister: FC<FormProps> = ({
    name="formConnectedTacRegister", 
  }): ReactElement => { 

    const navigate = useNavigate();
    const { Id } = useParams();
    const tacCode:string = Id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}

    const initialValues: FormService.SubmitRequest = new FormService.SubmitRequestInstance ;
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

    const handleInit = async() => {
        const responseFull: any = await FormService.initForm(); 
        const response: FormService.InitResult = responseFull.data; 

        initialValues.email = response.email;
        initialValues.password = response.password;
        initialValues.confirmPassword = response.confirmPassword;
        initialValues.firstName = response.firstName;
        initialValues.lastName = response.lastName;
        
        navCodesAvailable.tacCode = tacCode;
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
                Object.entries(FormService.SubmitRequestInstance)
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
        handleInit();
    }); 
    

    return ( 
        <div className="auth-container" data-testid="formConnectedTacRegister">
            <Card>
                <h1>Register</h1>
                <h6>Please enter your email and password.</h6>

                <Formik
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
                            <InputEmail name="email" label="Email" autoFocus={true} />
                            <InputPassword name="password" label="Password" /> 
                            <InputPassword name="confirmPassword" label="Confirm Password" /> 
                            <InputText name="firstName" label="First Name" /> 
                            <InputText name="lastName" label="Last Name" /> 
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
