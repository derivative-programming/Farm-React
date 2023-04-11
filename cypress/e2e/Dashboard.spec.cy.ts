import { StepLog } from "../support/libs/steplog";
import { Dashboard } from "../support/pageobject/Dashboard";
import { Register } from "../support/pageobject/Register";

describe("Dashboard", () => {
	it("should check title is correct on Dashboard", () => {
		StepLog.writeLog("Register user and login");
		Register
			.openRegister()
			.registerUser("abc@def.com", "aA!23456", "myFirstName", "myLastName");
		Dashboard.shouldHaveTitle("Farm Dashboard");
	});
});