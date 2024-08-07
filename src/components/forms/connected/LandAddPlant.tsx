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
import * as LandAddPlantFormService from "../services/LandAddPlant";
import * as LandAddPlantFormValidation from "../validation/LandAddPlant";
import * as InitFormService from "../services/init/LandAddPlantInitObjWF";
import HeaderLandAddPlant from "../headers/LandAddPlantInitObjWF";
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

export const FormConnectedLandAddPlant: FC<FormProps> = ({
  name = "formConnectedLandAddPlant",
  showProcessingAnimationOnInit = true,
}): ReactElement => {
  const [initPageResponse, setInitPageResponse] = useState(
    new InitFormService.InitResultInstance()
  );
  const [initialValues, setInitialValues] = useState(
    new LandAddPlantFormService.SubmitRequestInstance()
  );
  const [loading, setLoading] = useState(false);
  const [initForm, setInitForm] = useState(showProcessingAnimationOnInit);
  const initHeaderErrors: string[] = [];
  const [headerErrors, setHeaderErrors] = useState(initHeaderErrors);
  const { logClick } = useAnalyticsDB();

  let lastApiSubmissionRequest = new LandAddPlantFormService.SubmitRequestInstance();
  let lastApiSubmissionResponse = new LandAddPlantFormService.SubmitResultInstance(); 
  const isInitializedRef = useRef(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  const validationSchema = LandAddPlantFormValidation.buildValidationSchema();

  const authContext = useContext(AuthContext);  // NOSONAR

  const handleInit = (responseFull: InitFormService.ResponseFull) => {
    const response: InitFormService.InitResult = responseFull.data;

    if (!response.success) {
      setHeaderErrors(["An unexpected error occurred."]);
      return;
    }

    setInitPageResponse({ ...response }); 
  };

  const handleValidate = async (values: LandAddPlantFormService.SubmitRequest) => {
    const errors: FormErrors  = {};
    if (!lastApiSubmissionResponse.success) {
      setHeaderErrors(LandAddPlantFormService.getValidationErrors(
        "",
        lastApiSubmissionResponse
      ));
      Object.entries(values).forEach(([key, value]) => {
        const fieldErrors: string = LandAddPlantFormService.getValidationErrors(
          key,
          lastApiSubmissionResponse
        ).join(",");
        const requestKey = key as unknown as keyof LandAddPlantFormService.SubmitRequest;
        if (fieldErrors.length > 0 && value === lastApiSubmissionRequest[requestKey]) {
          errors[key] = fieldErrors;
        }
      });
    }
    return errors;
  };

  const submitClick = async (
    values: LandAddPlantFormService.SubmitRequest,
    actions: FormikHelpers<LandAddPlantFormService.SubmitRequest>
  ) => {
    try {
      setLoading(true);
      logClick("FormConnectedLandAddPlant","submit","");
      const responseFull: LandAddPlantFormService.ResponseFull = await LandAddPlantFormService.submitForm(
        values,
        contextCode
      );
      const response: LandAddPlantFormService.SubmitResult = responseFull.data;
      lastApiSubmissionRequest = { ...values };
      lastApiSubmissionResponse = { ...response };
      if (!response.success) {
        setHeaderErrors(LandAddPlantFormService.getValidationErrors("", response));
        Object.entries(new LandAddPlantFormService.SubmitRequestInstance()).forEach(
          ([key]) => {
            const fieldErrors: string = LandAddPlantFormService.getValidationErrors(
              key,
              response
            ).join(",");
            actions.setFieldError(key, fieldErrors);
          }
        );
        return;
      }
      {/*//GENTrainingBlock[caseGetApiKey]Start*/}
      {/*//GENLearn[isLoginPage=false]Start*/}
      {/*//GENLearn[isLoginPage=false]End*/}
      {/*//GENTrainingBlock[caseGetApiKey]End*/} 
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
    navigateTo("land-plant-list", "landCode");
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    LandAddPlantFormService.initForm(contextCode)
      .then((response) => handleInit(response)) 
      .finally(() => {setInitForm(false)});
  }, []);

  useEffect(() => {
    const newInitalValues = LandAddPlantFormService.buildSubmitRequest(initPageResponse);
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
          <h2 data-testid="page-title-text">Add Plant</h2>
          <h6 data-testid="page-intro-text">Add plant intro text.</h6>

          <HeaderLandAddPlant  
            name="headerLandAddPlant"
            initData={initPageResponse}
            isHeaderVisible={true}
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
            {(props: FormikProps<LandAddPlantFormService.SubmitRequest>) => (
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
                    <Lookups.FormSelectFlavor name="requestFlavorCode"
                      label="Select A Flavor"
                      isVisible={true}
                    />
                    <InputFields.FormInputText name="requestOtherFlavor"
                      label="Other Flavor"
                      isVisible={true}
                    />
                    <InputFields.FormInputNumber name="requestSomeIntVal"
                      label="Some Int Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputNumber name="requestSomeBigIntVal"
                      label="Some Big Int Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputCheckbox name="requestSomeBitVal"
                      label="Some Bit Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputCheckbox name="requestIsEditAllowed"
                      label="Is Edit Allowed"
                      isVisible={true}
                    />
                    <InputFields.FormInputCheckbox name="requestIsDeleteAllowed"
                      label="Is Delete Allowed"
                      isVisible={true}
                    />
                    <InputFields.FormInputNumber name="requestSomeFloatVal"
                      label="Some Float Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputNumber name="requestSomeDecimalVal"
                      label="Some Decimal Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputDateTime name="requestSomeUTCDateTimeVal"
                      label="Some UTC Date Time Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputDate name="requestSomeDateVal"
                      label="Some Date Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputMoney name="requestSomeMoneyVal"
                      label="Some Money Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputText name="requestSomeNVarCharVal"
                      label="Some N Var Char Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputPassword name="requestSomeVarCharVal"
                      label="Some Secure Var Char Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputTextArea name="requestSomeTextVal"
                      label="Some Text Val"
                      isVisible={true}
                    />
                    <InputFields.FormInputText name="requestSomePhoneNumber"
                      label="Some Phone Number" 
                      isVisible={true}
                    />
                    <InputFields.FormInputEmail name="requestSomeEmailAddress"
                      label="Some Email Address"
                      isVisible={true}
                    />
                    <InputFields.FormInputFile name="requestSampleImageUploadFile"
                      label="Sample Image Upload"
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
                    <span className="sr-only">OK Button Text</span>

                  </Button>
                  <InputFields.FormInputButton name="cancel-button"
                    buttonText="Cancel Button Text"
                    onClick={() => {
                      logClick("FormConnectedLandAddPlant","cancel","");
                      navigateTo("land-plant-list", "landCode");
                    }}
                    isButtonCallToAction={false}
                    isVisible={true}
                    className="me-2 mt-3"
                  />
                  <InputFields.FormInputButton name="other-button"
                    buttonText="Go To Dashboard"
                    onClick={() => {
                      logClick("FormConnectedLandAddPlant","otherButton","");
                      navigateTo("tac-farm-dashboard", "tacCode");
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
            <h6 data-testid="page-footer-text">Add plant form footer text</h6>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormConnectedLandAddPlant;
