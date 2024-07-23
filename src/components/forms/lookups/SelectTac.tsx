import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserTacListService from "../../lookups/services/Tac";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectTacProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectTac: FC<FormSelectTacProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => {

    const [tacs, setTacs] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserTacListService.ResponseFull) => {
        // get default values in form select dropdown
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
        <FormInputSelect
            label={label}
            name={name}
            options={tacs}
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />

    );
};
export default FormSelectTac;

