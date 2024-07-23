import React, { FC, ReactElement, useState,useEffect } from "react"; 
import "../../../App.scss"; 
import * as PacUserDateGreaterThanFilterListService from "../../lookups/services/DateGreaterThanFilter";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";
   
export interface ReportSelectDateGreaterThanFilterProps {
    name: string
    label: string 
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectDateGreaterThanFilter: FC<ReportSelectDateGreaterThanFilterProps> = ({
    name,
    label, 
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    
    const [dateGreaterThanFilters, setDateGreaterThanFilters] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserDateGreaterThanFilterListService.ResponseFull) => {  
        // get default values in report select dropdown
        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserDateGreaterThanFilterListService.QueryResult = response.data; 
            const dateGreaterThanFilters = data.items.map(({ dateGreaterThanFilterCode, dateGreaterThanFilterName }) => ({ label: dateGreaterThanFilterName, value:dateGreaterThanFilterCode }));

            //store the list of dateGreaterThanFilters for the report component
            setDateGreaterThanFilters(dateGreaterThanFilters); 
        } 
    } 

    useEffect(() => {
        // on init of report component, get the list of dateGreaterThanFilters
        PacUserDateGreaterThanFilterListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <ReportInputSelect 
            label={label} 
            name={name}
            options={dateGreaterThanFilters}
            disabled={disabled}
            autoFocus={autoFocus}
            />
         
    );
};
export default ReportSelectDateGreaterThanFilter;
