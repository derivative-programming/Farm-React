/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/PacUserDateGreaterThanFilterListInitReport";
import Parser from 'html-react-parser';
import {formatDate, formatDateTime} from "../../../common/utilities";

export interface HeaderPacUserDateGreaterThanFilterListProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderPacUserDateGreaterThanFilterList: FC<HeaderPacUserDateGreaterThanFilterListProps> = ({
  name,
  isHeaderVisible=false,
  initData,
}): ReactElement => {

  return (
    <div className="ms-3">
      <dl data-testid={name}
        className="row text-start w-100 mt-3 p-3 border"
        hidden={!isHeaderVisible}>

      </dl>
    </div>
  );
};

export default HeaderPacUserDateGreaterThanFilterList;

