/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react"; 
import * as TacFarmDashboardReportService from "../../services/TacFarmDashboard";   
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB"; 

export interface ReportDetailTwoColTacFarmDashboardProps {
    name: string
    item: TacFarmDashboardReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColTacFarmDashboard: FC<ReportDetailTwoColTacFarmDashboardProps> = ({
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
                <Row data-testid="conditionalBtnExampleLinkLandCode-header" 
                    className="mt-3" >  
                    <ReportColumnDisplay.ReportColumnDisplayButton 
                        forColumn="conditionalBtnExampleLinkLandCode" 
                        value={item.conditionalBtnExampleLinkLandCode}
                        buttonText="Conditional Btn Example"
                        isButtonCallToAction={true} 
                        isVisible={true}
                        isEnabled={true}
                        conditionallyVisible={item.isConditionalBtnAvailable}
                        onClick={() =>{
                            logClick("ReportDetailTwoColTacFarmDashboard","conditionalBtnExampleLinkLandCode","");
                            onNavigateTo("/land-plant-list/" + item.conditionalBtnExampleLinkLandCode)
                        }} 
                    />
                </Row> 
            </>
        }
        </div>
    );
}; 
