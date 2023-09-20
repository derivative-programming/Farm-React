import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserTacListService from "../../lookups/services/Tac";
import {useField } from 'formik';
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";
   
export interface FormSelectTacProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectTac: FC<FormSelectTacProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [tacs, setTacs] = useState<FormInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserTacListService.QueryResult = response.data; 
            const tacs = data.items.map(({ tacCode, tacName }) => ({ label: tacName, value:tacCode }));

            setTacs(tacs); 
        } 
    } 

    useEffect(() => {
        PacUserTacListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <FormInputSelect 
            label={label} 
            name={name}
            options={tacs}
            isVisible={isVisible}
            />
         
    );
};
export default FormSelectTac;
