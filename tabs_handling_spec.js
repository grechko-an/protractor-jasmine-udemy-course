describe('Protractor baby steps',function() {  
    it('Navigate to browser tabs', () => {

        browser.get("http://posse.com/");

        element(by.xpath('//*[contains(text(),"LONDON")]')).click().then(function() {
            browser.sleep(5000);
        });

        element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();

        element(by.css('a[ng-href*="London/River Island"]')).click().then(function() {

            browser.getTitle().then(function(title) {
                console.log(title + " title of the page before switching");
                browser.getAllWindowHandles().then(function(handles) {
                    browser.switchTo().window(handles[1]); 
                    browser.getTitle().then(function(title) {
                        console.log(title + " title of the page after switching");
                    browser.switchTo().window(handles[0]); 
                    browser.getTitle().then(function(title) {
                        console.log(title + " title of the page at 3rd time switching");
                    });
                });
              });
            });
        });
    });

});