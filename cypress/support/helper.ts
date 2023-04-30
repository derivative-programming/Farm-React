
import { TacRegisterPage } from "./pages/TacRegister"; 
import { TacLoginPage } from "./pages/TacLogin";

class Helper {
    
  getUniqueString(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRandomEmail(length: number): string {
    return this.getUniqueString(length) + '@sharklasers.com';
  }

  getRandomPassword(length: number): string {
    var result = '';
    var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    for (var i = 0; i < length; i++) {
      result += upperCharacters.charAt(Math.floor(Math.random() * upperCharacters.length));
      result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharacters.length));
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result + "!";
  }

  
	registerUser(email: string, password: string)  {

    const page = new TacRegisterPage();

    page.visit();

    const firstName = this.getUniqueString(10);
    const lastName = this.getUniqueString(10);
    

    page.setFieldEmail(email);
    page.setFieldPassword(password);
    page.setFieldConfirmPassword(password);
    page.setFieldFirstName(firstName);
    page.setFieldLastName(lastName);
    page.submitForm(); 
    cy.wait(2000);
   
	}

  
	loginUser(email: string, password: string)  {

    const page = new TacLoginPage();

    page.visit();

    page.setFieldEmail(email);
    page.setFieldPassword(password);
    page.submitForm(); 
    cy.wait(2000);
   
	}

  logOut() {
    cy.log('Logout...');
		cy.visit("/");  

    cy.get("[data-testid='header-logout-link']") 
    .click();
    cy.wait(2000);
  }
 
}
export default Helper;
