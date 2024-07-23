import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserDynaFlowTypeListService from "../../lookups/services/DynaFlowType";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectDynaFlowTypeProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectDynaFlowType: FC<ReportSelectDynaFlowTypeProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [dynaFlowTypes, setDynaFlowTypes] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserDynaFlowTypeListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserDynaFlowTypeListService.QueryResult = response.data;
            const dynaFlowTypes = data.items.map(({ dynaFlowTypeCode, dynaFlowTypeName }) => ({ label: dynaFlowTypeName, value:dynaFlowTypeCode }));

            setDynaFlowTypes(dynaFlowTypes);
        }
    }

    useEffect(() => {
        PacUserDynaFlowTypeListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={dynaFlowTypes}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectDynaFlowType;

