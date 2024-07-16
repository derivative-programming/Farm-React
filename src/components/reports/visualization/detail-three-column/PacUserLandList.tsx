/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PacUserLandList";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColPacUserLandListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPacUserLandList: FC<ReportDetailThreeColPacUserLandListProps> = ({
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
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="landCode"
                            label=""
                            value={item.landCode}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="landDescription"
                            label="Land Description"
                            value={item.landDescription}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="landDisplayOrder"
                            label="Display Order"
                            value={item.landDisplayOrder}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="landIsActive"
                            label="Is Active"
                            isChecked={item.landIsActive}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="landLookupEnumName"
                            label="Land Lookup Enum Name"
                            value={item.landLookupEnumName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="landName"
                            label="Land Name"
                            value={item.landName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="pacName"
                            label="Pac Name"
                            value={item.pacName}
                            isVisible={true}
                        />

                    </Row>
                </ListGroup>
            </Col>
            <Col>

            </Col>
            </Row>
        }
        </div>
    );
};

