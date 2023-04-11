import { StepLog } from "../libs/steplog";

export class Login {
	public static shouldHaveTitle(title: string, shouldHave = true): typeof Login {
		StepLog.writeLog("Verify title heading of the page");
		shouldHave ?
			cy.get(".card h2").should("have.text", title) :
			cy.get(".card h2").should("not.have.text", title);
		return Login;
	}

	public static openLogin(): typeof Login {
		StepLog.writeLog("Open base URL of the App");
		cy.visit("/");
		return Login;
	}
}