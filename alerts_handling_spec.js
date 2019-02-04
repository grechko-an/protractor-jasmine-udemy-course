describe('Protractor alert handling steps',function() {  

    it('Open NonAngular js alerts website', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click();

        browser.switchTo().alert().accept().then(function() {
            browser.sleep(3000);
        });

        element(by.id('confirmbtn')).click();

        browser.switchTo().alert().dismiss().then(function() {
            browser.sleep(3000);
        });

    });

});
