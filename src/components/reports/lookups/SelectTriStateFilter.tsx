import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserTriStateFilterListService from "../../lookups/services/TriStateFilter";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectTriStateFilterProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isFKListInactiveIncluded?: boolean
    isFKListSearchable?: boolean
  }

  export const ReportSelectTriStateFilter: FC<ReportSelectTriStateFilterProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isFKListInactiveIncluded = false,
    isFKListSearchable = false,
  }): ReactElement => {

    const [triStateFilters, setTriStateFilters] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserTriStateFilterListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserTriStateFilterListService.QueryResult = response.data;

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
                const triStateFilters = filteredItems.map(({ triStateFilterCode, triStateFilterName }) => ({ label: triStateFilterName, value:triStateFilterCode }));

                //store the list of triStateFilters for the report component
                setTriStateFilters(triStateFilters);
            }
            else {
                const triStateFilters = data.items.map(({ triStateFilterCode, triStateFilterName }) => ({ label: triStateFilterName, value:triStateFilterCode }));

                //store the list of triStateFilters for the report component
                setTriStateFilters(triStateFilters);
            }
        }
    }

    useEffect(() => {
        // on init of report component, get the list of triStateFilters
        PacUserTriStateFilterListService.submitRequest()
        .then((response) => initList(response));
    },[]);

    return (
        <ReportInputSelect
            label={label}
            name={name}
            options={triStateFilters}
            disabled={disabled}
            autoFocus={autoFocus}
            />

    );
};
export default ReportSelectTriStateFilter;

