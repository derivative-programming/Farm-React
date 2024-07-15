import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserTriStateFilterListService from "../../lookups/services/TriStateFilter";
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
    
    const [triStateFilters, setTriStateFilters] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserTriStateFilterListService.ResponseFull) => {  

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
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            />
         
    );
};
export default FormSelectTriStateFilter;
