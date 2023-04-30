import { TacLoginPage as SubjectPage } from "../support/pages/TacLogin"; 
import Helper from '../support/helper';
import Password from "antd/lib/input/Password";

const subjectPage = new SubjectPage();

const helper = new Helper();
const email = helper.getRandomEmail(10); 
const password = helper.getRandomPassword(10);

describe("TacLogin Page", () => {
	before(() => {
		cy.clearLocalStorage();
		cy.visit("/");
		if(subjectPage.isLoginRequired()){
			cy.log('test email:' + email);
			cy.log('test pwd:' + password);
			helper.registerUser(email,password); 
			helper.logOut();
		} 
	});
	
	beforeEach(() => { 
		cy.visit('/');
		helper.loginUser(email, password);
		subjectPage.visit();
	}); 

	it("verify page url", () => {  
		subjectPage.verifyUrl();
	});

	it("verify page elements", () => {  
		subjectPage.verifyPageElements();
	});
});
