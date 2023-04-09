import React, { FC, ReactElement, useState } from "react";
import { Button, Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import * as ReportService from "../../services/LandPlantList";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";

export interface ReportDetailThreeColLandPlantListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailThreeColLandPlantList: FC<ReportDetailThreeColLandPlantListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {
 

    return (
        <div data-testid={name} className='mt-3 w-100'>
            <Row><Col xs="1"></Col><Col>
                <ListGroup as="ol"> 
                    <Row> 
                    </Row>
                </ListGroup>
            </Col><Col xs="1"></Col></Row>
        </div>
    );
}; 
