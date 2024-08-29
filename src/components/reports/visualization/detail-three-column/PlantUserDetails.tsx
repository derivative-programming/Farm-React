/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as PlantUserDetailsReportService from "../../services/PlantUserDetails"; 
import * as AsyncServices from "../../../services"; // NOSONAR
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";  
import { v4 as uuidv4 } from "uuid";

export interface ReportDetailThreeColPlantUserDetailsProps {
    name: string
    item: PlantUserDetailsReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPlantUserDetails: FC<ReportDetailThreeColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => { 
    const { logClick } = useAnalyticsDB();  // NOSONAR
    
    return (
        <div data-testid={name} className='mt-3 w-100'> 
        { showProcessing ? 
            <Row>
                <Col  lg="12" md="12" xs="12">
                <div className="text-center  bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                </Col>
            </Row>
            : 
            <Row><Col  lg="9" md="9" xs="12">
                <ListGroup as="ol"> 
                    <Row>
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                            label="Flavor Name"
                            value={item.flavorName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="otherFlavor"
                            label="Other Flavor"
                            value={item.otherFlavor}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                            label="Is Delete Allowed"
                            isChecked={item.isDeleteAllowed}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                            label="Is Edit Allowed"
                            isChecked={item.isEditAllowed}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                            label="Some Big Int Val"
                            value={item.someBigIntVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                            label="Some Bit Val"
                            isChecked={item.someBitVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                            label="Some Date Val"
                            value={item.someDateVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                            label="Some UTC Date Time Val"
                            value={item.someUTCDateTimeVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                            label="Some Decimal Val"
                            value={item.someDecimalVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                            label="Some Email Address"
                            value={item.someEmailAddress}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                            label="Some Phone Number"
                            value={item.somePhoneNumber}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                            label="Some Float Val"
                            value={item.someFloatVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                            label="Some Int Val"
                            value={item.someIntVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                            label="Some Money Val"
                            value={item.someMoneyVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                            label="Some Text Val"
                            value={item.someTextVal}
                            isVisible={true}
                        />
 
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                            label="Some Var Char Val"
                            value={item.someVarCharVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                            label="Some N Var Char Val"
                            value={item.someNVarCharVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someUniqueidentifierVal"
                            label="Some Uniqueidentifier Val"
                            value={item.someUniqueidentifierVal}
                            isVisible={true}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="phoneNumConditionalOnIsEditable"
                            label="Conditional Column"
                            value={item.phoneNumConditionalOnIsEditable}
                            conditionallyVisible={item.isEditAllowed}
                            isVisible={true}
                        />
                        
                        <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharAsUrl"
                            label="N Var Char As Url"
                            value={item.nVarCharAsUrl}
                            linkText="Click Here"
                            isVisible={true}
                        />

                    </Row>
                </ListGroup>
            </Col>
            <Col> 

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateButtonTextLinkPlantCode"
                    buttonText="Update Button Text"
                    isButtonCallToAction={true}
                    isVisible={false}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","updateButtonTextLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateButtonTextLinkPlantCode);
                    }}
                />

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="backToDashboardLinkTacCode"
                    buttonText="Back To Dashboard"
                    isButtonCallToAction={true}
                    isVisible={true}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","backToDashboardLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.backToDashboardLinkTacCode)
                    }}
                />



                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="randomPropertyUpdatesLinkPlantCode"
                    buttonText="Random Property Updates"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","randomPropertyUpdatesLinkPlantCode","");
                        const data: AsyncServices.PlantUserPropertyRandomUpdateRequest = {};
                        AsyncServices.PlantUserPropertyRandomUpdateSubmitRequest(data, item.randomPropertyUpdatesLinkPlantCode)
                            .then(() => onRefreshRequest())
                    } }
                /> 
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testFileDownloadLinkPacCode"
                    buttonText="Test File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","testFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = {};
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testFileDownloadLinkPacCode)
                            .then((response) => {
                                const contentDisposition = response.headers['content-disposition'];
                                let filename = uuidv4() + '.csv';

                                if (contentDisposition) {
                                    // Attempt to extract the filename*= value first, then fallback to filename=
                                    const filenameMatch = contentDisposition.match(/filename\*?=['"]?([^;'"]+)/);
                                    if (filenameMatch && filenameMatch[1]) {
                                        filename = decodeURIComponent(filenameMatch[1].replace(/UTF-8''/, ''));
                                    }
                                }

                                // Get the content type or default to "text/csv"
                                const contentType = response.headers['content-type'] || 'text/csv';

                                const blob = new Blob([response.data], { type: contentType });
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', filename);
                                document.body.appendChild(link);
                                link.click();
                            })
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalAsyncFileDownloadLinkPacCode"
                    buttonText="Test Conditional Async File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","testConditionalAsyncFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = {};
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testConditionalAsyncFileDownloadLinkPacCode)
                            .then((response) => {
                                const contentDisposition = response.headers['content-disposition'];
                                let filename = uuidv4() + '.csv';

                                if (contentDisposition) {
                                    // Attempt to extract the filename*= value first, then fallback to filename=
                                    const filenameMatch = contentDisposition.match(/filename\*?=['"]?([^;'"]+)/);
                                    if (filenameMatch && filenameMatch[1]) {
                                        filename = decodeURIComponent(filenameMatch[1].replace(/UTF-8''/, ''));
                                    }
                                }

                                // Get the content type or default to "text/csv"
                                const contentType = response.headers['content-type'] || 'text/csv';

                                const blob = new Blob([response.data], { type: contentType });
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', filename);
                                document.body.appendChild(link);
                                link.click();
                            })
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testAsyncFlowReqLinkPacCode"
                    buttonText="Test Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","testAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = {};
                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testAsyncFlowReqLinkPacCode)
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalAsyncFlowReqLinkPacCode"
                    buttonText="Test Conditional Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","testConditionalAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = {};
                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testConditionalAsyncFlowReqLinkPacCode)
                            .then(() => onRefreshRequest())
                    } }
                />

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="conditionalBtnExampleLinkTacCode"
                    buttonText="Conditional Btn Example"
                    isButtonCallToAction={true}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","conditionalBtnExampleLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.conditionalBtnExampleLinkTacCode)
                    }}
                />

            </Col>
            </Row>
        }
        </div>
    );
}; 
