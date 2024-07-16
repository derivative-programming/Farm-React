import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserTriStateFilterListService from "../../lookups/services/TriStateFilter";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectTriStateFilterProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
  }

  export const ReportSelectTriStateFilter: FC<ReportSelectTriStateFilterProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
  }): ReactElement => {

    const [triStateFilters, setTriStateFilters] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserTriStateFilterListService.ResponseFull) => {

        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserTriStateFilterListService.QueryResult = response.data;
            const triStateFilters = data.items.map(({ triStateFilterCode, triStateFilterName }) => ({ label: triStateFilterName, value:triStateFilterCode }));

            setTriStateFilters(triStateFilters);
        }
    }

    useEffect(() => {
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

