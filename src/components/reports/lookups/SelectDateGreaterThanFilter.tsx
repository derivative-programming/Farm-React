import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserDateGreaterThanFilterListService from "../../lookups/services/DateGreaterThanFilter";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";
   
export interface ReportSelectDateGreaterThanFilterProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectDateGreaterThanFilter: FC<ReportSelectDateGreaterThanFilterProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [dateGreaterThanFilters, setDateGreaterThanFilters] = useState<ReportInputSelectOption[]>([])

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
        <ReportInputSelect 
            label={label} 
            name={name}
            options={dateGreaterThanFilters}
            />
         
    );
};
export default ReportSelectDateGreaterThanFilter;
