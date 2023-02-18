import React, { FC, ReactElement, useContext,useState,useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
import * as PacUserRoleListService from "../../lookups/services/PacUserRoleList";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../InputFields/InputSelect";
   
export interface ReportSelectRoleProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

const ReportSelectRole: FC<ReportSelectRoleProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    
    const [roles, setRoles] = useState<ReportInputSelectOption[]>([])

    const initList = (response:any) => {  

        if(response && 
            response.data &&
            response.data.items )
        {
            const data:PacUserRoleListService.QueryResult = response.data; 
            const roles = data.items.map(({ roleCode, roleName }) => ({ label: roleName, value:roleCode }));

            setRoles(roles); 
        } 
    } 

    useEffect(() => {
        PacUserRoleListService.submitRequest()
        .then((response) => initList(response));
    },[]); 

    return ( 
        <ReportInputSelect 
            label={label} 
            name={name}
            options={roles}
            />
         
    );
};
export default ReportSelectRole;
