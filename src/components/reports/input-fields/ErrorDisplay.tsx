import React, { FC, ReactElement } from "react"; 
   
export interface ReportErrorDisplayProps {
  name:string
  errorCsv?: string  
  errorArray?: string [] 
}
   
export const ReportErrorDisplay: FC<ReportErrorDisplayProps> = ({
  name="",
  errorCsv = "",
  errorArray = []
}): ReactElement => { 

  const errorArray2 = errorCsv.split(',');
  const allErrors = errorArray.concat(errorArray2)
      
  return (
    <div data-testid={name}> 
      {allErrors && allErrors.length > 0 ? ( 
          allErrors.map((item, index) => {
            return (
              <div className="error-message" key={item}>{item}</div>  
          );
        })
      ) : null}
    </div>
  );
};
   