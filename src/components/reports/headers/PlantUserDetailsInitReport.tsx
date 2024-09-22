/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/PlantUserDetailsInitReport";
import Parser from 'html-react-parser';

export interface HeaderPlantUserDetailsProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderPlantUserDetails: FC<HeaderPlantUserDetailsProps> = ({
  name,
  isHeaderVisible=false,
  initData,
}): ReactElement => {

  const plantNameHeaderIsVisible = true;

  return (
    <div className="ms-3">
      <dl data-testid={name}
        className="row text-start w-100 mt-3 p-3 border"
        hidden={!isHeaderVisible}>
        <> {/*plantName*/}
          <dt className="col-sm-3" hidden={!plantNameHeaderIsVisible}>Plant Name</dt>
          <dd className="col-sm-9" hidden={!plantNameHeaderIsVisible}>{Parser(initData.plantName)}</dd>
        </>
      </dl>
    </div>
  );
};

export default HeaderPlantUserDetails;

