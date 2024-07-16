import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/PacUserTriStateFilterListInitReport";

export interface HeaderPacUserTriStateFilterListProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderPacUserTriStateFilterList: FC<HeaderPacUserTriStateFilterListProps> = ({
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

export default HeaderPacUserTriStateFilterList;

