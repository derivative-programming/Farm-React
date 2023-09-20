import React, { FC, ReactElement, useState,useEffect } from "react"; 
import * as PacUserRoleListService from "../../lookups/services/Role";
import {useField } from 'formik';
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";
   
export interface ReportSelectRoleProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectRole: FC<ReportSelectRoleProps> = ({
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
