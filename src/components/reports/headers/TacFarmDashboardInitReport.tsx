/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/TacFarmDashboardInitReport";
import Parser from 'html-react-parser';

export interface HeaderTacFarmDashboardProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderTacFarmDashboard: FC<HeaderTacFarmDashboardProps> = ({
  name,
  isHeaderVisible=false,
  initData,
}): ReactElement => {

  const tacNameHeaderIsVisible = true;

  return (
    <div className="ms-3">
      <dl data-testid={name}
        className="row text-start w-100 mt-3 p-3 border"
        hidden={!isHeaderVisible}>
        <> {/*tacName*/}
          <dt className="col-sm-3" hidden={!tacNameHeaderIsVisible}>Tac Name</dt>
          <dd className="col-sm-9" hidden={!tacNameHeaderIsVisible}>{Parser(initData.tacName)}</dd>
        </>
      </dl>
    </div>
  );
};

export default HeaderTacFarmDashboard;

