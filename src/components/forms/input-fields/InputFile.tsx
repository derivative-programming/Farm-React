import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik'; 
   
export interface FormInputFileProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
}
   
export const FormInputFile: FC<FormInputFileProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
  isVisible = true,
}): ReactElement => {
  const [field, meta, helpers] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
    
  const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => { 
            let result = fileReader.result;
            if(result?.toString().includes(","))
            {
              result = result.toString().split(",")[1];
            }
            helpers.setValue(result)
        };
 
    });
  };
    
  const uploadImage = async (event: any) => {
    const files =  Array.from(event.target.files ?? []); 
    
    Array.from(files).forEach(file => {
      const base64 = convertBase64(file); 
    });  
  };
      
  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="file" 
           // placeholder={placeholder}
            name={field.name}
            //value={field.value}
            onBlur={field.onBlur} 
            onChange={(e) => uploadImage(e)}
            disabled={disabled}
            autoFocus={autoFocus}
            isInvalid={isInvalid} 
            size="sm"
          />
          <Form.Control.Feedback className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   