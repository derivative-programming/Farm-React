import React, { FC, ReactElement, useContext } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "../../../App.scss";
import * as ReportService from "../services/LandPlantList";  
import sortUp from "../../../../assets/caret-up.png";
import sortDown from "../../../../assets/caret-down.png";
import { ReportColumnHeader } from "../InputFields/ColumnHeader";
import moment from "moment";
   
export interface ReportTableLandPlantListProps {
    name: string
    sortedColumnName: string
    isSortDescending: boolean
    items: ReportService.QueryResultItem[] 
    onSort(columnName:string): void
    onRowSelect(index:number): void
    onRowUnselect(index:number): void
    onSelectAll(): void
}
export const ReportTableLandPlantList: FC<ReportTableLandPlantListProps> = ({
    name,
    sortedColumnName,
    isSortDescending,
    items, 
    onSort,
    onRowSelect,
    onRowUnselect,
    onSelectAll
  }): ReactElement => { 

    
    const formatPhoneNumber = (phoneNumber: any) => {
        if (phoneNumber && phoneNumber.length === 10) {
            let cleaned = ('' + phoneNumber).replace(/\D/g, '');
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            } else {
                return phoneNumber
            }
        }
        return phoneNumber
    }

    return ( 
        <div
            data-testid={name}
             className="plants-list-button-body">
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
                <th> <Form.Check
                    inline
                    type="checkbox"
                    id="yes"
                    name="isCheck}"
                  //  checked={isCheckedAll()}
                  //  onChange={(e) => onSelectAll(e)}
                /></th>
                <th>#</th>
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
                    
                     
                <th></th>
                </tr>
            </thead>
            <tbody>
                {items && items.length
                ? items.map((item: ReportService.QueryResultItem, index) => {
                    return (
                    <tr key={index.toString()}>
                        <td>
                        {item.isDeleteAllowed ?
                            <Form.Check
                            inline
                            type="checkbox"
                            id={'yes' + index}
                            name={"isCheck_" + index}
                          //  checked={selectedItem.indexOf(item.plantCode) !== -1}
                          //  onChange={(e) => onCheckChange(e, item)}
                            /> : null}
                        </td> 
                        <td>{item.flavorName}</td>
                        <td>{item.flavorCode}</td>
                        <td>{item.someTextVal}</td>
                        <td>{item.someEmailAddress}</td>
                        <td>{formatPhoneNumber(item.somePhoneNumber)}</td>
                        <td>${item.someMoneyVal}</td>
                        <td>{item.someFloatVal}</td>
                        <td>{item.someDecimalVal}</td>
                        <td>{item.someIntVal}</td>
                        <td>{item.someBigIntVal}</td>
                        <td>{moment(item.someDateVal).format("M/D/YYYY")}</td>
                        <td>
                        {moment
                            .utc(item.someUTCDateTimeVal)
                            .format("M/D/YYYY h:m A")}
                        </td>
                        <td>{item.someVarCharVal}</td>
                        <td>{item.someNVarCharVal}</td>
                        <td>{`${item.someBitVal}`}</td>
                        <td>
                        <span className="action-buttons">
                            {item.isEditAllowed ? (
                            <img
                            //    src={editIcon}
                              //  onClick={() => onEditPlant(item)}
                                className="edit-icon"
                                data-testid="edit-btn"
                            />
                            ) : null}
                            {item.isDeleteAllowed ? (
                            <img
                           //     src={deleteIcon}
                             //   onClick={() => handleShow(item)}
                                className="edit-icon"
                                data-testid="delete-btn"
                            />
                            ) : null}
                            <img
                          //  src={eyeIcon}
                          //  onClick={() => onViewPlant(item)}
                            className="edit-icon"
                            data-testid="view-btn"
                            />
                        </span>
                        </td>
                    </tr>
                    );
                })
                : null}
            </tbody>
            </Table>
        </div>
    );
}; 
