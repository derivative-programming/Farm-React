import { StepLog } from "../libs/steplog";

export class Dashboard {
	public static shouldHaveTitle(title: string): typeof Dashboard {
		StepLog.writeLog("Verify title heading of the page");
		cy.get(".card h2").should("have.text", title);
		return Dashboard;
	}
}