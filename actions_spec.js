describe('actions demo',function() {  

    xit('Open posse.com website', () => {

         browser.get("http://posse.com/");

         element(by.model('userInputQuery')).sendKeys('river');
         browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys('London')).perform();

         browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
         browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
             browser.sleep(5000);
         });

    });

    it('Open London area', () => {

        browser.get("http://posse.com/");

        element(by.xpath('//*[contains(text(),"LONDON")]')).click().then(function() {
            browser.sleep(8000);
        });

        expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(64);

        element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();

        element(by.css('a[ng-href*="London/Borough Market"]')).click().then(function() {
            browser.sleep(5000);
        });

    });

});

