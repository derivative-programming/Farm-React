/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as PacUserTacListReportService from "../../services/PacUserTacList";
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPacUserTacListProps {
    name: string
    item: PacUserTacListReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColPacUserTacList: FC<ReportDetailTwoColPacUserTacListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR

    return (
        <div data-testid={name}>
        { showProcessing ?
            <Row>
                <Col  lg="12" md="12" xs="12">
                <div className="text-center  bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                </Col>
            </Row>
            :
            <>

            </>
        }
        </div>
    );
};

