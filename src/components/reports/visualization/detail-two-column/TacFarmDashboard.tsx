import React, { FC, ReactElement } from "react"; 
import * as ReportService from "../../services/TacFarmDashboard";  
import { ReportInputButton } from "../../input-fields";
import { Row } from "react-bootstrap";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB"; 

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
    const { logClick } = useAnalyticsDB();
  
    return ( 
        <div data-testid={name}>
            <Row data-testid="fieldOnePlantListLinkLandCode-header" 
                className="mt-3" >  
                <ReportColumnDisplay.ReportColumnDisplayButton 
                    forColumn="fieldOnePlantListLinkLandCode" 
                    value={item.fieldOnePlantListLinkLandCode}
                    buttonText=" Field One-Plants"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColTacFarmDashboard","fieldOnePlantListLinkLandCode","");
                        onNavigateTo("/land-plant-list/" + item.fieldOnePlantListLinkLandCode)
                    }} 
                />
            </Row> 
        </div>
    );
}; 
