import React, { FC, ReactElement, useState } from "react";
import { Button, Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import * as ReportService from "../../services/PlantUserDetails";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";

export interface ReportDetailThreeColPlantUserDetailsProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailThreeColPlantUserDetails: FC<ReportDetailThreeColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {

    const updateButtonTextLinkPlantCodeColumnButtonClick = (code: string) => {
        onNavigateTo("/plant-edit/" + code);
    }

    const randomPropertyUpdatesLinkPlantCodeColumnButtonClick = (code: string) => {
        const data: any = {};
        AsyncServices.PlantUserPropertyRandomUpdateSubmitRequest(data, code)
            .then((response) => onRefreshRequest())

    }

    return (
        <div data-testid={name} className='mt-3 w-100'>
            <Row><Col  lg="9" md="9" xs="12">
                <ListGroup as="ol"> 
                    <Row>
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                            label="Flavor Name"
                            value={item.flavorName}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="otherFlavor"
                            label="Other Flavor"
                            value={item.otherFlavor}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                            label="Is Delete Allowed"
                            isChecked={item.isDeleteAllowed}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                            label="Is Edit Allowed"
                            isChecked={item.isEditAllowed}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                            label="Some Big Int Val"
                            value={item.someBigIntVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                            label="Some Bit Val"
                            isChecked={item.someBitVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                            label="Some Date Val"
                            value={item.someDateVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                            label="Some UTC Date Time Val"
                            value={item.someUTCDateTimeVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                            label="Some Decimal Val"
                            value={item.someDecimalVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                            label="Some Email Address"
                            value={item.someEmailAddress}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                            label="Some Phone Number"
                            value={item.somePhoneNumber}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                            label="Some Float Val"
                            value={item.someFloatVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                            label="Some Int Val"
                            value={item.someIntVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                            label="Some Money Val"
                            value={item.someMoneyVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                            label="Some Text Val"
                            value={item.someTextVal}
                        />
 
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                            label="Some Var Char Val"
                            value={item.someVarCharVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                            label="Some N Var Char Val"
                            value={item.someNVarCharVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="SomeUniqueidentifierVal"
                            label="Some Uniqueidentifier Val"
                            value={item.someUniqueidentifierVal}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="phoneNumConditionalOnIsEditable"
                            label="Conditional Column"
                            value={item.phoneNumConditionalOnIsEditable}
                            conditionallyVisible={item.isEditAllowed}
                        />
                        
                        <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharAsUrl"
                            label="N Var Char As Url"
                            value={item.nVarCharAsUrl}
                            linkText="Click Here"
                        />

                    </Row>
                </ListGroup>
            </Col>
            <Col> 

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateButtonTextLinkPlantCode"
                    buttonText="Update Button Text"
                    value={item.updateButtonTextLinkPlantCode}
                    isButtonCallToAction={true}
                    onClick={() => updateButtonTextLinkPlantCodeColumnButtonClick(item.updateButtonTextLinkPlantCode)}
                />

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="randomPropertyUpdatesLinkPlantCode"
                    buttonText="Random Property Updates"
                    value={item.randomPropertyUpdatesLinkPlantCode}
                    isButtonCallToAction={false}
                    onClick={() => randomPropertyUpdatesLinkPlantCodeColumnButtonClick(item.randomPropertyUpdatesLinkPlantCode)}
                />
            </Col>
            </Row>
        </div>
    );
}; 
