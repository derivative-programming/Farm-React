import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/PacUserDateGreaterThanFilterListInitReport";

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

