/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const PacUserTestAsyncFileDownloadSubmitRequest = (data:PacUserTestAsyncFileDownloadRequest, pacCode:string) => {
    return apiCall({
      url: "/pac-user-test-async-file-download/" + pacCode,
      method: "post",
      data
    });
  };

  export const buildPacUserTestAsyncFileDownloadRequest = () => {
    const result:PacUserTestAsyncFileDownloadRequest = new SubmitRequestInstance();

      return result;
  }

export interface PacUserTestAsyncFileDownloadRequest {

}
export interface ResponseFull {
    data: SubmitResult;
}

export interface SubmitResult {

    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}

export class SubmitRequestInstance implements PacUserTestAsyncFileDownloadRequest {

    constructor() {  // create a new instance of the class

    }
}

export class SubmitResultInstance implements SubmitResult {

    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {

        this.success = false;
        this.message = '';
        this.validationErrors = [];
    }
}

export class SubmitValidationErrorInstance implements SubmitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}

