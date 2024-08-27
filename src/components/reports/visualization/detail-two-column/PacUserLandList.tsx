/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as PacUserLandListReportService from "../../services/PacUserLandList";
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPacUserLandListProps {
    name: string
    item: PacUserLandListReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColPacUserLandList: FC<ReportDetailTwoColPacUserLandListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR
    const LandIsActiveIsVisible = true;
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
                <Row data-testid="landCode-header"
                    className="mt-3"
                    hidden={!landCodeIsVisible}>
                    <ReportColumnDisplay.ReportColumnDisplayButton
                        forColumn="landCode"
                        value={item.landCode}
                        buttonText=" "
                        isButtonCallToAction={false}
                        isVisible={true}
                        isEnabled={true}
                        onClick={() =>{
                            logClick("ReportDetailTwoColPacUserLandList","landCode","");
                            onNavigateTo("//" + item.landCode)
                        }}
                    />
                </Row>
            </>
        }
        </div>
    );
};

