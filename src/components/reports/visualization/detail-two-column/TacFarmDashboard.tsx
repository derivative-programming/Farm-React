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

    const fieldOnePlantListLinkLandCodeIsVisible = true;
    const conditionalBtnExampleLinkLandCodeIsVisible = true;
    const IsConditionalBtnAvailableIsVisible = true; 
    const testFileDownloadLinkPacCodeIsVisible = true;
    const testConditionalFileDownloadLinkPacCodeIsVisible = true;
    const testAsyncFlowReqLinkPacCodeIsVisible = true;
    const testConditionalAsyncFlowReqLinkPacCodeIsVisible = true;
    
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
                    className="mt-3" 
                    hidden={!fieldOnePlantListLinkLandCodeIsVisible}>  
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
                    className="mt-3"
                    hidden={!conditionalBtnExampleLinkLandCodeIsVisible}>  
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
                <Row data-testid="testFileDownloadLinkPacCode-header" 
                    className="mt-3"
                    hidden={!testFileDownloadLinkPacCodeIsVisible}>  
                    <ReportColumnDisplay.ReportColumnDisplayButton 
                        forColumn="testFileDownloadLinkPacCode" 
                        value={item.testFileDownloadLinkPacCode}
                        buttonText="Test File Download"
                        isButtonCallToAction={true} 
                        isVisible={true}
                        isEnabled={true}
                        onClick={() =>{
                            logClick("ReportDetailTwoColTacFarmDashboard","testFileDownloadLinkPacCode","");
                            onNavigateTo("/land-plant-list/" + item.testFileDownloadLinkPacCode)
                        }} 
                    />
                </Row> 
                <Row data-testid="testConditionalFileDownloadLinkPacCode-header" 
                    className="mt-3"
                    hidden={!testConditionalFileDownloadLinkPacCodeIsVisible}>  
                    <ReportColumnDisplay.ReportColumnDisplayButton 
                        forColumn="testConditionalFileDownloadLinkPacCode" 
                        value={item.testConditionalFileDownloadLinkPacCode}
                        buttonText="Test Conditional File Download"
                        isButtonCallToAction={true} 
                        isVisible={true}
                        isEnabled={true}
                        conditionallyVisible={item.isConditionalBtnAvailable}
                        onClick={() =>{
                            logClick("ReportDetailTwoColTacFarmDashboard","testConditionalFileDownloadLinkPacCode","");
                            onNavigateTo("/land-plant-list/" + item.testConditionalFileDownloadLinkPacCode)
                        }} 
                    />
                </Row> 
                <Row data-testid="testAsyncFlowReqLinkPacCode-header" 
                    className="mt-3"
                    hidden={!testAsyncFlowReqLinkPacCodeIsVisible}>  
                    <ReportColumnDisplay.ReportColumnDisplayButton 
                        forColumn="testAsyncFlowReqLinkPacCode" 
                        value={item.testAsyncFlowReqLinkPacCode}
                        buttonText="Test Async Flow Req"
                        isButtonCallToAction={true} 
                        isVisible={true}
                        isEnabled={true}
                        onClick={() =>{
                            logClick("ReportDetailTwoColTacFarmDashboard","testAsyncFlowReqLinkPacCode","");
                            onNavigateTo("/land-plant-list/" + item.testAsyncFlowReqLinkPacCode)
                        }} 
                    />
                </Row> 
                <Row data-testid="testConditionalAsyncFlowReqLinkPacCode-header" 
                    className="mt-3"
                    hidden={!testConditionalAsyncFlowReqLinkPacCodeIsVisible}>  
                    <ReportColumnDisplay.ReportColumnDisplayButton 
                        forColumn="testConditionalAsyncFlowReqLinkPacCode" 
                        value={item.testConditionalAsyncFlowReqLinkPacCode}
                        buttonText="Test Conditional Async Flow Req"
                        isButtonCallToAction={true} 
                        isVisible={true}
                        isEnabled={true}
                        conditionallyVisible={item.isConditionalBtnAvailable}
                        onClick={() =>{
                            logClick("ReportDetailTwoColTacFarmDashboard","testConditionalAsyncFlowReqLinkPacCode","");
                            onNavigateTo("/land-plant-list/" + item.testConditionalAsyncFlowReqLinkPacCode)
                        }} 
                    />
                </Row> 
            </>
        }
        </div>
    );
}; 
