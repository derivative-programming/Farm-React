import React, { FC, ReactElement, useState,useEffect } from "react"; 
import * as PacUserTacListService from "../../lookups/services/Tac";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";
   
export interface ReportSelectTacProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectTac: FC<ReportSelectTacProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [tacs, setTacs] = useState<ReportInputSelectOption[]>([])

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
        <ReportInputSelect 
            label={label} 
            name={name}
            options={tacs}
            />
         
    );
};
export default ReportSelectTac;
