import React, { FC, ReactElement } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as ReportService from "../../services/PacUserTacList";
import * as AsyncServices from "../../../services";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailThreeColPacUserTacListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPacUserTacList: FC<ReportDetailThreeColPacUserTacListProps> = ({
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
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="tacCode"
                            label=""
                            value={item.tacCode}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="tacDescription"
                            label="Tac Description"
                            value={item.tacDescription}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="tacDisplayOrder"
                            label="Display Order"
                            value={item.tacDisplayOrder}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="tacIsActive"
                            label="Is Active"
                            isChecked={item.tacIsActive}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="tacLookupEnumName"
                            label="Tac Lookup Enum Name"
                            value={item.tacLookupEnumName}
                            isVisible={true}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="tacName"
                            label="Tac Name"
                            value={item.tacName}
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

