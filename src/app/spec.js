

describe('Test for sample input element', function() {
    it('should add a Name as Bratin', function() {
    browser.get('http://localhost:4200/');
    element(by.css('input')).sendKeys('Bratin');
     var myname= element(by.xpath('html/body/app-root/div/h1'));
   expect(myname.getText()).toEqual('Hello Bratin');
     });
   });