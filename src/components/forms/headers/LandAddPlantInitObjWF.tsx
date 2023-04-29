import { FC } from "react";
import * as InitFormService from "../services/init/LandAddPlantInitObjWF";

export interface HeaderLandAddPlantProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitFormService.InitResultInstance;
}

const HeaderLandAddPlant: FC<HeaderLandAddPlantProps> = (props) => {
  const { name, isHeaderVisible = false, initData } = props;
  
  return (
    <dl
      data-testid={name}
      className="row text-start w-100 mt-3"
      hidden={!isHeaderVisible}
    >
      <dt className="col-sm-3">Land Name</dt>
      <dd className="col-sm-9">{initData.landName}</dd>
    </dl>
  );
};

export default HeaderLandAddPlant;
