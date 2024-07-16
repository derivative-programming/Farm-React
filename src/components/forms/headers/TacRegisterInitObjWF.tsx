import React, {
  FC,
  ReactElement,
} from "react";
import * as InitFormService from "../services/init/TacRegisterInitObjWF";

export interface HeaderTacRegisterProps {
  name: string;
  isHeaderVisible: boolean;
  initData: InitFormService.InitResultInstance
}

const HeaderTacRegister: FC<HeaderTacRegisterProps> = ({
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

export default HeaderTacRegister;

