import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap";
import { ReportInputButton } from "../input-fields/InputButton";

import { Formik, FormikHelpers } from "formik";
import * as ReportService from "../services/LandPlantList";
import { AuthContext } from "../../../context/authContext";
import * as ReportInput from "../input-fields";
import * as Lookups from "../lookups";
import { waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";

export interface ReportFilterLandPlantListProps {
  name: string;
  initialQuery: ReportService.QueryRequest;
  onSubmit(request: ReportService.QueryRequest): void;
  hidden?: boolean;
  isCollapsible?: boolean;
}

const ReportFilterLandPlantList: FC<ReportFilterLandPlantListProps> = ({
  name,
  initialQuery,
  onSubmit,
  hidden = false,
  isCollapsible = true,
}): ReactElement => {
  const [initialValues, setInitialValues] = useState(initialQuery);
  const [loading, setLoading] = useState(false); 

  const validationSchema = ReportService.buildValidationSchema();

  const authContext = useContext(AuthContext);

  let headerErrors: string[] = [];

  const submitButtonClick = async (
    values: ReportService.QueryRequest,
    actions: FormikHelpers<ReportService.QueryRequest>
  ) => { 
    try {  
      setLoading(true);
      onSubmit(values); 
    }
    finally { 
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  const resetButtonClick = () => {
    setInitialValues({ ...initialQuery });
  };

  return (
    <div className="mt-3 w-100" hidden={hidden}>
      <Accordion defaultActiveKey="0" alwaysOpen={!isCollapsible}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filters</Accordion.Header>
          <Accordion.Body>
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                await submitButtonClick(values, actions);
              }}
            >
              {(props) => (
                <Form
                  name={name}
                  data-testid={name}
                  onReset={props.handleReset}
                  onSubmit={props.handleSubmit}
                >
                  <Row>
                    <Col lg="4" md="6" xs="12" id="flavorCode-filter">
                      <Lookups.ReportSelectFlavor
                        name="flavorCode"
                        label="Select A Flavor"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someIntVal-filter">
                      <ReportInput.ReportInputNumber
                        name="someIntVal"
                        label="Some Int Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someBigIntVal-filter">
                      <ReportInput.ReportInputNumber
                        name="someBigIntVal"
                        label="Some Big Int Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someBitVal-filter">
                      <ReportInput.ReportInputCheckbox
                        name="someBitVal"
                        label="Some Bit Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="isEditAllowed-filter">
                      <ReportInput.ReportInputCheckbox
                        name="isEditAllowed"
                        label="Is Edit Allowed"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="isDeleteAllowed-filter">
                      <ReportInput.ReportInputCheckbox
                        name="isDeleteAllowed"
                        label="Is Delete Allowed"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someFloatVal-filter">
                      <ReportInput.ReportInputNumber
                        name="someFloatVal"
                        label="Some Float Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someDecimalVal-filter">
                      <ReportInput.ReportInputNumber
                        name="someDecimalVal"
                        label="Some Decimal Val"
                      />
                    </Col>
                    <Col  id="someMinUTCDateTimeVal-filter"
                      lg="4"
                      md="6"
                      xs="12" 
                    >
                      <ReportInput.ReportInputDateTime
                        name="someMinUTCDateTimeVal"
                        label="Some Min UTC Date Time Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someMinDateVal-filter">
                      <ReportInput.ReportInputDate
                        name="someMinDateVal"
                        label="Some Min Date Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someMoneyVal-filter">
                      <ReportInput.ReportInputMoney
                        name="someMoneyVal"
                        label="Some Money Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someNVarCharVal-filter">
                      <ReportInput.ReportInputText
                        name="someNVarCharVal"
                        label="Some N Var Char Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someVarCharVal-filter">
                      <ReportInput.ReportInputText
                        name="someVarCharVal"
                        label="Some Var Char Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someTextVal-filter">
                      <ReportInput.ReportInputText
                        name="someTextVal"
                        label="Some Text Val"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="somePhoneNumber-filter">
                      <ReportInput.ReportInputText
                        name="somePhoneNumber"
                        label="Some Phone Number"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12" id="someEmailAddress-filter">
                      <ReportInput.ReportInputEmail
                        name="someEmailAddress"
                        label="Some Email Address"
                      />
                    </Col>
                    <Col lg="4" md="6" xs="12"></Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="d-flex h-100 align-items-end justify-content-end">
                        <Button 
                            type="submit"
                            className="ms-2 mt-3"
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
                          <span className="sr-only">Search</span>
        
                        </Button>
                        <Button
                          className="ms-2 mt-3"
                          type="reset"
                          onClick={() => props.resetForm() as any}
                          variant="secondary"
                          data-testid="reset"
                        >
                          Reset
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ReportFilterLandPlantList;
