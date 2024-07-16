import React, { FC, ReactElement } from "react";
import * as ReportService from "../../services/LandPlantList";
import { Row } from "react-bootstrap";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColLandPlantListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColLandPlantList: FC<ReportDetailTwoColLandPlantListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();

    return (
        <div data-testid={name}>
            <Row data-testid="flavorCode-header"
                className="mt-3" >
                <ReportColumnDisplay.ReportColumnDisplayButton
                    forColumn="flavorCode"
                    value={item.flavorCode}
                    buttonText=" "
                    isButtonCallToAction={false}
                    isVisible={false}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColLandPlantList","flavorCode","");
                        onNavigateTo("//" + item.flavorCode)
                    }}
                />
            </Row>
            <Row data-testid="updateLinkPlantCode-header"
                className="mt-3" >
                <ReportColumnDisplay.ReportColumnDisplayButton
                    forColumn="updateLinkPlantCode"
                    value={item.updateLinkPlantCode}
                    buttonText=" Update"
                    isButtonCallToAction={true}
                    isVisible={false}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColLandPlantList","updateLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateLinkPlantCode)
                    }}
                />
            </Row>
            <Row data-testid="detailsLinkPlantCode-header"
                className="mt-3" >
                <ReportColumnDisplay.ReportColumnDisplayButton
                    forColumn="detailsLinkPlantCode"
                    value={item.detailsLinkPlantCode}
                    buttonText=" Details"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isEnabled={true}
                    onClick={() =>{
                        logClick("ReportDetailTwoColLandPlantList","detailsLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.detailsLinkPlantCode)
                    }}
                />
            </Row>
        </div>
    );
};

