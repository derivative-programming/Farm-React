import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserTriStateFilterListService from "../../lookups/services/TriStateFilter";
import {useField } from 'formik';
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";
   
export interface FormSelectTriStateFilterProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectTriStateFilter: FC<FormSelectTriStateFilterProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [triStateFilters, setTriStateFilters] = useState<FormInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserTriStateFilterListService.QueryResult = response.data; 
            const triStateFilters = data.items.map(({ triStateFilterCode, triStateFilterName }) => ({ label: triStateFilterName, value:triStateFilterCode }));

            setTriStateFilters(triStateFilters); 
        } 
    } 

    useEffect(() => {
        PacUserTriStateFilterListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <FormInputSelect 
            label={label} 
            name={name}
            options={triStateFilters}
            isVisible={isVisible}
            />
         
    );
};
export default FormSelectTriStateFilter;
