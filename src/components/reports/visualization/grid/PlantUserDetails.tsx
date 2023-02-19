import React, { FC, ReactElement, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "../../../../App.scss";
import * as ReportService from "../../services/PlantUserDetails"; 
import { ReportColumnHeader } from "../../input-fields/ColumnHeader"; 
import * as ReportColumnDisplay from "./columns";

export interface ReportGridPlantUserDetailsProps {
    name: string
    sortedColumnName: string
    isSortDescending: boolean
    items: ReportService.QueryResultItem[]
    onSort(columnName: string): void
    onRowSelect(index: number): void
    onRowUnselect(index: number): void
    onSelectAll(): void
    onUnselectAll(): void
    onNavigateTo(url: string): void
}
export const ReportGridPlantUserDetails: FC<ReportGridPlantUserDetailsProps> = ({
    name,
    sortedColumnName,
    isSortDescending,
    items,
    onSort,
    onRowSelect,
    onRowUnselect,
    onSelectAll,
    onUnselectAll,
    onNavigateTo
}): ReactElement => {

    const initialCheckedIndexes: number[] = [];
    const [checkedIndexes, setCheckedIndexes] = useState(initialCheckedIndexes);


    const handleRowSelectCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>, index: number, rowCode: string) => {
        if (e.target.checked) {
            setCheckedIndexes(items.map((item: ReportService.QueryResultItem, index) => index));
            onRowSelect(index);
        } else {
            setCheckedIndexes(checkedIndexes.filter(item => item !== index));
            onRowUnselect(index);
        }
    };

    const onSelectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onSelectAll();
        } else {
            setCheckedIndexes(initialCheckedIndexes);
            onUnselectAll();
        }
    };

    const updateLinkPlantCodeColumnButtonClick = (code: string) => {
        onNavigateTo("/" + code);
    }

    const deleteLinkPlantCodeColumnButtonClick = (code: string) => {
        onNavigateTo("/" + code);
    }

    const detailsLinkPlantCodeColumnButtonClick = (code: string) => {
        onNavigateTo("/" + code);
    }

    return (
        <div
            data-testid={name}
            className="plants-list-button-body mt-3">
            <Table
                className="plants-list-table"
                striped
                bordered
                hover
                responsive
                size="xl"
            >
                <thead>
                    <tr>
                        <th id="plantCodeColumnHeader"> <Form.Check
                            inline
                            type="checkbox"
                            id="plantCode-select-all-rows-checkbox"
                            name="plantCode-select-all-rows-checkbox"
                            onChange={(e) => onSelectAllRows(e)}
                        /></th>
                        <ReportColumnHeader
                            forColumn="someIntVal"
                            isSortDescending={isSortDescending}
                            label="someIntVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someBigIntVal"
                            isSortDescending={isSortDescending}
                            label="someBigIntVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="isEditAllowed"
                            isSortDescending={isSortDescending}
                            label="isEditAllowed"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="isDeleteAllowed"
                            isSortDescending={isSortDescending}
                            label="isDeleteAllowed"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someFloatVal"
                            isSortDescending={isSortDescending}
                            label="someFloatVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someDecimalVal"
                            isSortDescending={isSortDescending}
                            label="someDecimalVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someUTCDateTimeVal"
                            isSortDescending={isSortDescending}
                            label="someUTCDateTimeVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someDateVal"
                            isSortDescending={isSortDescending}
                            label="someDateVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someMoneyVal"
                            isSortDescending={isSortDescending}
                            label="someMoneyVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someNVarCharVal"
                            isSortDescending={isSortDescending}
                            label="someNVarCharVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someVarCharVal"
                            isSortDescending={isSortDescending}
                            label="someVarCharVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someTextVal"
                            isSortDescending={isSortDescending}
                            label="someTextVal"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="somePhoneNumber"
                            isSortDescending={isSortDescending}
                            label="somePhoneNumber"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="someEmailAddress"
                            isSortDescending={isSortDescending}
                            label="someEmailAddress"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <ReportColumnHeader
                            forColumn="flavorName"
                            isSortDescending={isSortDescending}
                            label="flavorName"
                            onSort={onSort}
                            sortedColumnName={sortedColumnName} />

                        <th id="updateLinkPlantCodeCColumnHeader"></th>
                        <th id="deleteLinkPlantCodeColumnHeader"></th>
                        <th id="detailsLinkPlantCodeColumnHeader"></th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.length
                        ? items.map((item: ReportService.QueryResultItem, index) => {
                            return (
                                <tr key={index.toString()}> 
                                    <ReportColumnDisplay.ReportColumnDisplayNumber
                                        forColumn="someIntVal"
                                        rowIndex={index}
                                        value={item.someIntVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayNumber
                                        forColumn="someBigIntVal"
                                        rowIndex={index}
                                        value={item.someBigIntVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayCheckbox
                                        forColumn="isEditAllowed"
                                        rowIndex={index}
                                        isChecked={item.isEditAllowed}
                                    />

                                    <ReportColumnDisplay.ReportColumnDisplayCheckbox
                                        forColumn="isDeleteAllowed"
                                        rowIndex={index}
                                        isChecked={item.isDeleteAllowed}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayNumber
                                        forColumn="someFloatVal"
                                        rowIndex={index}
                                        value={item.someFloatVal}
                                    />

                                    <ReportColumnDisplay.ReportColumnDisplayNumber
                                        forColumn="someDecimalVal"
                                        rowIndex={index}
                                        value={item.someDecimalVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayDateTime
                                        forColumn="someUTCDateTimeVal"
                                        rowIndex={index}
                                        value={item.someUTCDateTimeVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayDate
                                        forColumn="someDateVal"
                                        rowIndex={index}
                                        value={item.someDateVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayMoney
                                        forColumn="someMoneyVal"
                                        rowIndex={index}
                                        value={item.someMoneyVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayText
                                        forColumn="someNVarCharVal"
                                        rowIndex={index}
                                        value={item.someNVarCharVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayText
                                        forColumn="someVarCharVal"
                                        rowIndex={index}
                                        value={item.someVarCharVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayText
                                        forColumn="someTextVal"
                                        rowIndex={index}
                                        value={item.someTextVal}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayPhoneNumber
                                        forColumn="somePhoneNumber"
                                        rowIndex={index}
                                        value={item.somePhoneNumber}
                                    />

                                    <ReportColumnDisplay.ReportColumnDisplayEmail
                                        forColumn="someEmailAddress"
                                        rowIndex={index}
                                        value={item.someEmailAddress}
                                    />
                                    <ReportColumnDisplay.ReportColumnDisplayText
                                        forColumn="flavorName"
                                        rowIndex={index}
                                        value={item.flavorName}
                                    /> 
                                </tr>
                            );
                        })
                        : null}
                </tbody>
            </Table>
        </div>
    );
}; 
