import React, { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Button, Form, Accordion, Row, Col } from "react-bootstrap";
import "../../../App.scss";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as ReportService from "../services/PlantUserDetails"; 
import { AuthContext } from "../../../context/authContext"; 
   
export interface ReportFilterPlantUserDetailsProps {
    name:string
    initialQuery:ReportService.QueryRequest
    onSubmit(request: ReportService.QueryRequest): void
  }

const ReportFilterPlantUserDetails: FC<ReportFilterPlantUserDetailsProps> = ({
    name,
    initialQuery,
    onSubmit
  }): ReactElement => { 
    
    const [initialValues, setInitialValues] = useState(initialQuery);   

    const validationSchema  =  ReportService.buildValidationSchema();

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = []; 

    const submitButtonClick = async (
        values: ReportService.QueryRequest,
        actions: FormikHelpers<ReportService.QueryRequest>
    ) => {   
        onSubmit(values)
        actions.setSubmitting(false);
    }; 

    const resetButtonClick = (() => {   
        setInitialValues({...initialQuery})
    });
     
    

    return ( 
        <div className="mt-3 w-100">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>

                        <Formik
                            enableReinitialize={true}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (values,actions) => {await submitButtonClick(values, actions)}}>
                            {(props) => (
                                <Form 
                                    name={name} 
                                    data-testid={name}
                                    onReset={props.handleReset} 
                                    onSubmit={props.handleSubmit}>  
        
                                    <Row> 
                                        <Col lg="4" md="6" xs="12">
                                        </Col> 
                                        <Col lg="4" md="6" xs="12"> 
                                        <div className="d-flex h-100 align-items-end justify-content-end">
                                            <Button 
                                                type="submit"
                                                className="primary-button ms-2"
                                                data-testid="submit-button"
                                            >
                                                Search
                                            </Button>
                                            <Button
                                                className="primary-button"
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
  
export default ReportFilterPlantUserDetails;
