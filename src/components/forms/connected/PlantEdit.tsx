import React, { FC, ReactElement, useContext, useEffect, useRef, useState } from "react";
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
import * as FormInput from "../input-fields"  
import SelectFlavor from "../lookups/SelectFlavor"; 
   
export interface FormProps {
    name?:string
  }

const FormConnectedPlantEdit: FC<FormProps> = ({
    name="formConnectedPlantEdit", 
  }): ReactElement => { 
    
    const [initialValues, setInitialValues] = useState(new FormService.SubmitRequestInstance); 
    let lastApiSubmission:any = { 
            request: new FormService.SubmitResultInstance,
            response: new FormService.SubmitRequestInstance};      
    const isInitializedRef = useRef(false); 

    const navigate = useNavigate();
    const { id } = useParams();
    const plantCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.plantCode = plantCode;
 
    let initFormResponse: FormService.InitResult = new FormService.InitResultInstance; 

    const validationSchema  =  FormService.buildValidationSchema();

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = [];

    const handleInit = (responseFull:any) => {
        
        const initFormResponse: FormService.InitResult = responseFull.data; 

        if(!initFormResponse.success)
        {
            return;
        } 

        setInitialValues({...FormService.buildSubmitRequest(initFormResponse)}); 

        navCodesAvailable.landCode = initFormResponse.landCode;
    } 
    
    const handleValidate = async (values: FormService.SubmitRequest) => {  
        let errors:any = {}
        if (!lastApiSubmission.response.success) {  
            headerErrors = FormService.getValidationErrors("",lastApiSubmission.response); 
            Object.entries(values)
                .forEach(([key, value]) => {
                const fieldErrors:string = FormService.getValidationErrors(key,lastApiSubmission.response).join(','); 
                if(fieldErrors.length > 0 && value == lastApiSubmission.request[key])
                { 
                    errors[key] = fieldErrors;
                }
            })  
        } 
        return errors;
    }

    const submitButtonClick = async (
        values: FormService.SubmitRequest,
        actions: FormikHelpers<FormService.SubmitRequest>
    ) => { 
        try { 
            const responseFull: any = await FormService.submitForm(values,plantCode);
            const response: FormService.SubmitResult = responseFull.data; 
            lastApiSubmission = { 
                request: {...values},
                response: {...response}}; 
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
        if(isInitializedRef.current){
            return;
        }
        isInitializedRef.current = true;
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
                    validate={handleValidate} 
                    onSubmit={async (values,actions) => {await submitButtonClick(values, actions)}}>
                    {(props) => (
                        <Form 
                            name={name} 
                            data-testid={name}
                            onReset={props.handleReset} 
                            onSubmit={props.handleSubmit}>  

                            <FormInput.ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <SelectFlavor name="flavorCode" label="Flavor" /> 
                            <FormInput.FormInputText name="otherFlavor" label="Other Flavor" /> 
                            <FormInput.FormInputNumber name="someIntVal" label="Some Int Value" /> 
                            <FormInput.FormInputNumber name="someBigIntVal" label="Some Big Int Value" /> 
                            <FormInput.FormInputCheckbox name="someBitVal" label="Some Bit Value" /> 
                            <FormInput.FormInputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <FormInput.FormInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <FormInput.FormInputNumber name="someFloatVal" label="Some Float Value" /> 
                            <FormInput.FormInputNumber name="someDecimalVal" label="Some Decimal Value" /> 
                            <FormInput.FormInputDateTime name="someUTCDateTimeVal" label="Some UTC DateTime Value" /> 
                            <FormInput.FormInputDate name="someDateVal" label="Some Date Value" /> 
                            <FormInput.FormInputMoney name="someMoneyVal" label="Some Money Value" /> 
                            <FormInput.FormInputText name="someNVarCharVal" label="Some N Var Char Value" /> 
                            <FormInput.FormInputText name="someVarCharVal" label="Some Var Char Value" /> 
                            <FormInput.FormInputTextArea name="someTextVal" label="Some Text Value" /> 
                            <FormInput.FormInputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <FormInput.FormInputEmail name="someEmailAddress" label="Some Email Address" /> 
                            <FormInput.FormInputFile name="sampleImageUploadFile" label="Sample Image Upload" /> 
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
