import React, { FC, ReactElement, useState } from "react";
import { Button, Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import * as ReportService from "../../services/TacFarmDashboard";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import { ReportInputButton } from "../../input-fields";

export interface ReportDetailTwoColTacFarmDashboardProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColTacFarmDashboard: FC<ReportDetailTwoColTacFarmDashboardProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {

    const fieldOnePlantListLinkLandCodeButtonClick = () => {
        onNavigateTo("/land-plant-list/" + item.fieldOnePlantListLinkLandCode);
    } 

    return ( 
        <div data-testid={name} className="mt-3" > 
          
            <ReportInputButton
             name=""
             type="submit"
             buttonText=" Field One-Plants"
             className=""
             isButtonCallToAction={true}
             isVisible={true}
             isEnabled={true}
             onClick={() => fieldOnePlantListLinkLandCodeButtonClick()} 
           />

        </div> 
    );
}; 
