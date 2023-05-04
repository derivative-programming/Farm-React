import React, {
  FC,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Table } from "react-bootstrap";
import * as InitFormService from "../services/init/LandAddPlantInitObjWF";

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


  return (
    <dl data-testid={name}
      className="row text-start w-100 mt-3"
      hidden={!isHeaderVisible}>  
      <> {/*landName*/}
        <dt className="col-sm-3" hidden={!landNameHeaderIsVisible}>Land Name</dt>
        <dd className="col-sm-9" hidden={!landNameHeaderIsVisible}>{initData.landName}</dd>
      </>
    </dl>
  );
};

export default HeaderLandAddPlant;
