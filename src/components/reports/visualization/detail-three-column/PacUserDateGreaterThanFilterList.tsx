/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PacUserDateGreaterThanFilterList";
import * as AsyncServices from "../../../services"; // NOSONAR
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColPacUserDateGreaterThanFilterListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPacUserDateGreaterThanFilterList: FC<ReportDetailThreeColPacUserDateGreaterThanFilterListProps> = ({
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
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterCode"
                            label=""
                            value={item.dateGreaterThanFilterCode}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDayCount"
                            label="Day Count"
                            value={item.dateGreaterThanFilterDayCount}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterDescription"
                            label="Date Greater Than Filter Description"
                            value={item.dateGreaterThanFilterDescription}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDisplayOrder"
                            label="Display Order"
                            value={item.dateGreaterThanFilterDisplayOrder}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="dateGreaterThanFilterIsActive"
                            label="Is Active"
                            isChecked={item.dateGreaterThanFilterIsActive}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterLookupEnumName"
                            label="Date Greater Than Filter Lookup Enum Name"
                            value={item.dateGreaterThanFilterLookupEnumName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterName"
                            label="Date Greater Than Filter Name"
                            value={item.dateGreaterThanFilterName}
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

