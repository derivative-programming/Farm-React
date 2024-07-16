import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/TacFarmDashboard";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColTacFarmDashboardProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColTacFarmDashboard: FC<ReportDetailThreeColTacFarmDashboardProps> = ({
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

                    </Row>
                </ListGroup>
            </Col>
            <Col>
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="fieldOnePlantListLinkLandCode"
                    buttonText="Field One-Plants"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() => {
                        logClick("ReportDetailThreeColLandPlantList","fieldOnePlantListLinkLandCode","");
                        onNavigateTo("/land-plant-list/" + item.fieldOnePlantListLinkLandCode);
                    }}
                />
            </Col>
            </Row>
        }
        </div>
    );
};

