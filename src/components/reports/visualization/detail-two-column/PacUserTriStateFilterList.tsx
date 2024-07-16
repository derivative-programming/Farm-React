import React, { FC, ReactElement } from "react";
import * as ReportService from "../../services/PacUserTriStateFilterList";
import { Row } from "react-bootstrap";
import * as ReportColumnDisplay from "./columns";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportDetailTwoColPacUserTriStateFilterListProps {
    name: string
    item: ReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
}
export const ReportDetailTwoColPacUserTriStateFilterList: FC<ReportDetailTwoColPacUserTriStateFilterListProps> = ({
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

