import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserTacListService from "../../lookups/services/Tac";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectTacProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectTac: FC<ReportSelectTacProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [tacs, setTacs] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserTacListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserTacListService.QueryResult = response.data;
            const tacs = data.items.map(({ tacCode, tacName }) => ({ label: tacName, value:tacCode }));

            //store the list of tacs for the report component
            setTacs(tacs);
        }
    }

    useEffect(() => {
        // on init of report component, get the list of tacs
        PacUserTacListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={tacs}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectTac;

