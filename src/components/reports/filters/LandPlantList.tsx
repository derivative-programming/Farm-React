import React, { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as ReportService from "../services/LandPlantList"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {ReportInputEmail} from "../InputFields/InputEmail"  
import {ReportInputNumber} from "../InputFields/InputNumber" 
import {ReportInputCheckbox} from "../InputFields/InputCheckbox"  
import {ReportInputDate} from "../InputFields/InputDate" 
import {ReportInputText} from "../InputFields/InputText" 
import {ReportInputMoney} from "../InputFields/InputMoney"  
import {ReportInputDateTime} from "../InputFields/InputDateTime"  
import ReportSelectFlavor from "../lookups/SelectFlavor";  
   
export interface FormProps {
    name?:string
  }

const ReportFilterLandPlantList: FC<FormProps> = ({
    name="reportFilterLandPlantList", 
  }): ReactElement => { 
    
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);  

    const navigate = useNavigate();
    const { id } = useParams();
    const landCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.landCode = landCode;   

    const validationSchema  = Yup.object().shape({
        flavorCode: Yup.string()
        ,
        someIntVal: Yup.number()
        ,
        someBigIntVal: Yup.number()
        ,
        someBitVal: Yup.boolean()
        ,
        isEditAllowed: Yup.boolean()
        ,
        isDeleteAllowed: Yup.boolean()
        ,
        someFloatVal: Yup.number()
        ,
        someDecimalVal: Yup.number()
        ,
        someUTCDateTimeVal: Yup.mixed()
        ,
        someDateVal: Yup.mixed()
        ,
        someMoneyVal: Yup.number()
        ,
        someNVarCharVal: Yup.string()
        ,
        someVarCharVal: Yup.string()
        ,
        someTextVal: Yup.string()
        ,
        somePhoneNumber: Yup.string()
        ,
        someEmailAddress: Yup.string()
        , 
        sampleImageUploadFile: Yup.string()
        , 
      });

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = []; 

    const submitButtonClick = async (
        values: ReportService.QueryRequest,
        actions: FormikHelpers<ReportService.QueryRequest>
    ) => {  
        //raise event to parent control
        actions.setSubmitting(false);
    }; 

    const resetButtonClick = (() => {  
        const newInitalValues:ReportService.QueryRequest = new ReportService.QueryRequestInstance
        setInitialValues({...newInitalValues})
    });
     
    

    return ( 
        <div className="auth-container" data-testid="reportFilterLandPlantList">
            <Card>
                <h1>Add Plant</h1> 

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
 
                            <ReportSelectFlavor name="flavorCode" label="Flavor" />  
                            <ReportInputNumber name="someIntVal" label="Some Int Value" /> 
                            <ReportInputNumber name="someBigIntVal" label="Some Big Int Value" /> 
                            <ReportInputCheckbox name="someBitVal" label="Some Bit Value" /> 
                            <ReportInputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <ReportInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <ReportInputNumber name="someFloatVal" label="Some Float Value" /> 
                            <ReportInputNumber name="someDecimalVal" label="Some Decimal Value" /> 
                            <ReportInputDateTime name="someUTCDateTimeVal" label="Some UTC DateTime Value" /> 
                            <ReportInputDate name="someDateVal" label="Some Date Value" /> 
                            <ReportInputMoney name="someMoneyVal" label="Some Money Value" /> 
                            <ReportInputText name="someNVarCharVal" label="Some N Var Char Value" /> 
                            <ReportInputText name="someVarCharVal" label="Some Var Char Value" />  
                            <ReportInputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <ReportInputEmail name="someEmailAddress" label="Some Email Address" />  
                            <div className="d-flex btn-container">
                                <Button type="submit" data-testid="submit">
                                    Save
                                </Button>
                                <Button
                                    onClick={() => {
                                        resetButtonClick(); 
                                    }}
                                    variant="secondary" 
                                    data-testid="reset"
                                >
                                    Reset
                                </Button>
                            </div>
                        </Form>  
                    )}
                </Formik>
            </Card>
        </div> 
    );
};
  
export default ReportFilterLandPlantList;
