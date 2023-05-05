import React, {
  FC,
  ReactElement,
  useContext, 
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap"; 

import { Formik, FormikHelpers } from "formik";
import * as ReportService from "../services/LandPlantList";
import { AuthContext } from "../../../context/authContext";
import * as ReportInput from "../input-fields";
import * as Lookups from "../lookups";
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 

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
  const { logClick } = useAnalyticsDB();

  // console.log('filter ctrl initialQuery...');
  // console.log(initialQuery); 
  // console.log('filter ctrl initialValues...');
  // console.log(initialValues); 

  const validationSchema = ReportService.buildValidationSchema();
 
  const isFiltersVisibleDefault = localStorage.getItem("isFiltersVisible");
  const defaultAccordianKey = (isFiltersVisibleDefault === "true" ? "0" : "-1");

  const authContext = useContext(AuthContext);

  let headerErrors: string[] = [];

  const submitButtonClick = async (
    values: ReportService.QueryRequest,
    actions: FormikHelpers<ReportService.QueryRequest>
  ) => {  
    try {  
      setLoading(true);
      logClick("ReportFilterLandPlantList","submit","");
      onSubmit(values); 
    }
    finally { 
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  const resetButtonClick = () => {
    logClick("ReportFilterLandPlantList","refresh","");
    setInitialValues({ ...initialQuery });
  };

  const onAccordianHeaderClick = () => { 
    logClick("ReportFilterLandPlantList","accordianClick","");
    const isFiltersVisible = localStorage.getItem("isFiltersVisible");
    if(isFiltersVisible === null)
    {
      localStorage.setItem("isFiltersVisible","true")
    }
    if(isFiltersVisible === "true")
    {
      localStorage.setItem("isFiltersVisible","false")
    }
    if(isFiltersVisible === "false")
    {
      localStorage.setItem("isFiltersVisible","true")
    }
  }
 
  return (
    <div className="mt-3 w-100" hidden={hidden}>
      <Accordion defaultActiveKey={defaultAccordianKey} alwaysOpen={!isCollapsible}>
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={onAccordianHeaderClick}
            data-testid={name + '-header'}>Filters</Accordion.Header>
          <Accordion.Body>
            <Formik
              enableReinitialize={true}
              initialValues={initialQuery}
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
                    <Col xl="3" lg="4" md="6" xs="12" id="flavorCode">
                      <Lookups.ReportSelectFlavor
                        name="flavorCode"
                        label="Select A Flavor"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someIntVal">
                      <ReportInput.ReportInputNumber
                        name="someIntVal"
                        label="Some Int Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someBigIntVal">
                      <ReportInput.ReportInputNumber
                        name="someBigIntVal"
                        label="Some Big Int Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFloatVal">
                      <ReportInput.ReportInputNumber
                        name="someFloatVal"
                        label="Some Float Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someBitVal">
                      <ReportInput.ReportInputCheckbox
                        name="someBitVal"
                        label="Some Bit Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="isEditAllowed">
                      <ReportInput.ReportInputCheckbox
                        name="isEditAllowed"
                        label="Is Edit Allowed"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="isDeleteAllowed">
                      <ReportInput.ReportInputCheckbox
                        name="isDeleteAllowed"
                        label="Is Delete Allowed"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someDecimalVal">
                      <ReportInput.ReportInputNumber
                        name="someDecimalVal"
                        label="Some Decimal Val"
                      />
                    </Col>
                    <Col  id="someMinUTCDateTimeVal"
                      xl="3" lg="4"
                      md="6"
                      xs="12" 
                    >
                      <ReportInput.ReportInputDateTime
                        name="someMinUTCDateTimeVal"
                        label="Some Min UTC Date Time Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someMinDateVal">
                      <ReportInput.ReportInputDate
                        name="someMinDateVal"
                        label="Some Min Date Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someMoneyVal">
                      <ReportInput.ReportInputMoney
                        name="someMoneyVal"
                        label="Some Money Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someNVarCharVal">
                      <ReportInput.ReportInputText
                        name="someNVarCharVal"
                        label="Some N Var Char Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someVarCharVal">
                      <ReportInput.ReportInputText
                        name="someVarCharVal"
                        label="Some Var Char Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someTextVal">
                      <ReportInput.ReportInputText
                        name="someTextVal"
                        label="Some Text Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="somePhoneNumber">
                      <ReportInput.ReportInputText
                        name="somePhoneNumber"
                        label="Some Phone Number"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someEmailAddress">
                      <ReportInput.ReportInputEmail
                        name="someEmailAddress"
                        label="Some Email Address"
                      />
                    </Col> 
                  </Row>
                  <Row>
                    <Col xl="12" lg="12" md="12" xs="12">
                      <div className="d-flex h-100 align-items-end justify-content-end">
                        <Button 
                          type="submit"
                          className="ms-2 mt-3"
                          data-testid="submit-button"
                        >
                          {loading && (
                            <Spinner
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
