/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PacUserFlavorList";
import * as AsyncServices from "../../../services"; // NOSONAR
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColPacUserFlavorListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPacUserFlavorList: FC<ReportDetailThreeColPacUserFlavorListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR

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
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                            label=""
                            value={item.flavorCode}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorDescription"
                            label="Flavor Description"
                            value={item.flavorDescription}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="flavorDisplayOrder"
                            label="Display Order"
                            value={item.flavorDisplayOrder}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="flavorIsActive"
                            label="Is Active"
                            isChecked={item.flavorIsActive}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorLookupEnumName"
                            label="Flavor Lookup Enum Name"
                            value={item.flavorLookupEnumName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                            label="Flavor Name"
                            value={item.flavorName}
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

