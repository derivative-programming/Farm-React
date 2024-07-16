/* eslint-disable @typescript-eslint/no-empty-interface */

export interface InitRequest {

}

export interface ResponseFull {
    data: InitResult;
}

export interface InitResult {
    customerCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitResultInstance implements InitResult {
    customerCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
        this.customerCode = '00000000-0000-0000-0000-000000000000';
        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}

export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}

