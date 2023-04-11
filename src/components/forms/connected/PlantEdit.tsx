import React, { FC, ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
    Formik, 
    FormikHelpers,
} from "formik";
import * as FormService from "../services/PlantEdit"; 
import { AuthContext } from "../../../context/authContext";
import * as Yup from "yup";
import * as FormInput from "../input-fields"  
import * as Lookups from "../lookups";  
   
export interface FormProps {
    name?:string
  }

  export const FormConnectedPlantEdit: FC<FormProps> = ({
    name="formConnectedPlantEdit", 
  }): ReactElement => { 
    
    const [initPageResponse, setInitPageResponse] = useState(new FormService.InitResultInstance);
    const [initialValues, setInitialValues] = useState(new FormService.SubmitRequestInstance); 
    let lastApiSubmission:any = { 
            request: new FormService.SubmitResultInstance,
            response: new FormService.SubmitRequestInstance};     
    const [loading, setLoading] = useState(false); 
    const isInitializedRef = useRef(false); 

    const navigate = useNavigate();
    const { id } = useParams();
    const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";
 
    let initFormResponse: FormService.InitResult = new FormService.InitResultInstance; 

    const validationSchema  =  FormService.buildValidationSchema();

    const authContext = useContext(AuthContext);

    let headerErrors:string [] = [];

    const handleInit = (responseFull:any) => {
        
        const response: FormService.InitResult = responseFull.data; 

        if(!response.success)
        {
            return;
        } 

        setInitPageResponse({...response}) 

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
            setLoading(true);
            const responseFull: any = await FormService.submitForm(values,contextCode);
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
            navigateTo("plant-user-details","plantCode");
        } catch (error) {
            actions.setSubmitting(false);
        }
        finally {
          setLoading(false);
        }
    }; 

    const cancelButtonClick = (() => {
        navigateTo("plant-user-details","plantCode");
    });
    
    useEffect(() => {
        if(isInitializedRef.current){
            return;
        }
        isInitializedRef.current = true;
        FormService.initForm(contextCode)
        .then(response => handleInit(response));
    },[]); 

    useEffect(() => {
        const newInitalValues = FormService.buildSubmitRequest(initPageResponse);  
        setInitialValues({ ...newInitalValues });
    }, [initPageResponse]); 
    
    const navigateTo = (page: string, codeName:string) => { 
        let targetContextCode = contextCode; 
        Object.entries(initPageResponse)
        .forEach(([key, value]) => { 
            if(key == codeName)
            {
                if(value != ''
                    && value != '00000000-0000-0000-0000-000000000000') {
                    targetContextCode = value;
                } else {
                    return;
                }
            }
        })
        const url = '/' + page + '/' + targetContextCode; 
        navigate(url);
    }
    

    return ( 
        <div 
          className="p-0 d-flex flex-column align-items-center justify-content-center"
        
        >
          <Card
            className="mt-1 page-card"
            
          >
                <h2>Update Plant</h2> 

                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validate={handleValidate} 
                    onSubmit={async (values,actions) => {await submitButtonClick(values, actions)}}>
                    {(props) => (
                        <Form 
                            className=""
                            name={name} 
                            data-testid={name}
                            onReset={props.handleReset} 
                            onSubmit={props.handleSubmit}>  

                            <FormInput.ErrorDisplay name="headerErrors" errorArray={headerErrors} />
                            <Lookups.FormSelectFlavor name="flavorCode" label="Select A Flavor" /> 
                            <FormInput.FormInputText name="otherFlavor" label="Other Flavor" /> 
                            <FormInput.FormInputNumber name="someIntVal" label="Some Int Val" /> 
                            <FormInput.FormInputNumber name="someBigIntVal" label="Some Big Int Val" /> 
                            <FormInput.FormInputCheckbox name="someBitVal" label="Some Bit Val" /> 
                            <FormInput.FormInputCheckbox name="isEditAllowed" label="Is Edit Allowed" /> 
                            <FormInput.FormInputCheckbox name="isDeleteAllowed" label="Is Delete Allowed" /> 
                            <FormInput.FormInputNumber name="someFloatVal" label="Some Float Val" /> 
                            <FormInput.FormInputNumber name="someDecimalVal" label="Some Decimal Val" /> 
                            <FormInput.FormInputDateTime name="someUTCDateTimeVal" label="Some UTC Date Time Val" /> 
                            <FormInput.FormInputDate name="someDateVal" label="Some Date Val" /> 
                            <FormInput.FormInputMoney name="someMoneyVal" label="Some Money Val" /> 
                            <FormInput.FormInputText name="someNVarCharVal" label="Some N Var Char Val" /> 
                            <FormInput.FormInputText name="someVarCharVal" label="Some Var Char Val" /> 
                            <FormInput.FormInputTextArea name="someTextVal" label="Some Text Val" /> 
                            <FormInput.FormInputText name="somePhoneNumber" label="Some Phone Number" /> 
                            <FormInput.FormInputEmail name="someEmailAddress" label="Some Email Address" /> 
                            <FormInput.FormInputFile name="sampleImageUploadFile" label="Sample Image Upload" /> 
                            <div className="d-flex justify-content-between">
                                <Button type="submit"
                                    className="me-2 mt-3" 
                                    data-testid="submit-button">
                                    {
                                      loading &&
                                      (<Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="spinner-button"
                                      />)
                                    }
                                    <span className="sr-only">OK Button text</span>
                  
                                  </Button>
                                
                                <Button
                                    className="me-2 mt-3" 
                                    data-testid="cancel-button"
                                    onClick={() => {
                                        cancelButtonClick(); 
                                    }}
                                    variant="secondary"  
                                >
                                    Cancel Button text
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
