describe('Protractor frames steps',function() {  

    it('Open NonAngular js alerts website', () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('http://qaclickacademy.com/practice.php');
        browser.switchTo().frame('courses-iframe');
        element(by.css('a[href*="sign_in"]')).getText().then(function(text) {
            console.log(text);            
        });

    });

});