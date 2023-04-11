import { MyAppAuthUI } from "../support/pageobject/MyAppAuthUI";

describe("Register", () => {
	it("should check title is correct on Register", () => {
		MyAppAuthUI
			.openRegister()
			.shouldHaveTitle("Register");
	});
});