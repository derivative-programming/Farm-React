/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as ReportService from "../../services/PlantUserDetails";
import { Row } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPlantUserDetailsProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColPlantUserDetails: FC<ReportDetailTwoColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR

    return (
        <div data-testid={name}>
            <Row data-testid="updateButtonTextLinkPlantCode-header"
                className="mt-3" >
                <ReportColumnDisplay.ReportColumnDisplayButton
                    forColumn="updateButtonTextLinkPlantCode"
                    value={item.updateButtonTextLinkPlantCode}
                    buttonText=" Update Button Text"
                    isButtonCallToAction={true}
                    isVisible={false}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColPlantUserDetails","updateButtonTextLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateButtonTextLinkPlantCode)
                    }}
                />
            </Row>
            <Row data-testid="backToDashboardLinkTacCode-header"
                className="mt-3" >
                <ReportColumnDisplay.ReportColumnDisplayButton
                    forColumn="backToDashboardLinkTacCode"
                    value={item.backToDashboardLinkTacCode}
                    buttonText=" Back To Dashboard"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColPlantUserDetails","backToDashboardLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.backToDashboardLinkTacCode)
                    }}
                />
            </Row>
        </div>
    );
};

