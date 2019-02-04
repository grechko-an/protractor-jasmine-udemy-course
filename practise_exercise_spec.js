describe('Protractor practise exercises',function() {  

    //take for cards into list
    function selectItems (product) {
        element.all(by.tagName('app-card')).each(function(item) {
            item.element(by.css('h4 a')).getText().then(function(text) {
              if (text==product) {
                  item.element(by.css('button[class*="btn-info"]')).click();
              }
          });
        });
    }

    xit('Open Angular js website and create an account', () => {

        browser.driver.manage().window().maximize();
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name('name')).sendKeys("Mystudents");
        element(by.css('input[name="email"]')).sendKeys("mystudents@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys("password2");
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText('select[id="exampleFormControlSelect1"] option', 'Female')).click();
        element.all(by.name('inlineRadioOptions')).first().click();
        element(by.name('bday')).sendKeys("10121983");
        element(by.buttonText('Submit')).click().then(function() {
            element(by.css('div[class*="success"]')).getText().then(function(text) {
                console.log(text);
            });
        // this step for handling danger alert is disabled  
        /*element(by.name('name')).clear();
        element(by.name('name')).sendKeys("M").then(function() {
            element(by.css('div[class="alert alert-danger"]')).getText().then(function(text) {
                console.log(text);
            });*/
          });
        expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0);
    });

    it('Add items to checkout', () => {

        browser.driver.manage().window().maximize();
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name('name')).sendKeys("Mystudents");
        element(by.css('input[name="email"]')).sendKeys("mystudents@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys("password2");
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText('select[id="exampleFormControlSelect1"] option', 'Female')).click();
        element.all(by.name('inlineRadioOptions')).first().click();
        element(by.name('bday')).sendKeys("10121983");
        element(by.buttonText('Submit')).click();
        element(by.linkText('Shop')).click();

        selectItems("Samsung Note 8");
        selectItems("iphone X");

        element(by.partialLinkText('Checkout')).getText().then(function(text) {
            var res = text.split('(');
            //var num = Number(res[1].trim().charAt(0));
            //var y = num+1;
            //console.log(y);
        
            expect(res[1].trim().charAt(0)).toBe('2');
        });

    });
        
});