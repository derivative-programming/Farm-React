import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as ReportInput from "../input-fields";

import * as FormService from "../services/TacLogin";
import { AuthContext } from "../../../context/authContext";
import * as FormInput from "../input-fields";
import { ReportInputButton } from "../../reports/input-fields/InputButton";


export interface FormProps {
  name?: string;
}

export const FormConnectedTacLogin: FC<FormProps> = ({
  name = "formConnectedTacLogin",
}): ReactElement => {
  const [initialValues, setInitialValues] = useState(
    new FormService.SubmitRequestInstance()
  );
  const [loading, setLoading] = useState(false);
  let lastApiSubmission: any = {
    request: new FormService.SubmitResultInstance(),
    response: new FormService.SubmitRequestInstance(),
  };
  const isInitializedRef = useRef(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  const validationSchema = FormService.buildValidationSchema();

  const authContext = useContext(AuthContext);

  let headerErrors: string[] = [];

  const handleInit = (responseFull: any) => {
    const initFormResponse: FormService.InitResult = responseFull.data;

    if (!initFormResponse.success) {
      return;
    }

    setInitialValues({ ...FormService.buildSubmitRequest(initFormResponse) });
  };

  const handleValidate = async (values: FormService.SubmitRequest) => {
    let errors: any = {};
    if (!lastApiSubmission.response.success) {
      headerErrors = FormService.getValidationErrors(
        "",
        lastApiSubmission.response
      );
      Object.entries(values).forEach(([key, value]) => {
        const fieldErrors: string = FormService.getValidationErrors(
          key,
          lastApiSubmission.response
        ).join(",");
        if (fieldErrors.length > 0 && value == lastApiSubmission.request[key]) {
          errors[key] = fieldErrors;
        }
      });
    }
    return errors;
  };

  const submitButtonClick = async (
    values: FormService.SubmitRequest,
    actions: FormikHelpers<FormService.SubmitRequest>
  ) => {
    try {
      setLoading(true);
      const responseFull: any = await FormService.submitForm(values);
      const response: FormService.SubmitResult = responseFull.data;
      lastApiSubmission = {
        request: { ...values },
        response: { ...response },
      };
      if (!response.success) {
        headerErrors = FormService.getValidationErrors("", response);
        Object.entries(new FormService.SubmitRequestInstance()).forEach(
          ([key, value]) =>
            actions.setFieldError(
              key,
              FormService.getValidationErrors(key, response).join(",")
            )
        );
        return;
      }
      authContext.setToken(response.apiKey);
      localStorage.setItem("@token", response.apiKey);
      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);
    }
    finally {
      setLoading(false);
    }
  };

  const registerButtonClick = () => {
    navigate("/tac-register");
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    FormService.initForm(contextCode).then((response) => handleInit(response));
  }, []);

  return (
    <div 
      className=" p-0 d-flex flex-column align-items-center justify-content-center"
    
      data-testid="formConnectedTacLogin"
    >
      <Card
        className=" overflow-y-auto border-0 rounded mt-1 page-card"
       
      >
        <h2>Login</h2>
        <h6>Please enter your email and password.</h6>

        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          validate={handleValidate}
          onSubmit={async (values, actions) => {
            await submitButtonClick(values, actions);
          }}
        >
          {(props) => (
            <Form
              className="m-0  w-100"
              name={name}
              data-testid={name}
              onReset={props.handleReset}
              onSubmit={props.handleSubmit}
            >
              <FormInput.ErrorDisplay
                name="headerErrors"
                errorArray={headerErrors}
              />
              <FormInput.FormInputEmail
                name="email"
                label="Email"
                autoFocus={true}
              />
              <FormInput.FormInputPassword name="password" label="Password" />
              <div
               
                className="d-flex  justify-content-between mt-3 p-0"
              >
                <Button
                  type="submit"
                  data-testid="submit-button" 
                  >
                  {
                    loading &&
                    (<Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="spinner-button"
                    />)
                  }
                  <span className="sr-only">Login</span>

                </Button>
                <Button
                  onClick={() => {
                    registerButtonClick();
                  }}
                  variant="secondary"
                  data-testid="cancel-button"
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
