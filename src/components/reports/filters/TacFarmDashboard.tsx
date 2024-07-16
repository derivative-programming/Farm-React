import React, {
  FC,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Button, Form, Accordion, Row, Col, Spinner } from "react-bootstrap";

import { Formik, FormikHelpers, FormikProps } from "formik";
import * as ReportService from "../services/TacFarmDashboard";
import { AuthContext } from "../../../context/authContext";
import * as ReportInput from "../input-fields";
import * as Lookups from "../lookups";
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";

export interface ReportFilterTacFarmDashboardProps {
  name: string;
  initialQuery: ReportService.QueryRequest;
  onSubmit(request: ReportService.QueryRequest): void;
  hidden?: boolean;
  isCollapsible?: boolean;
}

const ReportFilterTacFarmDashboard: FC<ReportFilterTacFarmDashboardProps> = ({
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

  const headerErrors: string[] = [];

  const submitButtonClick = async (
    values: ReportService.QueryRequest,
    actions: FormikHelpers<ReportService.QueryRequest>
  ) => {
    try {
      setLoading(true);
      logClick("ReportFilterTacFarmDashboard","submit","");
      onSubmit(values);
    }
    finally {
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  const resetButtonClick = () => {
    logClick("ReportFilterTacFarmDashboard","refresh","");
    setInitialValues({ ...initialQuery });
  };

  const onAccordianHeaderClick = () => {
    logClick("ReportFilterTacFarmDashboard","accordianClick","");
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
              {(props: FormikProps<ReportService.QueryRequest>) => (
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

export default ReportFilterTacFarmDashboard;

