import React, { FC, ReactElement, ReactNode } from "react";
import { Button, Badge } from "react-bootstrap"; 

export interface ReportInputButtonProps {
  name: string;
  buttonText: ReactNode;
  onClick(): void;
  isButtonCallToAction?: boolean;
  isVisible?: boolean;
  isEnabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  isButtonBadgeVisible?: boolean;
  buttonBadgeValue?: number; 
}

export const ReportInputButton: FC<ReportInputButtonProps> = ({
  name,
  buttonText,
  onClick,
  isButtonCallToAction = true,
  isVisible = true,
  isEnabled = true,
  className = "",
  type = "button",
  isButtonBadgeVisible = false,
  buttonBadgeValue = 0,
}): ReactElement => {


  let buttonVariant = "outline-secondary";
  if (isButtonCallToAction) {
    buttonVariant = "outline-primary";
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
      {isButtonBadgeVisible && (
        <>
          {" "}
          <Badge bg="secondary" pill className="ms-2">
            {buttonBadgeValue}
          </Badge>
        </>
      )}
    </Button>
  );
}; 
