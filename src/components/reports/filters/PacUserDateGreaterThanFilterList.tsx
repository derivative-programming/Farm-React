/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap";

import { Formik, FormikHelpers, FormikProps } from "formik";
import * as PacUserDateGreaterThanFilterListReportService from "../services/PacUserDateGreaterThanFilterList";
import * as ReportInput from "../input-fields";  //NOSONAR
import * as Lookups from "../lookups";  //NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";

export interface ReportFilterPacUserDateGreaterThanFilterListProps {
  name: string;
  initialQuery: PacUserDateGreaterThanFilterListReportService.QueryRequest;
  onSubmit(request: PacUserDateGreaterThanFilterListReportService.QueryRequest): void;
  hidden?: boolean;
  isCollapsible?: boolean;
}

const ReportFilterPacUserDateGreaterThanFilterList: FC<ReportFilterPacUserDateGreaterThanFilterListProps> = ({
  name,
  initialQuery,
  onSubmit,
  hidden = false,
  isCollapsible = true,
}): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { logClick } = useAnalyticsDB();

  const validationSchema = PacUserDateGreaterThanFilterListReportService.buildValidationSchema();

  const isFiltersVisibleDefault = localStorage.getItem("isFiltersVisible");
  const defaultAccordianKey = (isFiltersVisibleDefault === "true" ? "0" : "-1");

  const headerErrors: string[] = [];

  const submitButtonClick = async (
    values: PacUserDateGreaterThanFilterListReportService.QueryRequest,
    actions: FormikHelpers<PacUserDateGreaterThanFilterListReportService.QueryRequest>
  ) => {
    try {
      setLoading(true);
      logClick("ReportFilterPacUserDateGreaterThanFilterList","submit","");
      onSubmit(values);
    }
    finally {
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  const onAccordianHeaderClick = () => {
    logClick("ReportFilterPacUserDateGreaterThanFilterList","accordianClick","");
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
              {(props: FormikProps<PacUserDateGreaterThanFilterListReportService.QueryRequest>) => (
                <Form
                  name={name}
                  data-testid={name}
                  onReset={props.handleReset}
                  onSubmit={props.handleSubmit}
                >
                  <Row>

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
                          onClick={() => props.resetForm()}
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

export default ReportFilterPacUserDateGreaterThanFilterList;

