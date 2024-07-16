import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserLandListService from "../../lookups/services/Land";
import { FormInputSelect,FormInputSelectOption } from "../input-fields/InputSelect";

export interface FormSelectLandProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isVisible?:boolean
  }

export const FormSelectLand: FC<FormSelectLandProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isVisible = true,
  }): ReactElement => {

    const [lands, setLands] = useState<FormInputSelectOption[]>([])

    const initList = (response:PacUserLandListService.ResponseFull) => {

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
        <FormInputSelect
            label={label}
            name={name}
            options={lands}
            disabled={disabled}
            isVisible={isVisible}
            autoFocus={autoFocus}
            />

    );
};
export default FormSelectLand;

