import React, {
  FC,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Table } from "react-bootstrap";
import * as InitReportService from "../services/init/LandPlantListInitReport";
 
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

  return ( 
    <div className="ms-3">
      <dl data-testid={name} 
        className="row text-start w-100 mt-3 p-3 border" 
        hidden={!isHeaderVisible}>
        <dt className="col-sm-3">Land Name</dt><dd className="col-sm-9">{initData.landName}</dd>
      </dl> 
    </div>
  );
};

export default HeaderLandPlantList;
