import { Register } from "../support/pageobject/Register";

describe("Register", () => {
	it("should check title is correct on Register", () => {
		Register
			.openRegister()
			.shouldHaveTitle("Register");
	});
});