import { TacRegisterPage as SubjectPage } from "../support/pages/TacRegister"; 
import Helper from '../support/helper';
import Password from "antd/lib/input/Password";

const subjectPage = new SubjectPage();

const helper = new Helper();
const email = helper.getRandomEmail(10); 
const password = helper.getRandomPassword(10);

describe("TacRegister Page", () => {
	before(() => {
		cy.clearLocalStorage();
		cy.visit("/");
		if(subjectPage.isLoginRequired()){
			cy.log('test email:' + email);
			cy.log('test pwd:' + password);
			helper.register(email,password); 
			helper.logOut();
		} 
	});
	
	beforeEach(() => { 
		cy.visit('/');
		helper.login(email, password);
		subjectPage.visit();
	}); 

	it("verify page url", () => {  
		subjectPage.verifyUrl();
	});

	it("verify page elements", () => {  
		subjectPage.verifyPageElements();
	});
});
