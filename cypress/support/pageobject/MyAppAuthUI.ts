import { StepLog } from "../libs/steplog";

export class MyAppAuthUI {
	public static shouldHaveTitle(title: string, shouldHave = true): typeof MyAppAuthUI {
		StepLog.writeLog("Verify title heading of the page");
		shouldHave ?
			cy.get(".card h2").should("have.text", title) :
			cy.get(".card h2").should("not.have.text", title);
		return MyAppAuthUI;
	}

	public static openLogin(): typeof MyAppAuthUI {
		StepLog.writeLog("Open base URL of the App");
		cy.visit("/");
		return MyAppAuthUI;
	}

	public static openRegister(): typeof MyAppAuthUI {
		StepLog.writeLog("Open base URL of the App and navigate to register page");
		this.openLogin();
		cy.get(`[data-testid="cancel-button"]`).click();
		return MyAppAuthUI;
	}

	public static registerUser(email: string, password: string, firstName: string, lastName: string): typeof MyAppAuthUI {
		StepLog.writeLog("Create user with given data");
		cy.get(`[data-testid="email"]`).clear().type(email);
		cy.get(`[data-testid="password"]`).clear().type(password, { parseSpecialCharSequences: false });
		cy.get(`[data-testid="confirmPassword"]`).clear().type(password, { parseSpecialCharSequences: false });
		cy.get(`[data-testid="firstName"]`).clear().type(firstName);
		cy.get(`[data-testid="lastName"]`).clear().type(lastName);
		cy.get(`[data-testid="submit-button"]`).click();

		StepLog.writeLog("Ensure there were no errors by checking the page title");
		this.shouldHaveTitle("Register", false);
		return MyAppAuthUI;
	}
}