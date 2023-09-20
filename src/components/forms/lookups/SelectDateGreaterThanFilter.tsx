import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserDateGreaterThanFilterListService from "../../lookups/services/DateGreaterThanFilter";
import {useField } from 'formik';
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";
   
export interface FormSelectDateGreaterThanFilterProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectDateGreaterThanFilter: FC<FormSelectDateGreaterThanFilterProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [dateGreaterThanFilters, setDateGreaterThanFilters] = useState<FormInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserDateGreaterThanFilterListService.QueryResult = response.data; 
            const dateGreaterThanFilters = data.items.map(({ dateGreaterThanFilterCode, dateGreaterThanFilterName }) => ({ label: dateGreaterThanFilterName, value:dateGreaterThanFilterCode }));

            setDateGreaterThanFilters(dateGreaterThanFilters); 
        } 
    } 

    useEffect(() => {
        PacUserDateGreaterThanFilterListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <FormInputSelect 
            label={label} 
            name={name}
            options={dateGreaterThanFilters} 
            isVisible={isVisible}
            />
         
    );
};
export default FormSelectDateGreaterThanFilter;
