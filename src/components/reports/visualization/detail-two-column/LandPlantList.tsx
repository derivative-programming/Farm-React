/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as LandPlantListReportService from "../../services/LandPlantList";
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColLandPlantListProps {
    name: string
    item: LandPlantListReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColLandPlantList: FC<ReportDetailTwoColLandPlantListProps> = ({
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
            </>
        }
        </div>
    );
};

