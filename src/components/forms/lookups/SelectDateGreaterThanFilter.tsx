import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserDateGreaterThanFilterListService from "../../lookups/services/DateGreaterThanFilter";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";
   
export interface FormSelectDateGreaterThanFilterProps {
    name: string
    label: string 
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectDateGreaterThanFilter: FC<FormSelectDateGreaterThanFilterProps> = ({
    name,
    label, 
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => { 
    
    const [dateGreaterThanFilters, setDateGreaterThanFilters] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserDateGreaterThanFilterListService.ResponseFull) => {  
        // get default values in form select dropdown
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
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />
         
    );
};
export default FormSelectDateGreaterThanFilter;
