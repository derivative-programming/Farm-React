/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/LandPlantListInitReport";
import Parser from 'html-react-parser'; 
import {formatDate, formatDateTime} from "../../../common/utilities";
 
export interface HeaderLandPlantListProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderLandPlantList: FC<HeaderLandPlantListProps> = ({
  name,
  isHeaderVisible=false,
  initData,
}): ReactElement => {

  const landNameHeaderIsVisible = true; 
  const currentDateHeaderValHeaderIsVisible = true; 
  const currentDateTimeHeaderValHeaderIsVisible = true; 

  return ( 
    <div className="ms-3">
      <dl data-testid={name} 
        className="row text-start w-100 mt-3 p-3 border" 
        hidden={!isHeaderVisible}>
        <> {/*landName*/}
          <dt className="col-sm-3" hidden={!landNameHeaderIsVisible}>Land Name</dt>
          <dd className="col-sm-9" hidden={!landNameHeaderIsVisible}>{Parser(initData.landName)}</dd>
        </> 
        <> {/*currentDateHeaderVal*/}
          <dt className="col-sm-3" hidden={!currentDateHeaderValHeaderIsVisible}>Current Date</dt>
          <dd className="col-sm-9" hidden={!currentDateHeaderValHeaderIsVisible}>{formatDate(initData.currentDateHeaderVal)}</dd>
        </>
        <> {/*currentDateTimeHeaderVal*/}
          <dt className="col-sm-3" hidden={!currentDateTimeHeaderValHeaderIsVisible}>Current Date Time</dt>
          <dd className="col-sm-9" hidden={!currentDateTimeHeaderValHeaderIsVisible}>{formatDateTime(initData.currentDateTimeHeaderVal)}</dd>
        </>
      </dl> 
    </div>
  );
};

export default HeaderLandPlantList;
