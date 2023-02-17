import React, { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
    useField,
} from "formik";
import * as FormService from "../services/PlantEdit"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {InputEmail} from "../../InputFields/InputEmail" 
import {InputPassword} from "../../InputFields/InputPassword" 
import {InputNumber} from "../../InputFields/InputNumber" 
import {InputCheckbox} from "../../InputFields/InputCheckbox" 
import {InputFile} from "../../InputFields/InputFile" 
import {InputDate} from "../../InputFields/InputDate" 
import {InputText} from "../../InputFields/InputText" 
import {InputMoney} from "../../InputFields/InputMoney" 
import {InputTextArea} from "../../InputFields/InputTextArea" 
import {InputDateTime} from "../../InputFields/InputDateTime" 
import {ErrorDisplay } from '../../InputFields/ErrorDisplay';
import SelectFlavor from "../../lookups/drop-down/SelectFlavor"; 
   
export interface FormProps {
    name?:string
  }

const FormConnectedPlantEdit: FC<FormProps> = ({
    name="formConnectedPlantEdit", 
  }): ReactElement => { 

    const navigate = useNavigate();
    const { Id } = useParams();
    const plantCode:string = Id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}

    const initialValues: FormService.SubmitRequest = new FormService.SubmitRequestInstance;
    let initFormResponse: FormService.InitResult = new FormService.InitResultInstance; 

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

    const handleInit = async() => {
        const responseFull: any = await FormService.initForm(plantCode); 
        initFormResponse = responseFull.data; 

        initialValues.flavorCode = initFormResponse.flavorCode;
        initialValues.otherFlavor = initFormResponse.otherFlavor;
        initialValues.someIntVal = initFormResponse.someIntVal;
        initialValues.someBigIntVal = initFormResponse.someBigIntVal;
        initialValues.someBitVal = initFormResponse.someBitVal;
        initialValues.isEditAllowed = initFormResponse.isEditAllowed;
        initialValues.isDeleteAllowed = initFormResponse.isDeleteAllowed;
        initialValues.someFloatVal = initFormResponse.someFloatVal;
        initialValues.someDecimalVal = initFormResponse.someDecimalVal;
        initialValues.someUTCDateTimeVal = initFormResponse.someUTCDateTimeVal;
        initialValues.someDateVal = initFormResponse.someDateVal;
        initialValues.someMoneyVal = initFormResponse.someMoneyVal;
        initialValues.someNVarCharVal = initFormResponse.someNVarCharVal;
        initialValues.someVarCharVal = initFormResponse.someVarCharVal;
        initialValues.someTextVal = initFormResponse.someTextVal;
        initialValues.somePhoneNumber = initFormResponse.somePhoneNumber;
        initialValues.someEmailAddress = initFormResponse.someEmailAddress;

        navCodesAvailable.landCode = initFormResponse.landCode;
        navCodesAvailable.plantCode = plantCode;
    }

    const submitButtonClick = async (
        values: FormService.SubmitRequest,
        actions: FormikHelpers<FormService.SubmitRequest>
    ) => { 
        try { 
            const responseFull: any = await FormService.submitForm(values,plantCode);
            const response: FormService.SubmitResult = responseFull.data; 
            if (!response.success) {  
                headerErrors = FormService.getValidationErrors("",response); 
                Object.entries(FormService.SubmitRequestInstance)
                    .forEach(([key, value]) => 
                    actions.setFieldError(key, FormService.getValidationErrors(key,response).join(','))) 
                return;
            } 
            actions.setSubmitting(false);
            actions.resetForm();  
            navigate("/land-plant-list/" + navCodesAvailable.landCode);
        } catch (error) {
            actions.setSubmitting(false);
        }
    }; 

    const cancelButtonClick = (() => {
        navigate("/land-plant-list/" + navCodesAvailable.landCode);
    });
    
    useEffect(() => {
        handleInit();
    }); 
    

    return ( 
        <div className="auth-container" data-testid="formConnectedPlantEdit">
            <Card>
                <h1>Update Plant</h1> 

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values,actions) => {await submitButtonClick(values, actions)}}>
                    {(props) => (
                        <Form 
                            name={name} 
                            data-testid={name}
                            onReset={props.handleReset} 
                            onSubmit={props.handleSubmit}>  

                            <ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <SelectFlavor name="flavorCode" label="Flavor" /> 
                            <InputText name="otherFlavor" label="Other Flavor" /> 
                            <InputNumber name="someIntVal" label="Some Int Value" /> 
                            <InputNumber name="someBigIntVal" label="Some Big Int Value" /> 
                            <InputCheckbox name="someBitVal" label="Some Bit Value" /> 
                            <InputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <InputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <InputNumber name="someFloatVal" label="Some Float Value" /> 
                            <InputNumber name="someDecimalVal" label="Some Decimal Value" /> 
                            <InputDateTime name="someUTCDateTimeVal" label="Some UTC DateTime Value" /> 
                            <InputDate name="someDateVal" label="Some Date Value" /> 
                            <InputMoney name="someMoneyVal" label="Some Money Value" /> 
                            <InputText name="someNVarCharVal" label="Some N Var Char Value" /> 
                            <InputText name="someVarCharVal" label="Some Var Char Value" /> 
                            <InputTextArea name="someTextVal" label="Some Text Value" /> 
                            <InputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <InputEmail name="someEmailAddress" label="Some Email Address" /> 
                            <InputFile name="sampleImageUploadFile" label="Sample Image Upload" /> 
                            <div className="d-flex btn-container">
                                <Button type="submit" data-testid="submit">
                                    Save
                                </Button>
                                <Button
                                    onClick={() => {
                                        cancelButtonClick(); 
                                    }}
                                    variant="secondary" 
                                    data-testid="backToLogin"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form>  
                    )}
                </Formik>
            </Card>
        </div> 
    );
};
  
export default FormConnectedPlantEdit;
