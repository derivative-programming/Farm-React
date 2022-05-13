import React, { FC, ReactElement, useContext } from "react";
import { Button, Form, Card } from "react-bootstrap";
import LayoutComponent from "../../components/Layout/Layout";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import {
    Formik,
    Form as FormikForm,
    FormikHelpers,
    Field,
    FieldProps,
    ErrorMessage,
} from "formik";
import { login } from "../../services/auth";
import { AuthContext } from "../../context/authContext";

interface LoginValue {
    email: string;
    password: string;
}

interface LoginValueError {
    email?: string;
    password?: string;
}

const Login: FC = (): ReactElement => {
    const navigate = useNavigate();
    const initialValues: LoginValue = { email: "", password: "" };
    const authContext = useContext(AuthContext);

    const loginUser = async (values: LoginValue) => {
        let data: LoginValue = {
            email: values.email,
            password: values.password,
        };

        return await login(data);
    };

    return (
        <LayoutComponent>
            <div className="auth-container" style={{ height: 'calc(100vh - 120px)' }} data-testid="login">
                <Card>
                    <h1>Login</h1>
                    <h6>Please enter your email and password.</h6>

                    <Formik
                        initialValues={initialValues}
                        validate={(values) => {
                            let errors: LoginValueError = {};
                            if (!values.password) {
                                errors.password = "Password must not be empty";
                            }
                            // if(!passwordRegX.test(values.password)){
                            //     errors.passwordError = "Password and Confirm password does not match"
                            // }
                            if (!values.email) {
                                errors.email = "Email name required";
                            }

                            return errors;
                        }}
                        onSubmit={async (
                            values: LoginValue,
                            { setSubmitting, resetForm, setErrors }: FormikHelpers<LoginValue>
                        ) => {
                            console.log(">>>>", values);
                            try {
                                if (values.email && values.password) {
                                    const response = await loginUser(values);
                                    console.log(response, "response");
                                    if (
                                        response &&
                                        response.data.validationErrors &&
                                        response.data.validationErrors.length
                                    ) {
                                        let error: any = {}; //: RegisterFormError = {}
                                        response.data.validationErrors.forEach(
                                            (validationError: any) => {
                                                error[validationError["property"].toLowerCase()] =
                                                    validationError.message;
                                            }
                                        );
                                        setErrors(error);

                                        return;
                                    }
                                    console.log(">>>>", response.data.farmApiKey, authContext);
                                    authContext.setToken(response.data.farmApiKey);
                                    localStorage.setItem("@token", response.data.farmApiKey);
                                    setSubmitting(false);
                                    resetForm();
                                }
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
                                            navigate("/register");
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
        </LayoutComponent>
    );
};
export default Login;
