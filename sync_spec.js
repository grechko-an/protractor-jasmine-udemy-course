describe('Protractor syncronization handling steps',function() {  

    it('Sync in NONAngular js website', () => {
        var EC = protractor.ExpectedConditions;

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

        element(by.css('a[href*="loadAjax"]')).click();
        browser.wait(EC.invisibilityOf(element(by.id('loader'))),8000);
        element(by.id('results')).getText().then(function(text) {

             console.log(text);
        });     

    });


});