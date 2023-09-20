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

import * as FormService from "../services/TacLogin";
import * as FormValidation from "../validation/TacLogin";
import * as InitFormService from "../services/init/TacLoginInitObjWF";
import { AuthContext } from "../../../context/authContext";
import * as FormInput from "../input-fields"; 
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 
import * as AnalyticsService from "../../services/analyticsService";


export interface FormProps {
  name?: string;
  showProcessingAnimationOnInit?: boolean;
}

export const FormConnectedTacLogin: FC<FormProps> = ({
  name = "formConnectedTacLogin",
  showProcessingAnimationOnInit = true,
}): ReactElement => {
  const [initialValues, setInitialValues] = useState(
    new FormService.SubmitRequestInstance()
  );
  const [loading, setLoading] = useState(false);
  const [initForm, setInitForm] = useState(showProcessingAnimationOnInit);
  const initHeaderErrors: string[] = [];
  const [headerErrors, setHeaderErrors] = useState(initHeaderErrors);
  let lastApiSubmission: any = {
    request: new FormService.SubmitResultInstance(),
    response: new FormService.SubmitRequestInstance(),
  };
  const isInitializedRef = useRef(false);
  const { logClick } = useAnalyticsDB();
  

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  const validationSchema = FormValidation.buildValidationSchema();

  const authContext = useContext(AuthContext); 

  // let headerErrors: string[] = [];

  const handleInit = (responseFull: any) => {
    const initFormResponse: InitFormService.InitResult = responseFull.data;

    if (!initFormResponse.success) {
      return;
    }

    setInitialValues({ ...FormService.buildSubmitRequest(initFormResponse) }); 
  };

  const handleValidate = async (values: FormService.SubmitRequest) => {
    let errors: any = {};
    if (!lastApiSubmission.response.success) {
      setHeaderErrors(FormService.getValidationErrors(
        "",
        lastApiSubmission.response
      ));
      Object.entries(values).forEach(([key, value]) => {
        const fieldErrors: string = FormService.getValidationErrors(
          key,
          lastApiSubmission.response
        ).join(",");
        if (fieldErrors.length > 0 && value === lastApiSubmission.request[key]) {
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
      logClick("FormConnectedTacLogin","submit","");
      const responseFull: any = await FormService.submitForm(values,contextCode);
      const response: FormService.SubmitResult = responseFull.data;
      lastApiSubmission = {
        request: { ...values },
        response: { ...response },
      };
      if (!response.success) {
        setHeaderErrors(FormService.getValidationErrors("", response));
        Object.entries(new FormService.SubmitRequestInstance()).forEach(
          ([key, value]) =>
            actions.setFieldError(
              key,
              FormService.getValidationErrors(key, response).join(",")
            )
        );
        return;
      }
      {/*//GENTrainingBlock[caseGetApiKey]Start*/}
      {/*//GENLearn[isLoginPage=true]Start*/}
      authContext.setToken(response.apiKey);
      authContext.setRoles(response.roleNameCSVList);
      localStorage.setItem("@token", response.apiKey);
      localStorage.setItem("customerCode", response.customerCode);
      localStorage.setItem("email", response.email);
      AnalyticsService.start();
      {/*//GENLearn[isLoginPage=true]End*/}
      {/*//GENTrainingBlock[caseGetApiKey]End*/} 
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
    logClick("FormConnectedTacLogin","otherButton","");
    navigate("/tac-register");
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    FormService.initForm(contextCode)
      .then((response) => handleInit(response))
      .finally(() => {setInitForm(false)});
  }, []);

  return (
    <div 
      className="row justify-content-center"
    
      data-testid="formConnectedTacLogin"
    >
      <div className="col-md-7 col-lg-6 col-xl-5">
        <Card
          className=" overflow-y-auto border-0 rounded mt-1 page-card"
        
        >
          <h2 data-testid="page-title-text">Log In</h2>
          <h6 data-testid="page-intro-text">Please enter your email and password.</h6>

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
                { initForm && showProcessingAnimationOnInit ?
                  <div className="text-center bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                  : 
                  <div>
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
                  </div>
                }
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
                    data-testid="other-button"
                  >
                    Register
                  </Button> 
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-3">
            <h6 data-testid="page-footer-text"></h6>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormConnectedTacLogin;
