import React, { FC, ReactElement, useContext,useState,useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
import * as PacUserLandListService from "../../lookups/services/PacUserLandList";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../InputFields/InputSelect";
   
export interface ReportSelectLandProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

const ReportSelectLand: FC<ReportSelectLandProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [lands, setLands] = useState<ReportInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserLandListService.QueryResult = response.data; 
            const lands = data.items.map(({ landCode, landName }) => ({ label: landName, value:landCode }));

            setLands(lands); 
        } 
    } 

    useEffect(() => {
        PacUserLandListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <ReportInputSelect 
            label={label} 
            name={name}
            options={lands}
            />
         
    );
};
export default ReportSelectLand;
