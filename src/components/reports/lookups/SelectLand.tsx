import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserLandListService from "../../lookups/services/Land";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectLandProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectLand: FC<ReportSelectLandProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [lands, setLands] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserLandListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserLandListService.QueryResult = response.data;
            const lands = data.items.map(({ landCode, landName }) => ({ label: landName, value:landCode }));

            //store the list of lands for the report component
            setLands(lands);
        }
    }

    useEffect(() => {
        // on init of report component, get the list of lands
        PacUserLandListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={lands}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectLand;

