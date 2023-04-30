import { StepLog } from "../libs/steplog";
import { Login } from "./Login";

export class Register {
	public static shouldHaveTitle(title: string, shouldHave = true): typeof Register {
		StepLog.writeLog("Verify title heading of the page");
		shouldHave ?
			cy.get(".card h2").should("have.text", title) :
			cy.get(".card h2").should("not.have.text", title);
		return Register; 
	}

	public static openRegister(): typeof Register {
		StepLog.writeLog("Open base URL of the App and navigate to register page");
		Login.openLogin();
		cy.get(`[data-testid="cancel-button"]`).click();
		return Register;
	}

	public static registerUser(email: string, password: string, firstName: string, lastName: string): typeof Register {
		StepLog.writeLog("Create user with given data");
		cy.get(`[data-testid="email"]`).clear().type(email);
		cy.get(`[data-testid="password"]`).clear().type(password, { parseSpecialCharSequences: false });
		cy.get(`[data-testid="confirmPassword"]`).clear().type(password, { parseSpecialCharSequences: false });
		cy.get(`[data-testid="firstName"]`).clear().type(firstName);
		cy.get(`[data-testid="lastName"]`).clear().type(lastName);
		cy.get(`[data-testid="submit-button"]`).click();

		StepLog.writeLog("Ensure there were no errors by checking the page title");
		this.shouldHaveTitle("Register", false);
		return Register;
	}
}