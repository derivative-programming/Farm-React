


export interface InitRequest {
    
}

export interface InitResult {
 
    email: string;
 
    password: string;
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}
 

export class InitResultInstance implements InitResult {
 
    email: string;
 
    password: string;
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.email = '';
 
        this.password = '';
 
        this.confirmPassword = '';
 
        this.firstName = '';
 
        this.lastName = '';
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


 