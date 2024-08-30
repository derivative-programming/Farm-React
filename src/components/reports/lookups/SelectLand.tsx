import React, { FC, ReactElement, useState,useEffect } from "react";
import "../../../App.scss";
import * as PacUserLandListService from "../../lookups/services/Land";
import { ReportInputSelect,ReportInputSelectOption } from "../input-fields/InputSelect";

export interface ReportSelectLandProps {
    name: string
    label: string
    autoFocus?:boolean
    disabled?: boolean
    isFKListInactiveIncluded?: boolean
    isFKListSearchable?: boolean
  }

  export const ReportSelectLand: FC<ReportSelectLandProps> = ({
    name,
    label,
    autoFocus = false,
    disabled = false,
    isFKListInactiveIncluded = false,
    isFKListSearchable = false,
  }): ReactElement => {

    const [lands, setLands] = useState<ReportInputSelectOption[]>([])

    const initList = (response:PacUserLandListService.ResponseFull) => {
        // get default values in report select dropdown
        if(response &&
            response.data &&
            response.data.items )
        {
            const data:PacUserLandListService.QueryResult = response.data;

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
                const lands = filteredItems.map(({ landCode, landName }) => ({ label: landName, value:landCode }));

                //store the list of lands for the report component
                setLands(lands);
            }
            else {
                const lands = data.items.map(({ landCode, landName }) => ({ label: landName, value:landCode }));

                //store the list of lands for the report component
                setLands(lands);
            }
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

