import React, { FC, ReactElement, useContext } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../../App.scss";
import { useNavigate } from "react-router-dom";
import {
    Formik,
    Form as FormikForm,
    FormikHelpers,
    Field,
    FieldProps, 
    ErrorMessage,
} from "formik";
import * as TacLoginService from "../../../../components/forms/services/TacLogin";
import { AuthContext } from "../../../../context/authContext";
   
const TacLogin: FC = (): ReactElement => {
    const navigate = useNavigate();
    const initialValues: TacLoginService.SubmitRequest = new TacLoginService.SubmitRequestInstance ;
    const authContext = useContext(AuthContext);
    let headerError:string = '';

    const submit = async (values: TacLoginService.SubmitRequest) => { 
        return await TacLoginService.submitForm(values);
    };

    return ( 
            <div className="auth-container" data-testid="tacLogin">
                <Card>
                    <h1>Login</h1>
                    <h6>Please enter your email and password.</h6>

                    <Formik
                        initialValues={initialValues}
                        validate={(values) => {
                            let errors: any = {}; 
                            return errors;
                        }}
                        onSubmit={async (
                            values: TacLoginService.SubmitRequest,
                            { setSubmitting, resetForm, setErrors }: FormikHelpers<TacLoginService.SubmitRequest>
                        ) => {
                            console.log(">>>>", values);
                            try { 
                                const responseFull: any = await submit(values);
                                console.log(responseFull, "response");
                                const response: TacLoginService.SubmitResult = responseFull.data;
                                if (
                                    response &&
                                    response.validationErrors &&
                                    response.validationErrors.length
                                ) {
                                    let error: any = {}; //: RegisterFormError = {}
                                    headerError = '';
                                    response.validationErrors.forEach(
                                        (validationError: TacLoginService.SubmitValidationError) => {
                                            if(validationError.property == ''){
                                                headerError = validationError.message;
                                            } else{
                                            error[validationError.property.toLowerCase()] =
                                                validationError.message;
                                            }
                                        }
                                    );
                                    setErrors(error);

                                    return;
                                }
                                console.log(">>>>", response.apiKey, authContext);
                                authContext.setToken(response.apiKey);
                                localStorage.setItem("@token", response.apiKey);
                                setSubmitting(false);
                                resetForm();  
                            } catch (error) {
                                setSubmitting(false);
                            }
                        }}
                        render={({
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            values,
                            errors,
                            validateForm,
                        }) => (
                            <FormikForm>
                                {headerError.length > 0 ? (
                                    <div className="custom-form-control">
                                        <div className="error-message">{headerError}</div>
                                    </div>
                                ) : null}
                                <div className="custom-form-control">
                                    <Field
                                        name="email"
                                        render={({ field }: FieldProps) => (
                                            <Form.Group controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    data-testid="email-input"
                                                    autoFocus
                                                    type="email"
                                                    name="email"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </Form.Group>
                                        )}
                                    />
                                    {errors.email ? (
                                        <div className="error-message">{errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="custom-form-control">
                                    <Field
                                        name="password"
                                        render={({ field }: FieldProps) => (
                                            <Form.Group controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    data-testid="password-input"
                                                    type="password"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </Form.Group>
                                        )}
                                    />

                                    {errors.password ? (
                                        <div className="error-message">{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="d-flex btn-container">
                                    <Button type="submit" data-testid="login-btn">
                                        Login
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            navigate("/tac-register");
                                        }}
                                        variant="secondary"
                                        type="submit"
                                        data-testid="registration-btn"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </FormikForm>
                        )}
                    />
                </Card>
            </div> 
    );
};
export default TacLogin;
