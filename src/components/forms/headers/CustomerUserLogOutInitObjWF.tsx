import React, {
  FC,
  ReactElement,
  // useContext,
  // useState,
} from "react";
// import { Table } from "react-bootstrap";
import * as InitFormService from "../services/init/CustomerUserLogOutInitObjWF";

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

