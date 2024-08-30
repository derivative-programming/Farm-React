import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserDynaFlowTaskTypeListService from "../../lookups/services/DynaFlowTaskType";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectDynaFlowTaskTypeProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isFKListInactiveIncluded?: boolean
    isFKListSearchable?: boolean
  }

  export const ReportSelectDynaFlowTaskType: FC<ReportSelectDynaFlowTaskTypeProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isFKListInactiveIncluded = false,
    isFKListSearchable = false,
  }): ReactElement => {

    const [dynaFlowTaskTypes, setDynaFlowTaskTypes] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserDynaFlowTaskTypeListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserDynaFlowTaskTypeListService.QueryResult = response.data;

            if(!isFKListInactiveIncluded) {
                // Filter out items where any property ending with "isactive" is false
                const filteredItems = data.items.filter(item => {
                    // Check if any property ending with "isactive" is false
                    return Object.keys(item).every(key => {
                        if (key.toLowerCase().endsWith('isactive')) {
                            return item[key] !== false;
                        }
                        return true;
                    });
                });
                const dynaFlowTaskTypes = filteredItems.map(({ dynaFlowTaskTypeCode, dynaFlowTaskTypeName }) => ({ label: dynaFlowTaskTypeName, value:dynaFlowTaskTypeCode }));

                //store the list of dynaFlowTaskTypes for the report component
                setDynaFlowTaskTypes(dynaFlowTaskTypes);
            }
            else {
                const dynaFlowTaskTypes = data.items.map(({ dynaFlowTaskTypeCode, dynaFlowTaskTypeName }) => ({ label: dynaFlowTaskTypeName, value:dynaFlowTaskTypeCode }));

                //store the list of dynaFlowTaskTypes for the report component
                setDynaFlowTaskTypes(dynaFlowTaskTypes);
            }
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

