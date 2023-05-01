import React, { FC, ReactElement } from "react";
import { Button } from "react-bootstrap"; 

export interface ReportInputButtonProps {
  name: string;
  buttonText: any;
  onClick(): void;
  isButtonCallToAction?: boolean;
  isVisible?: boolean;
  isEnabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const ReportInputButton: FC<ReportInputButtonProps> = ({
  name,
  buttonText,
  onClick,
  isButtonCallToAction = true,
  isVisible = true,
  isEnabled = true,type,

  className = "",
}): ReactElement => {


  let buttonVariant = "secondary";
  if (isButtonCallToAction) {
    buttonVariant = "primary";
  }

  return (
    <Button
      data-testid={name}
      className={className}
      id={name}
      type={type}
      onClick={onClick}
      hidden={!isVisible}
      disabled={!isEnabled}
      variant={buttonVariant}
    >
      {buttonText}
    </Button>
  );
}; 
