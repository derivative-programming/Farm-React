/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
} from "react";
import * as InitFormService from "../services/init/LandAddPlantInitObjWF";
import Parser from 'html-react-parser'; 
import {formatDate, formatDateTime} from "../../../common/utilities";

export interface HeaderLandAddPlantProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitFormService.InitResultInstance
}

const HeaderLandAddPlant: FC<HeaderLandAddPlantProps> = ({
  name,
  isHeaderVisible = false,
  initData,
}): ReactElement => {

  const landNameHeaderIsVisible = true; 
  const currentDateHeaderValHeaderIsVisible = true; 
  const currentDateTimeHeaderValHeaderIsVisible = true; 


  return (
    <dl data-testid={name}
      className="row text-start w-100 mt-3"
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
  );
};

export default HeaderLandAddPlant;
