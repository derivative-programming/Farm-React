/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
} from "react";
import * as InitFormService from "../services/init/CustomerUserLogOutInitObjWF";
import Parser from 'html-react-parser';

export interface HeaderCustomerUserLogOutProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitFormService.InitResultInstance
}

const HeaderCustomerUserLogOut: FC<HeaderCustomerUserLogOutProps> = ({
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

export default HeaderCustomerUserLogOut;

