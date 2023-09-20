import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PlantUserDetails"; 
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";  

export interface ReportDetailThreeColPlantUserDetailsProps {
    name: string
    item: ReportService.QueryResultItem
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
    const { logClick } = useAnalyticsDB();
    
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
                    value={item.updateButtonTextLinkPlantCode}
                    isButtonCallToAction={true}
                    isVisible={false}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","updateButtonTextLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateButtonTextLinkPlantCode);
                    }}
                />

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="backToDashboardLinkTacCode"
                    buttonText="Back To Dashboard"
                    value={item.backToDashboardLinkTacCode}
                    isButtonCallToAction={true}
                    isVisible={true}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","backToDashboardLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.backToDashboardLinkTacCode)
                    }}
                />



                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="randomPropertyUpdatesLinkPlantCode"
                    buttonText="Random Property Updates"
                    value={item.randomPropertyUpdatesLinkPlantCode}
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","randomPropertyUpdatesLinkPlantCode","");
                        const data: any = {};
                        AsyncServices.PlantUserPropertyRandomUpdateSubmitRequest(data, item.randomPropertyUpdatesLinkPlantCode)
                            .then((response) => onRefreshRequest())
                    } }
                />
            </Col>
            </Row>
        }
        </div>
    );
}; 
