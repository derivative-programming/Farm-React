import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserFlavorListService from "../../lookups/services/Flavor";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectFlavorProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectFlavor: FC<ReportSelectFlavorProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [flavors, setFlavors] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserFlavorListService.ResponseFull) => {

        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserFlavorListService.QueryResult = response.data;
            const flavors = data.items.map(({ flavorCode, flavorName }) => ({ label: flavorName, value:flavorCode }));

            setFlavors(flavors);
        }
    }

    useEffect(() => {
        PacUserFlavorListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={flavors}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectFlavor;

