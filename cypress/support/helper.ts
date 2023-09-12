
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

  
  getRandomNumber(length: number): number {
    let result = '';
    const characters = '123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result, 10);
  }

  getRandomBool(): boolean {
    return Math.random() >= 0.5;
  }

  getRandomDate(start = new Date(1970, 0, 1), end = new Date()): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

 getRandomDateString(start = new Date(1970, 0, 1), end = new Date()): string {
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // months are 0-indexed in JS
  const day = String(randomDate.getDate()).padStart(2, '0');

  return '${month}/${day}/${year}';
  }

  getRandomPhoneNumber(): string {
      const getRandomDigits = (length: number): string => {
          let result = '';
          for (let i = 0; i < length; i++) {
              result += Math.floor(Math.random() * 10).toString();  // random digit between 0 and 9
          }
          return result;
      }

      return `${getRandomDigits(3)}-${getRandomDigits(3)}-${getRandomDigits(4)}`;
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

  
	register(email: string, password: string)  {

    const page = new TacRegisterPage();

    page.visit();

    const firstName = this.getUniqueString(10);
    const lastName = this.getUniqueString(10);
    
    page.populateFormWithRandomValues();
    page.setFieldEmail(email);
    page.setFieldPassword(password);
    page.setFieldConfirmPassword(password); 
    page.submitForm(); 
    cy.wait(2000);
   
	}

  
	login(email: string, password: string)  {

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
