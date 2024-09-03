import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserPacListService from "../../lookups/services/Pac";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectPacProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
    isRequired?:boolean
    detailText?: string
  }

export const FormSelectPac: FC<FormSelectPacProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
    isRequired = false,
    detailText = '',
  }): ReactElement => {

    const [pacs, setPacs] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserPacListService.ResponseFull) => {
        // get default values in form select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserPacListService.QueryResult = response.data;
            const pacs = data.items.map(({ pacCode, pacName }) => ({ label: pacName, value:pacCode }));

            setPacs(pacs);
        }
    }

    useEffect(() => {
        PacUserPacListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    const isRequiredControl:boolean = isVisible && isRequired

    return (
        <FormInputSelect
            label={label}
            name={name}
            options={pacs}
            disabled={disabled}
            isVisible={isVisible}
            isRequired={isRequiredControl}
            autoFocus={autoFocus}
            detailText={detailText}
            />

    );
};
export default FormSelectPac;

