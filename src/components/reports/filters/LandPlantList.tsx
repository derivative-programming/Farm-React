import React, { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Button, Form, Accordion, Row, Col } from "react-bootstrap";
import "../../../App.scss";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as ReportService from "../services/LandPlantList"; 
import { AuthContext } from "../../../context/authContext"; 
import * as ReportInput from "../input-fields"   
import ReportSelectFlavor from "../lookups/SelectFlavor";  
   
export interface ReportFilterLandPlantListProps {
    name:string
    initialQuery:ReportService.QueryRequest
    onSubmit(request: ReportService.QueryRequest): void
  }

const ReportFilterLandPlantList: FC<ReportFilterLandPlantListProps> = ({
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
        <div className="mt-5 w-100">
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
                                        <Col lg="4" md="6" xs="12" id="flavorCode-filter">
                                            <ReportSelectFlavor name="flavorCode" label="Flavor" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someIntVal-filter">
                                            <ReportInput.ReportInputNumber name="someIntVal" label="Some Int Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someBigIntVal-filter">
                                            <ReportInput.ReportInputNumber name="someBigIntVal" label="Some Big Int Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someBitVal-filter">
                                            <ReportInput.ReportInputCheckbox name="someBitVal" label="Some Bit Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="isEditAllowed-filter">
                                            <ReportInput.ReportInputCheckbox name="isEditAllowed" label="Is Edit Allowed" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="isDeleteAllowed-filter">
                                            <ReportInput.ReportInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someFloatVal-filter">
                                            <ReportInput.ReportInputNumber name="someFloatVal" label="Some Float Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someDecimalVal-filter">
                                            <ReportInput.ReportInputNumber name="someDecimalVal" label="Some Decimal Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someMinUTCDateTimeVal-filter">
                                            <ReportInput.ReportInputDateTime name="someMinUTCDateTimeVal" label="Some UTC DateTime Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someMinDateVal-filter">
                                            <ReportInput.ReportInputDate name="someMinDateVal" label="Some Date Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someMoneyVal-filter">
                                            <ReportInput.ReportInputMoney name="someMoneyVal" label="Some Money Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someNVarCharVal-filter">
                                            <ReportInput.ReportInputText name="someNVarCharVal" label="Some N Var Char Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someVarCharVal-filter">
                                            <ReportInput.ReportInputText name="someVarCharVal" label="Some Var Char Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someTextVal-filter">
                                            <ReportInput.ReportInputText name="someTextVal" label="Some Text Value" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="somePhoneNumber-filter">
                                            <ReportInput.ReportInputText name="somePhoneNumber" label="Some Phone Number" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12" id="someEmailAddress-filter">
                                            <ReportInput.ReportInputEmail name="someEmailAddress" label="Some Email Address" />
                                        </Col>
                                        <Col lg="4" md="6" xs="12">
                                        </Col> 
                                        <Col lg="4" md="6" xs="12"> 
                                        <div className="d-flex h-100 align-items-end justify-content-end">
                                            <Button 
                                                type="submit"
                                                className="primary-button ms-2"
                                                data-testid="submit"
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
  
export default ReportFilterLandPlantList;
