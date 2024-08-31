import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserDynaFlowTaskTypeListService from "../../lookups/services/DynaFlowTaskType";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectDynaFlowTaskTypeProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
    isRequired?:boolean
    detailText?: string
  }

export const FormSelectDynaFlowTaskType: FC<FormSelectDynaFlowTaskTypeProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
    isRequired = false,
    detailText = '',
  }): ReactElement => {

    const [dynaFlowTaskTypes, setDynaFlowTaskTypes] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserDynaFlowTaskTypeListService.ResponseFull) => {
        // get default values in form select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserDynaFlowTaskTypeListService.QueryResult = response.data;
            const dynaFlowTaskTypes = data.items.map(({ dynaFlowTaskTypeCode, dynaFlowTaskTypeName }) => ({ label: dynaFlowTaskTypeName, value:dynaFlowTaskTypeCode }));

            setDynaFlowTaskTypes(dynaFlowTaskTypes);
        }
    }

    useEffect(() => {
        PacUserDynaFlowTaskTypeListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <FormInputSelect
            label={label}
            name={name}
            options={dynaFlowTaskTypes}
            disabled={disabled}
            isVisible={isVisible}
            isRequired={isRequired}
            autoFocus={autoFocus}
            detailText={detailText}
            />

    );
};
export default FormSelectDynaFlowTaskType;

