/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
} from "react";
import * as InitFormService from "../services/init/TacLoginInitObjWF";
import Parser from 'html-react-parser';
import {formatDate, formatDateTime} from "../../../common/utilities";

export interface HeaderTacLoginProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitFormService.InitResultInstance
}

const HeaderTacLogin: FC<HeaderTacLoginProps> = ({
  name,
  isHeaderVisible = false,
  initData,
}): ReactElement => {

  return (
    <dl data-testid={name}
      className="row text-start w-100 mt-3"
      hidden={!isHeaderVisible}>

    </dl>
  );
};

export default HeaderTacLogin;

