import { Login } from "../support/pageobject/Login";

describe("Login", () => {
	it("should check title is correct", () => {
		Login
			.openLogin()
			.shouldHaveTitle("Login");
	});
});