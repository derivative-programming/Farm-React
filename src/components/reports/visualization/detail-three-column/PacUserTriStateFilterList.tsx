/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PacUserTriStateFilterList";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColPacUserTriStateFilterListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPacUserTriStateFilterList: FC<ReportDetailThreeColPacUserTriStateFilterListProps> = ({
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
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterCode"
                            label=""
                            value={item.triStateFilterCode}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterDescription"
                            label="Tri State Filter Description"
                            value={item.triStateFilterDescription}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="triStateFilterDisplayOrder"
                            label="Display Order"
                            value={item.triStateFilterDisplayOrder}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="triStateFilterIsActive"
                            label="Is Active"
                            isChecked={item.triStateFilterIsActive}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterLookupEnumName"
                            label="Tri State Filter Lookup Enum Name"
                            value={item.triStateFilterLookupEnumName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterName"
                            label="Tri State Filter Name"
                            value={item.triStateFilterName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="triStateFilterStateIntValue"
                            label="State Int Value"
                            value={item.triStateFilterStateIntValue}
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

