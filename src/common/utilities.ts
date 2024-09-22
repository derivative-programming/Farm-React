import React from "react";
import moment from "moment";

export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const decimal_index = e.currentTarget.value.indexOf(".");
  if (decimal_index > -1) {
    const decimals = e.currentTarget.value.substring(
      decimal_index,
      e.currentTarget.value.length + 1
    );
    if (decimals.length > 2 && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  }
};
 

export const formatDate = (value:string) => { 
  let result = "";
  
  try {
      
    if(value === null)
    {
        return result;
    }
    
    // const dateTime:moment.Moment = moment.utc(value).local();
    const dateTime:moment.Moment = moment.utc(value);

    if(!dateTime.isValid()){
      return result;
    }
    
    if(dateTime.format("MM-DD-YYYY") === "12-31-1752"){
      return result;
    }

    // result = moment.utc(value).local().format("M/D/YYYY"); 
    result = moment.utc(value).format("M/D/YYYY"); 
    
  } catch (error) { 
    console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDate');
  }
  
  return result;
}

export const formatDateTime = (value:string) => {  
  let result = "";
  
  try {
      
    if(value === null)
    {
        return result;
    }

    const dateTime:moment.Moment = moment.utc(value).local();

    if(!dateTime.isValid()){
      return result;
    }
    
    if(dateTime.format("MM-DD-YYYY") === "12-31-1752"){
      return result;
    }

    result = moment.utc(value).local().format("M/D/YYYY h:m A");
    
  } catch (error) {
    console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDateTime');
  }
  return result;
}