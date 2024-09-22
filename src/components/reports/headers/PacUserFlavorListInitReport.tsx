/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement
} from "react";
import * as InitReportService from "../services/init/PacUserFlavorListInitReport";
import Parser from 'html-react-parser';

export interface HeaderPacUserFlavorListProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitReportService.InitResultInstance
}

const HeaderPacUserFlavorList: FC<HeaderPacUserFlavorListProps> = ({
  name,
  isHeaderVisible=false,
  initData,
}): ReactElement => {

  const pacNameHeaderIsVisible = true;

  return (
    <div className="ms-3">
      <dl data-testid={name}
        className="row text-start w-100 mt-3 p-3 border"
        hidden={!isHeaderVisible}>
        <> {/*pacName*/}
          <dt className="col-sm-3" hidden={!pacNameHeaderIsVisible}>Pac Name</dt>
          <dd className="col-sm-9" hidden={!pacNameHeaderIsVisible}>{Parser(initData.pacName)}</dd>
        </>
      </dl>
    </div>
  );
};

export default HeaderPacUserFlavorList;

