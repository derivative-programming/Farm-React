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
  }

export const FormSelectPac: FC<FormSelectPacProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => {

    const [pacs, setPacs] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserPacListService.ResponseFull) => {

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

    return (
        <FormInputSelect
            label={label}
            name={name}
            options={pacs}
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />

    );
};
export default FormSelectPac;

