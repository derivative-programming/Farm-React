import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserFlavorListService from "../../lookups/services/Flavor";
import {useField } from 'formik';
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";
   
export interface FormSelectFlavorProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectFlavor: FC<FormSelectFlavorProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [flavors, setFlavors] = useState<FormInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserFlavorListService.QueryResult = response.data; 
            const flavors = data.items.map(({ flavorCode, flavorName }) => ({ label: flavorName, value:flavorCode }));

            setFlavors(flavors); 
        } 
    } 

    useEffect(() => {
        PacUserFlavorListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <FormInputSelect 
            label={label} 
            name={name}
            options={flavors}
            isVisible={isVisible}
            />
         
    );
};
export default FormSelectFlavor;
