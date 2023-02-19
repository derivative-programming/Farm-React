import React, { FC, ReactElement, useState } from "react";
import { Button, Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import "../../../../App.scss";
import * as ReportService from "../../services/PlantUserDetails";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as ReportColumnDisplay from "../grid/columns";
import { ReportColumnDisplayCheckbox, ReportColumnDisplayDate, ReportColumnDisplayDateTime, ReportColumnDisplayEmail, ReportColumnDisplayMoney, ReportColumnDisplayNumber, ReportColumnDisplayPhoneNumber, ReportColumnDisplayText } from "./columns";

export interface ReportDetailThreeColPlantUserDetailsProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
}
export const ReportDetailThreeColPlantUserDetails: FC<ReportDetailThreeColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo
}): ReactElement => {
 
    return (
        <div data-testid={name} className='list-container mt-3 w-100'>
            <Row><Col xs="1"></Col><Col>
            <ListGroup as="ol">
                <Row> 
                    <ReportColumnDisplayText forColumn="flavorName" 
                        label="Flavor Name" 
                        value={item.flavorName} />  
                    <ReportColumnDisplayCheckbox forColumn="isDeleteAllowed" 
                        label="Is Delete Allowed" 
                        isChecked={item.isDeleteAllowed} /> 
                    <ReportColumnDisplayCheckbox forColumn="isEditAllowed" 
                        label="Is Edit Allowed" 
                        isChecked={item.isEditAllowed} /> 
                    <ReportColumnDisplayNumber forColumn="someDecimalVal" 
                        label="Some Big Int Val" 
                        value={item.someBigIntVal} />  
                    <ReportColumnDisplayCheckbox forColumn="someBitVal" 
                        label="Some Bit Val" 
                        isChecked={item.someBitVal} /> 
                    <ReportColumnDisplayDate forColumn="someDateVal" 
                        label="Some UTC Date Val" 
                        value={item.someDateVal} />  
                    <ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal" 
                        label="Some UTC Date Time Val" 
                        value={item.someUTCDateTimeVal} />  
                    <ReportColumnDisplayNumber forColumn="someDecimalVal" 
                        label="Some Decimal Val" 
                        value={item.someDecimalVal} />  
                    <ReportColumnDisplayEmail forColumn="someEmailAddress" 
                        label="Some Email Address" 
                        value={item.someEmailAddress} /> 
                    <ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber" 
                        label="Some Phone Number" 
                        value={item.somePhoneNumber} /> 
                    <ReportColumnDisplayNumber forColumn="someFloatVal" 
                        label="Some Float Val" 
                        value={item.someFloatVal} /> 
                    <ReportColumnDisplayNumber forColumn="someIntVal" 
                        label="Some Int Val" 
                        value={item.someIntVal} />  
                    <ReportColumnDisplayMoney forColumn="someMoneyVal" 
                        label="Some Money Val" 
                        value={item.someMoneyVal} />  
                    <ReportColumnDisplayText forColumn="someTextVal" 
                        label="Some Text Val" 
                        value={item.someTextVal} /> 
                    <ReportColumnDisplayText forColumn="someVarCharVal" 
                        label="Some Var Char Val" 
                        value={item.someVarCharVal} /> 
                    <ReportColumnDisplayText forColumn="someNVarCharVal" 
                        label="Some N Var Char Val" 
                        value={item.someNVarCharVal} />  
                </Row>
            </ListGroup>
            </Col><Col xs="1"></Col></Row>
        </div>
    );
}; 
