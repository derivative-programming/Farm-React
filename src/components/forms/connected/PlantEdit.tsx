import React, { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as FormService from "../services/PlantEdit"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import {FormInputEmail} from "../InputFields/InputEmail" 
import {FormInputPassword} from "../InputFields/InputPassword" 
import {FormInputNumber} from "../InputFields/InputNumber" 
import {FormInputCheckbox} from "../InputFields/InputCheckbox" 
import {FormInputFile} from "../InputFields/InputFile" 
import {FormInputDate} from "../InputFields/InputDate" 
import {FormInputText} from "../InputFields/InputText" 
import {FormInputMoney} from "../InputFields/InputMoney" 
import {FormInputTextArea} from "../InputFields/InputTextArea" 
import {FormInputDateTime} from "../InputFields/InputDateTime" 
import {ErrorDisplay } from '../InputFields/ErrorDisplay';
import SelectFlavor from "../lookups/SelectFlavor"; 
   
export interface FormProps {
    name?:string
  }

const FormConnectedPlantEdit: FC<FormProps> = ({
    name="formConnectedPlantEdit", 
  }): ReactElement => { 
    
    const [initialValues, setInitialValues] = useState(new FormService.SubmitRequestInstance);  

    const navigate = useNavigate();
    const { id } = useParams();
    const plantCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.plantCode = plantCode;
 
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

    const handleInit = (responseFull:any) => {
        
        const initFormResponse: FormService.InitResult = responseFull.data; 

        if(!initFormResponse.success)
        {
            return;
        } 

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

        setInitialValues({...initialValues}); 

        navCodesAvailable.landCode = initFormResponse.landCode;
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
                Object.entries(new FormService.SubmitRequestInstance)
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
        FormService.initForm(plantCode)
        .then(response => handleInit(response));
    }); 
    

    return ( 
        <div className="auth-container" data-testid="formConnectedPlantEdit">
            <Card>
                <h1>Update Plant</h1> 

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

                            <ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <SelectFlavor name="flavorCode" label="Flavor" /> 
                            <FormInputText name="otherFlavor" label="Other Flavor" /> 
                            <FormInputNumber name="someIntVal" label="Some Int Value" /> 
                            <FormInputNumber name="someBigIntVal" label="Some Big Int Value" /> 
                            <FormInputCheckbox name="someBitVal" label="Some Bit Value" /> 
                            <FormInputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <FormInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <FormInputNumber name="someFloatVal" label="Some Float Value" /> 
                            <FormInputNumber name="someDecimalVal" label="Some Decimal Value" /> 
                            <FormInputDateTime name="someUTCDateTimeVal" label="Some UTC DateTime Value" /> 
                            <FormInputDate name="someDateVal" label="Some Date Value" /> 
                            <FormInputMoney name="someMoneyVal" label="Some Money Value" /> 
                            <FormInputText name="someNVarCharVal" label="Some N Var Char Value" /> 
                            <FormInputText name="someVarCharVal" label="Some Var Char Value" /> 
                            <FormInputTextArea name="someTextVal" label="Some Text Value" /> 
                            <FormInputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <FormInputEmail name="someEmailAddress" label="Some Email Address" /> 
                            <FormInputFile name="sampleImageUploadFile" label="Sample Image Upload" /> 
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
