import React, { FC, ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as FormService from "../services/LandAddPlant"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import * as InputFields from "../input-fields" 
import * as Lookups from "../lookups";  
   
export interface FormProps {
    name?:string
  }

const FormConnectedLandAddPlant: FC<FormProps> = ({
    name="formConnectedLandAddPlant", 
  }): ReactElement => { 
    
    const [initialValues, setInitialValues] = useState(new FormService.SubmitRequestInstance);   
    let lastApiSubmission:any = { 
            request: new FormService.SubmitResultInstance,
            response: new FormService.SubmitRequestInstance};    
    const isInitializedRef = useRef(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const landCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.landCode = landCode;   

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
            const responseFull: any = await FormService.submitForm(values,landCode);
            const response: FormService.SubmitResult = responseFull.data; 
            lastApiSubmission = { 
                request: {...values},
                response: {...response}}; 
            if (!response.success) {  
                headerErrors = FormService.getValidationErrors("",response); 
                Object.entries(new FormService.SubmitRequestInstance)
                    .forEach(([key, value]) => {
                    const fieldErrors:string = FormService.getValidationErrors(key,response).join(','); 
                    actions.setFieldError(key, fieldErrors); 
                })  
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
        FormService.initForm(landCode)
        .then(response => handleInit(response));
        
    }); 
     
    

    return ( 
        <div className="auth-container" data-testid="formConnectedLandAddPlant">
            <Card>
                <h1>Add Plant</h1> 

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

                            <InputFields.ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <Lookups.FormSelectFlavor name="flavorCode" label="Flavor" /> 
                            <InputFields.FormInputText name="otherFlavor" label="Other Flavor" /> 
                            <InputFields.FormInputNumber name="someIntVal" label="Some Int Value" /> 
                            <InputFields.FormInputNumber name="someBigIntVal" label="Some Big Int Value" /> 
                            <InputFields.FormInputCheckbox name="someBitVal" label="Some Bit Value" /> 
                            <InputFields.FormInputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <InputFields.FormInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <InputFields.FormInputNumber name="someFloatVal" label="Some Float Value" /> 
                            <InputFields.FormInputNumber name="someDecimalVal" label="Some Decimal Value" /> 
                            <InputFields.FormInputDateTime name="someUTCDateTimeVal" label="Some UTC DateTime Value" /> 
                            <InputFields.FormInputDate name="someDateVal" label="Some Date Value" /> 
                            <InputFields.FormInputMoney name="someMoneyVal" label="Some Money Value" /> 
                            <InputFields.FormInputText name="someNVarCharVal" label="Some N Var Char Value" /> 
                            <InputFields.FormInputText name="someVarCharVal" label="Some Var Char Value" /> 
                            <InputFields.FormInputTextArea name="someTextVal" label="Some Text Value" /> 
                            <InputFields.FormInputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <InputFields.FormInputEmail name="someEmailAddress" label="Some Email Address" /> 
                            <InputFields.FormInputFile name="sampleImageUploadFile" label="Sample Image Upload" /> 
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
  
export default FormConnectedLandAddPlant;
