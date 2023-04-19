import React, { FC, ReactElement } from "react"; 
import * as ReportService from "../../services/TacFarmDashboard";  
import { ReportInputButton } from "../../input-fields";

export interface ReportDetailTwoColTacFarmDashboardProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColTacFarmDashboard: FC<ReportDetailTwoColTacFarmDashboardProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {
  
    return ( 
        <div data-testid={name} className="mt-3" > 
          
            <ReportInputButton name="fieldOnePlantListLinkLandCode"
                type="submit"
                buttonText=" Field One-Plants"
                className=""
                isButtonCallToAction={true}
                isVisible={true}
                isEnabled={true}
                onClick={() => 
                    onNavigateTo("/land-plant-list/" + item.fieldOnePlantListLinkLandCode)
                } 
            />

        </div> 
    );
}; 
