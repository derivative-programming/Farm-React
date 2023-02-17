import React, { FC, ReactElement, useContext, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
    useField,
} from "formik";
import * as FormService from "../services/TacLogin"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {InputEmail} from "../../InputFields/InputEmail" 
import {InputPassword} from "../../InputFields/InputPassword" 
import {ErrorDisplay } from '../../InputFields/ErrorDisplay';
   
export interface FormProps {
    name?:string
  }

const FormConnectedTacLogin: FC<FormProps> = ({
    name="formConnectedTacLogin", 
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
      });

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = [];

    const handleInit = async() => {
        const responseFull: any = await FormService.initForm(tacCode); 
        const response: FormService.InitResult = responseFull.data; 

        initialValues.email = response.email;
        initialValues.password = response.password;
        
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

    const registerButtonClick = (() => {
        navigate("/tac-register");
    });
    
    useEffect(() => {
        handleInit();
    }); 
    

    return ( 
        <div className="auth-container" data-testid="formConnectedTacLogin">
            <Card>
                <h1>Login</h1>
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
                            <div className="d-flex btn-container">
                                <Button type="submit" data-testid="submit">
                                    Login
                                </Button>
                                <Button
                                    onClick={() => {
                                        registerButtonClick(); 
                                    }}
                                    variant="secondary" 
                                    data-testid="registration-btn"
                                >
                                    Register
                                </Button>
                            </div>
                        </Form>  
                    )}
                </Formik>
            </Card>
        </div> 
    );
};
  
export default FormConnectedTacLogin;
