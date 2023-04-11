import { MyAppAuthUI } from "../support/pageobject/MyAppAuthUI";

describe("Login", () => {
	it("should check title is correct", () => {
		MyAppAuthUI
			.openLogin()
			.shouldHaveTitle("Login");
	});
});