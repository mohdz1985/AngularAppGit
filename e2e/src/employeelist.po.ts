import { browser, element, by, Key } from 'protractor';

export class EmployeeListPage {
    navigateTo() {
      return browser.get('/app-employees');
    }
  
       getFirstNameTextbox() {
        return element(by.name('FirstName'));
       }
       
       getLastNameTextbox() {
        return element(by.name('LastName'));
       }

       getPositionTextbox(){
           return element(by.name('Position'));
       }

       getEmpCodeTextbox(){
        return element(by.name('EmpCode'));
       }

       getOfficeTextbox(){
           return element(by.name('Office'));
       }

       getSubmitButton() {
        return element(by.id('btnSubmit'));
       }

       getResetButton() {
        return element(by.id('btnReset'));
       }

       getToastContainer(){
           return element(by.id('toast-container'))
       }
  }