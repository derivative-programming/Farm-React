import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserFlavorListService from "../../lookups/services/Flavor";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectFlavorProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isFKListInactiveIncluded?: boolean
    isFKListSearchable?: boolean
  }

  export const ReportSelectFlavor: FC<ReportSelectFlavorProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isFKListInactiveIncluded = false,
    isFKListSearchable = false,
  }): ReactElement => {

    const [flavors, setFlavors] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserFlavorListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserFlavorListService.QueryResult = response.data;

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
                const flavors = filteredItems.map(({ flavorCode, flavorName }) => ({ label: flavorName, value:flavorCode }));

                //store the list of flavors for the report component
                setFlavors(flavors);
            }
            else {
                const flavors = data.items.map(({ flavorCode, flavorName }) => ({ label: flavorName, value:flavorCode }));

                //store the list of flavors for the report component
                setFlavors(flavors);
            }
        }
    }

    useEffect(() => {
        // on init of report component, get the list of flavors
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

