/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap"; 

import { Formik, FormikHelpers, FormikProps } from "formik";
import * as LandPlantListReportService from "../services/LandPlantList";
import * as ReportInput from "../input-fields";  //NOSONAR
import * as Lookups from "../lookups";  //NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 

export interface ReportFilterLandPlantListProps {
  name: string;
  initialQuery: LandPlantListReportService.QueryRequest;
  onSubmit(request: LandPlantListReportService.QueryRequest): void;
  onReset(): void;
  hidden?: boolean;
  isCollapsible?: boolean;
}

const ReportFilterLandPlantList: FC<ReportFilterLandPlantListProps> = ({
  name,
  initialQuery,
  onSubmit,
  onReset,
  hidden = false,
  isCollapsible = true,
}): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { logClick } = useAnalyticsDB();

  const validationSchema = LandPlantListReportService.buildValidationSchema();
 
  const isFiltersVisibleDefault = localStorage.getItem("isFiltersVisible");
  const defaultAccordianKey = (isFiltersVisibleDefault === "true" ? "0" : "-1");

  const headerErrors: string[] = [];

  const resetButtonClick = async () => {  
    onReset(); 
  };

  const submitButtonClick = async (
    values: LandPlantListReportService.QueryRequest,
    actions: FormikHelpers<LandPlantListReportService.QueryRequest>
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
              {(props: FormikProps<LandPlantListReportService.QueryRequest>) => (
                <Form
                  name={name}
                  data-testid={name}
                  onSubmit={props.handleSubmit} 
                  autoComplete="off"
                >
                  <Row>
                    <Col xl="3" lg="4" md="6" xs="12" id="flavorFilterCode">
                      <Lookups.ReportSelectFlavor
                        name="flavorFilterCode"
                        label="Select A Flavor"
                        isFKListInactiveIncluded={false}
                        isFKListSearchable={true}
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterIntVal">
                      <ReportInput.ReportInputNumber
                        name="someFilterIntVal"
                        label="Some Int Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterBigIntVal">
                      <ReportInput.ReportInputNumber
                        name="someFilterBigIntVal"
                        label="Some Big Int Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterFloatVal">
                      <ReportInput.ReportInputNumber
                        name="someFilterFloatVal"
                        label="Some Float Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterBitVal">
                      <ReportInput.ReportInputCheckbox
                        name="someFilterBitVal"
                        label="Some Bit Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="isFilterEditAllowed">
                      <ReportInput.ReportInputCheckbox
                        name="isFilterEditAllowed"
                        label="Is Edit Allowed"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="isFilterDeleteAllowed">
                      <ReportInput.ReportInputCheckbox
                        name="isFilterDeleteAllowed"
                        label="Is Delete Allowed"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterDecimalVal">
                      <ReportInput.ReportInputNumber
                        name="someFilterDecimalVal"
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
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterMoneyVal">
                      <ReportInput.ReportInputMoney
                        name="someFilterMoneyVal"
                        label="Some Money Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterNVarCharVal">
                      <ReportInput.ReportInputText
                        name="someFilterNVarCharVal"
                        label="Some N Var Char Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterVarCharVal">
                      <ReportInput.ReportInputText
                        name="someFilterVarCharVal"
                        label="Some Var Char Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterTextVal">
                      <ReportInput.ReportInputText
                        name="someFilterTextVal"
                        label="Some Text Val"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterPhoneNumber">
                      <ReportInput.ReportInputText
                        name="someFilterPhoneNumber"
                        label="Some Phone Number"
                      />
                    </Col>
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterEmailAddress">
                      <ReportInput.ReportInputEmail
                        name="someFilterEmailAddress"
                        label="Some Email Address"
                      />
                    </Col> 
                    <Col xl="3" lg="4" md="6" xs="12" id="someFilterUniqueIdentifier">
                      <ReportInput.ReportInputText
                        name="someFilterUniqueIdentifier"
                        label="Some Filter Unique Identifier"
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
                          variant="outline-primary"
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
                          onClick={async () => {
                            await resetButtonClick();
                            props.resetForm();
                          }}
                          variant="outline-secondary"
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
