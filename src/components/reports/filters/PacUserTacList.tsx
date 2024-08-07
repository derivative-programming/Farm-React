/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap";

import { Formik, FormikHelpers, FormikProps } from "formik";
import * as PacUserTacListReportService from "../services/PacUserTacList";
import * as ReportInput from "../input-fields";  //NOSONAR
import * as Lookups from "../lookups";  //NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";

export interface ReportFilterPacUserTacListProps {
  name: string;
  initialQuery: PacUserTacListReportService.QueryRequest;
  onSubmit(request: PacUserTacListReportService.QueryRequest): void;
  hidden?: boolean;
  isCollapsible?: boolean;
}

const ReportFilterPacUserTacList: FC<ReportFilterPacUserTacListProps> = ({
  name,
  initialQuery,
  onSubmit,
  hidden = false,
  isCollapsible = true,
}): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { logClick } = useAnalyticsDB();

  const validationSchema = PacUserTacListReportService.buildValidationSchema();

  const isFiltersVisibleDefault = localStorage.getItem("isFiltersVisible");
  const defaultAccordianKey = (isFiltersVisibleDefault === "true" ? "0" : "-1");

  const headerErrors: string[] = [];

  const submitButtonClick = async (
    values: PacUserTacListReportService.QueryRequest,
    actions: FormikHelpers<PacUserTacListReportService.QueryRequest>
  ) => {
    try {
      setLoading(true);
      logClick("ReportFilterPacUserTacList","submit","");
      onSubmit(values);
    }
    finally {
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  const onAccordianHeaderClick = () => {
    logClick("ReportFilterPacUserTacList","accordianClick","");
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
              {(props: FormikProps<PacUserTacListReportService.QueryRequest>) => (
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

export default ReportFilterPacUserTacList;

