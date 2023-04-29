import { FC } from "react";
import { InitResultInstance } from "../services/init/LandPlantListInitReport";

export interface HeaderLandPlantListProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitResultInstance;
}

const HeaderLandPlantList: FC<HeaderLandPlantListProps> = (props) => {
  const { name, isHeaderVisible = false, initData } = props;

  return (
    <div className="ms-3">
      <dl
        data-testid={name}
        className="row text-start w-100 mt-3 p-3 border"
        hidden={!isHeaderVisible}
      >
        <dt className="col-sm-3">Land Name</dt>
        <dd className="col-sm-9">{initData.landName}</dd>
      </dl>
    </div>
  );
};

export default HeaderLandPlantList;
