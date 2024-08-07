import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserDynaFlowTaskTypeListService from "../../lookups/services/DynaFlowTaskType";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectDynaFlowTaskTypeProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectDynaFlowTaskType: FC<ReportSelectDynaFlowTaskTypeProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [dynaFlowTaskTypes, setDynaFlowTaskTypes] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserDynaFlowTaskTypeListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserDynaFlowTaskTypeListService.QueryResult = response.data;
            const dynaFlowTaskTypes = data.items.map(({ dynaFlowTaskTypeCode, dynaFlowTaskTypeName }) => ({ label: dynaFlowTaskTypeName, value:dynaFlowTaskTypeCode }));

            //store the list of dynaFlowTaskTypes for the report component
            setDynaFlowTaskTypes(dynaFlowTaskTypes);
        }
    }

    useEffect(() => {
        // on init of report component, get the list of dynaFlowTaskTypes
        PacUserDynaFlowTaskTypeListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={dynaFlowTaskTypes}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectDynaFlowTaskType;

