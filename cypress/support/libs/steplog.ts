export abstract class StepLog {
	static writeLog(message: string) {
		cy.task("log", message, { timeout: 100000 });
	}
}