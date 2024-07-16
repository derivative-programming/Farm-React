import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserDynaFlowTypeListService from "../../lookups/services/DynaFlowType";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectDynaFlowTypeProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectDynaFlowType: FC<FormSelectDynaFlowTypeProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => {

    const [dynaFlowTypes, setDynaFlowTypes] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserDynaFlowTypeListService.ResponseFull) => {

        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserDynaFlowTypeListService.QueryResult = response.data;
            const dynaFlowTypes = data.items.map(({ dynaFlowTypeCode, dynaFlowTypeName }) => ({ label: dynaFlowTypeName, value:dynaFlowTypeCode }));

            setDynaFlowTypes(dynaFlowTypes);
        }
    }

    useEffect(() => {
        PacUserDynaFlowTypeListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <FormInputSelect
            label={label}
            name={name}
            options={dynaFlowTypes}
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />

    );
};
export default FormSelectDynaFlowType;

