import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserRoleListService from "../../lookups/services/Role";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectRoleProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectRole: FC<FormSelectRoleProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => {

    const [roles, setRoles] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserRoleListService.ResponseFull) => {
        // get default values in form select dropdown
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
        <FormInputSelect
            label={label}
            name={name}
            options={roles}
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />

    );
};
export default FormSelectRole;

