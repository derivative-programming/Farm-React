import React, { FC, ReactElement, useState,useEffect } from "react";
import * as PacUserFlavorListService from "../../lookups/services/Flavor";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";
   
export interface ReportSelectFlavorProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectFlavor: FC<ReportSelectFlavorProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [flavors, setFlavors] = useState<ReportInputSelectOption[]>([])

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
        <ReportInputSelect 
            label={label} 
            name={name}
            options={flavors}
            />
         
    );
};
export default ReportSelectFlavor;
