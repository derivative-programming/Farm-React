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
import * as FormService from "../services/LandAddPlant";
import * as InitFormService from "../services/LandAddPlantInitObjWF";
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import * as InputFields from "../input-fields";
import * as Lookups from "../lookups";

export interface FormProps {
  name?: string;
}

export const FormConnectedLandAddPlant: FC<FormProps> = ({
  name = "formConnectedLandAddPlant",
}): ReactElement => {
  const [initPageResponse, setInitPageResponse] = useState(
    new InitFormService.InitResultInstance()
  );
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
    const response: InitFormService.InitResult = responseFull.data;

    if (!response.success) {
      return;
    }

    setInitPageResponse({ ...response });
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

  const submitClick = async (
    values: FormService.SubmitRequest,
    actions: FormikHelpers<FormService.SubmitRequest>
  ) => {
    try {
      setLoading(true);
      const responseFull: any = await FormService.submitForm(
        values,
        contextCode
      );
      const response: FormService.SubmitResult = responseFull.data;
      lastApiSubmission = {
        request: { ...values },
        response: { ...response },
      };
      if (!response.success) {
        headerErrors = FormService.getValidationErrors("", response);
        Object.entries(new FormService.SubmitRequestInstance()).forEach(
          ([key, value]) => {
            const fieldErrors: string = FormService.getValidationErrors(
              key,
              response
            ).join(",");
            actions.setFieldError(key, fieldErrors);
          }
        );
        return;
      }
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
    FormService.initForm(contextCode).then((response) => handleInit(response));
  }, []);

  useEffect(() => {
    const newInitalValues = FormService.buildSubmitRequest(initPageResponse);
    setInitialValues({ ...newInitalValues });
  }, [initPageResponse]);

  const navigateTo = (page: string, codeName: string) => {
    let targetContextCode = contextCode;
    Object.entries(initPageResponse).forEach(([key, value]) => {
      if (key == codeName) {
        if (value != "" && value != "00000000-0000-0000-0000-000000000000") {
          targetContextCode = value;
        } else {
          return;
        }
      }
    });
    const url = "/" + page + "/" + targetContextCode;
    console.log("navigateTo " + page + " " + codeName);
    navigate(url);
  };

  return (
    <div
      className="p-0 d-flex flex-column align-items-center justify-content-center"

    >
      <Card
        className="mt-1 page-card"

      >
        <h2>Add Plant Title Text</h2>
        <h6>Add plant intro text.</h6>

        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          validate={handleValidate}
          onSubmit={async (values, actions) => {
            await submitClick(values, actions);
          }}
        >
          {(props) => (
            <Form
              className=""
              name={name}
              data-testid={name}
              onReset={props.handleReset}
              onSubmit={props.handleSubmit}
            >
              <InputFields.ErrorDisplay
                name="headerErrors"
                errorArray={headerErrors}
              />
              <Lookups.FormSelectFlavor name="flavorCode"
                label="Select A Flavor"
              />
              <InputFields.FormInputText name="otherFlavor"
                label="Other Flavor"
              />
              <InputFields.FormInputNumber name="someIntVal"
                label="Some Int Val"
              />
              <InputFields.FormInputNumber name="someBigIntVal"
                label="Some Big Int Val"
              />
              <InputFields.FormInputCheckbox name="someBitVal"
                label="Some Bit Val"
              />
              <InputFields.FormInputCheckbox name="isEditAllowed"
                label="Is Edit Allowed"
              />
              <InputFields.FormInputCheckbox name="isDeleteAllowed"
                label="Is Delete Allowed"
              />
              <InputFields.FormInputNumber name="someFloatVal"
                label="Some Float Val"
              />
              <InputFields.FormInputNumber name="someDecimalVal"
                label="Some Decimal Val"
              />
              <InputFields.FormInputDateTime name="someUTCDateTimeVal"
                label="Some UTC Date Time Val"
              />
              <InputFields.FormInputDate name="someDateVal"
                label="Some Date Val"
              />
              <InputFields.FormInputMoney name="someMoneyVal"
                label="Some Money Val"
              />
              <InputFields.FormInputText name="someNVarCharVal"
                label="Some N Var Char Val"
              />
              <InputFields.FormInputText name="someVarCharVal"
                label="Some Var Char Val"
              />
              <InputFields.FormInputTextArea name="someTextVal"
                label="Some Text Val"
              />
              <InputFields.FormInputText name="somePhoneNumber"
                label="Some Phone Number"
              />
              <InputFields.FormInputEmail name="someEmailAddress"
                label="Some Email Address"
              />
              <InputFields.FormInputFile name="sampleImageUploadFile"
                label="Sample Image Upload"
              />
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
                    navigateTo("land-plant-list", "landCode");
                  }}
                  isButtonCallToAction={false}
                  isVisible={true}
                  className="me-2 mt-3"
                />
                <InputFields.FormInputButton name="other-button"
                  buttonText="New Random Values"
                  onClick={() => {
                    navigateTo("land-add-plant", "landCode");
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
          <h6>Add plant form footer text</h6>
        </div>
      </Card>
    </div>
  );
};

export default FormConnectedLandAddPlant;
