/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as PlantUserDetailsReportService from "../../services/PlantUserDetails";
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPlantUserDetailsProps {
    name: string
    item: PlantUserDetailsReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColPlantUserDetails: FC<ReportDetailTwoColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR

    return (
        <div data-testid={name}>
        { showProcessing ?
            <Row>
                <Col  lg="12" md="12" xs="12">
                <div className="text-center  bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                </Col>
            </Row>
            :
            <>
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
            </>
        }
        </div>
    );
};

