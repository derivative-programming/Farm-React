import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserPacListService from "../../lookups/services/Pac";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectPacProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectPac: FC<ReportSelectPacProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [pacs, setPacs] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserPacListService.ResponseFull) => {
        // get default values in report select dropdown
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
        <ReportInputSelect
            label={label}
            name={name}
            options={pacs}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectPac;

