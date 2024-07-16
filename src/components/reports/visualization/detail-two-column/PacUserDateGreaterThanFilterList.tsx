import React, { FC, ReactElement } from "react";
import * as ReportService from "../../services/PacUserDateGreaterThanFilterList";
import { Row } from "react-bootstrap";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPacUserDateGreaterThanFilterListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColPacUserDateGreaterThanFilterList: FC<ReportDetailTwoColPacUserDateGreaterThanFilterListProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
}): ReactElement => {
    const { logClick } = useAnalyticsDB();

    return (
        <div data-testid={name}>

        </div>
    );
};

