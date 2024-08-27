/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement } from "react";
import * as PacUserTriStateFilterListReportService from "../../services/PacUserTriStateFilterList";
import { Col, Row, Spinner } from "react-bootstrap"; // NOSONAR
import * as ReportColumnDisplay from "./columns"; // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPacUserTriStateFilterListProps {
    name: string
    item: PacUserTriStateFilterListReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailTwoColPacUserTriStateFilterList: FC<ReportDetailTwoColPacUserTriStateFilterListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();  // NOSONAR
    const TriStateFilterIsActiveIsVisible = true;
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
                <Row data-testid="triStateFilterCode-header"
                    className="mt-3"
                    hidden={!triStateFilterCodeIsVisible}>
                    <ReportColumnDisplay.ReportColumnDisplayButton
                        forColumn="triStateFilterCode"
                        value={item.triStateFilterCode}
                        buttonText=" "
                        isButtonCallToAction={false}
                        isVisible={true}
                        isEnabled={true}
                        onClick={() =>{
                            logClick("ReportDetailTwoColPacUserTriStateFilterList","triStateFilterCode","");
                            onNavigateTo("//" + item.triStateFilterCode)
                        }}
                    />
                </Row>
            </>
        }
        </div>
    );
};

