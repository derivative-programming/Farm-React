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
  const [field, meta] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = !!meta.error && !!meta.touched
    
  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            let result = fileReader.result as string;
            if (result.includes(",")) {
                result = result.split(",")[1];
            }
            resolve(result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };
     
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        try {
            const base64 = await convertBase64(file);
            console.log(base64);
        } catch (error) {
            console.error("Error converting file to base64:", error);
        }
    }
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
           placeholder={placeholder}
            name={field.name}
            //value={field.value}
            onBlur={field.onBlur} 
            onChange={uploadImage}
            disabled={disabled}
            autoFocus={autoFocus}
            isInvalid={isInvalid} 
            size="sm"
          />
          <Form.Control.Feedback data-testid={errorDisplayControlName} className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   