/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";  // NOSONAR
import { useNavigate, useParams } from "react-router-dom";
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as TacRegisterFormService from "../services/TacRegister";
import * as TacRegisterFormValidation from "../validation/TacRegister";
import * as InitFormService from "../services/init/TacRegisterInitObjWF";
import HeaderTacRegister from "../headers/TacRegisterInitObjWF";
import { AuthContext } from "../../../context/authContext";  // NOSONAR
import * as InputFields from "../input-fields";
import * as Lookups from "../lookups"; // NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";
import * as AnalyticsService from "../../services/analyticsService"; // NOSONAR

export interface FormProps {
  name?: string;
  showProcessingAnimationOnInit?: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const FormConnectedTacRegister: FC<FormProps> = ({
  name = "formConnectedTacRegister",
  showProcessingAnimationOnInit = true,
}): ReactElement => {
  const [initPageResponse, setInitPageResponse] = useState(
    new InitFormService.InitResultInstance()
  );
  const [initialValues, setInitialValues] = useState(
    new TacRegisterFormService.SubmitRequestInstance()
  );
  const [loading, setLoading] = useState(false);
  const [initForm, setInitForm] = useState(showProcessingAnimationOnInit);
  const initHeaderErrors: string[] = [];
  const [headerErrors, setHeaderErrors] = useState(initHeaderErrors);
  const { logClick } = useAnalyticsDB();

  let lastApiSubmissionRequest = new TacRegisterFormService.SubmitRequestInstance();
  let lastApiSubmissionResponse = new TacRegisterFormService.SubmitResultInstance();
  const isInitializedRef = useRef(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  const validationSchema = TacRegisterFormValidation.buildValidationSchema();

  const authContext = useContext(AuthContext);  // NOSONAR

  const handleInit = (responseFull: InitFormService.ResponseFull) => {
    const response: InitFormService.InitResult = responseFull.data;

    if (!response.success) {
      setHeaderErrors(["An unexpected error occurred."]);
      return;
    }

    setInitPageResponse({ ...response });
  };

  const handleValidate = async (values: TacRegisterFormService.SubmitRequest) => {
    const errors: FormErrors  = {};
    if (!lastApiSubmissionResponse.success) {
      setHeaderErrors(TacRegisterFormService.getValidationErrors(
        "",
        lastApiSubmissionResponse
      ));
      Object.entries(values).forEach(([key, value]) => {
        const fieldErrors: string = TacRegisterFormService.getValidationErrors(
          key,
          lastApiSubmissionResponse
        ).join(",");
        const requestKey = key as unknown as keyof TacRegisterFormService.SubmitRequest;
        if (fieldErrors.length > 0 && value === lastApiSubmissionRequest[requestKey]) {
          errors[key] = fieldErrors;
        }
      });
    }
    return errors;
  };

  const submitClick = async (
    values: TacRegisterFormService.SubmitRequest,
    actions: FormikHelpers<TacRegisterFormService.SubmitRequest>
  ) => {
    try {
      setLoading(true);
      logClick("FormConnectedTacRegister","submit","");
      const responseFull: TacRegisterFormService.ResponseFull = await TacRegisterFormService.submitForm(
        values,
        contextCode
      );
      const response: TacRegisterFormService.SubmitResult = responseFull.data;
      lastApiSubmissionRequest = { ...values };
      lastApiSubmissionResponse = { ...response };
      if (!response.success) {
        setHeaderErrors(TacRegisterFormService.getValidationErrors("", response));
        Object.entries(new TacRegisterFormService.SubmitRequestInstance()).forEach(
          ([key]) => {
            const fieldErrors: string = TacRegisterFormService.getValidationErrors(
              key,
              response
            ).join(",");
            actions.setFieldError(key, fieldErrors);
          }
        );
        return;
      }

      authContext.setToken(response.apiKey);
      authContext.setRoles(response.roleNameCSVList);
      localStorage.setItem("@token", response.apiKey);
      localStorage.setItem("customerCode", response.customerCode);
      localStorage.setItem("email", response.email);
      AnalyticsService.start();

      actions.setSubmitting(false);
      actions.resetForm();
      submitButtonNavigateTo();
    } catch (error) {
      actions.setSubmitting(false);
    }
    finally {
      setLoading(false);
    }
  };
  const submitButtonNavigateTo = () => {
    navigateTo("tac-farm-dashboard", "tacCode");
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    TacRegisterFormService.initForm(contextCode)
      .then((response) => handleInit(response))
      .finally(() => {setInitForm(false)});
  }, []);

  useEffect(() => {
    const newInitalValues = TacRegisterFormService.buildSubmitRequest(initPageResponse);
    setInitialValues({ ...newInitalValues });
  }, [initPageResponse]);

  const navigateTo = (page: string, codeName: string) => {
    let targetContextCode = contextCode;
    Object.entries(initPageResponse).forEach(([key, value]) => {
      if (key === codeName) {
        if (value !== "" && value !== "00000000-0000-0000-0000-000000000000") {
          targetContextCode = value;
        } else {
          return;
        }
      }
    });
    const url = "/" + page + "/" + targetContextCode;
    navigate(url);
  };

  return (
    <div
    className="row justify-content-center"

    >
      <div className="col-md-7 col-lg-6 col-xl-5">
        <Card
          className="mt-1 page-card"

        >
          <h2 data-testid="page-title-text">Create your account</h2>
          <h6 data-testid="page-intro-text">A Couple Details Then We Are Off!</h6>

          <HeaderTacRegister
            name="headerTacRegister"
            initData={initPageResponse}
            isHeaderVisible={false}
          />

          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={handleValidate}
            onSubmit={async (values, actions) => {
              await submitClick(values, actions);
            }}
          >
            {(props: FormikProps<TacRegisterFormService.SubmitRequest>) => (
              <Form
                className=""
                name={name}
                data-testid={name}
                onReset={props.handleReset}
                onSubmit={props.handleSubmit}
              >
                { initForm && showProcessingAnimationOnInit ?
                  <div className="text-center  bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                  :
                  <div>
                    <InputFields.ErrorDisplay
                      name="headerErrors"
                      errorArray={headerErrors}
                    />
                    <InputFields.FormInputEmail name="email"
                      label="Email"
                      isVisible={true}
                    />
                    <InputFields.FormInputPassword name="password"
                      label="Password"
                      isVisible={true}
                    />
                    <InputFields.FormInputPassword name="confirmPassword"
                      label="Confirm Password"
                      isVisible={true}
                    />
                    <InputFields.FormInputText name="firstName"
                      label="First Name"
                      isVisible={true}
                    />
                    <InputFields.FormInputText name="lastName"
                      label="Last Name"
                      isVisible={true}
                    />
                  </div>
                }
                <div className="">
                  <Button type="submit" data-testid="submit-button"
                    className="me-2 mt-3">
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
                    <span className="sr-only">Register</span>

                  </Button>
                  <InputFields.FormInputButton name="cancel-button"
                    buttonText="Back To Log In"
                    onClick={() => {
                      logClick("FormConnectedTacAddCustomer","cancel","");
                      navigateTo("tac-login", "tacCode");
                    }}
                    isButtonCallToAction={false}
                    isVisible={true}
                    className="me-2 mt-3"
                  />

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

export default FormConnectedTacRegister;

