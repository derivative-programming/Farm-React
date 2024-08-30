import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserRoleListService from "../../lookups/services/Role";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectRoleProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isFKListInactiveIncluded?: boolean
    isFKListSearchable?: boolean
  }

  export const ReportSelectRole: FC<ReportSelectRoleProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isFKListInactiveIncluded = false,
    isFKListSearchable = false,
  }): ReactElement => {

    const [roles, setRoles] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserRoleListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserRoleListService.QueryResult = response.data;

            if(!isFKListInactiveIncluded) {
                // Filter out items where any property ending with "isactive" is false
                const filteredItems = data.items.filter(item => {
                    // Check if any property ending with "isactive" is false
                    return Object.keys(item).every(key => {
                        if (key.toLowerCase().endsWith('isactive')) {
                            return item[key] !== false;
                        }
                        return true;
                    });
                });
                const roles = filteredItems.map(({ roleCode, roleName }) => ({ label: roleName, value:roleCode }));

                //store the list of roles for the report component
                setRoles(roles);
            }
            else {
                const roles = data.items.map(({ roleCode, roleName }) => ({ label: roleName, value:roleCode }));

                //store the list of roles for the report component
                setRoles(roles);
            }
        }
    }

    useEffect(() => {
        // on init of report component, get the list of roles
        PacUserRoleListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={roles}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectRole;

