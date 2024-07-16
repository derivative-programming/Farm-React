import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/LandPlantList";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColLandPlantListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColLandPlantList: FC<ReportDetailThreeColLandPlantListProps> = ({
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
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                            label="Int Val"
                            value={item.someIntVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                            label="Big Int Val"
                            value={item.someBigIntVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                            label="Bit Val"
                            isChecked={item.someBitVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                            label="Edit Allowed"
                            isChecked={item.isEditAllowed}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                            label="Delete Allowed"
                            isChecked={item.isDeleteAllowed}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                            label="Float Val"
                            value={item.someFloatVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                            label="Decimal Val"
                            value={item.someDecimalVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                            label="Date Time Val"
                            value={item.someUTCDateTimeVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                            label="Date Val"
                            value={item.someDateVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                            label="Money Val"
                            value={item.someMoneyVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                            label="Some N Var Char Val"
                            value={item.someNVarCharVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                            label="Var Char Val"
                            value={item.someVarCharVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                            label="Text Val"
                            value={item.someTextVal}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                            label="Phone Number"
                            value={item.somePhoneNumber}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                            label="Email Address"
                            value={item.someEmailAddress}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                            label="Flavor Name"
                            value={item.flavorName}
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
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="flavorCode"
                    buttonText=""
                    isButtonCallToAction={false}
                    isVisible={false}
                    onClick={() => {
                        logClick("ReportDetailThreeCol","flavorCode","");
                        onNavigateTo("//" + item.flavorCode);
                    }}
                />
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateLinkPlantCode"
                    buttonText="Update"
                    isButtonCallToAction={false}
                    isVisible={false}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","updateLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateLinkPlantCode);
                    }}
                />
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="deleteAsyncButtonLinkPlantCode"
                    buttonText="Delete"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>{
                        logClick("ReportDetailThreeColPlantUserDetails","deleteAsyncButtonLinkPlantCode","");
                        const data: AsyncServices.PlantUserDeleteRequest = {};
                        AsyncServices.PlantUserDeleteSubmitRequest(data, item.deleteAsyncButtonLinkPlantCode)
                            .then(() => onRefreshRequest())
                    } }
                />
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="detailsLinkPlantCode"
                    buttonText="Details"
                    isButtonCallToAction={true}
                    isVisible={true}
                    onClick={() => {
                        logClick("ReportDetailThreeColPlantUserDetails","detailsLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.detailsLinkPlantCode);
                    }}
                />
            </Col>
            </Row>
        }
        </div>
    );
};

