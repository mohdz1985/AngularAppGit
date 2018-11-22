import { EmployeeListPage } from './employeelist.po';
import { ToastrService } from 'ngx-toastr';
import { } from 'jasmine';
import { browser } from 'protractor';

describe('Employee Add/Update', () => {
    let page: EmployeeListPage;

    beforeEach(() => {
        page = new EmployeeListPage();
        page.navigateTo();        
    });

    it('Should Add/Update Employee Record', () => {
        page.getFirstNameTextbox().sendKeys('Mohd');
        page.getLastNameTextbox().sendKeys('Zahid');
        page.getEmpCodeTextbox().sendKeys('691619');
        page.getOfficeTextbox().sendKeys('Noida');
        page.getPositionTextbox().sendKeys('Software Engineer');
       
        page.getSubmitButton().click();
        let msgText = page.getToastContainer().getInnerHtml();
        expect(msgText).toContain('Successfully');
        browser.pause();
       });
});