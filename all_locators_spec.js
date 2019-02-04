describe('Protractor all elements demo',function() {  

    function add (a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click(); 
    }

    it('locators',   () => {
        
          browser.get('http://juliemr.github.io/protractor-demo/');
          
          add(5,3);
          add(3,8);
          add(3,7);
          add(2,3);
          add(9,3);
          add(0,3);

          element.all(by.repeater('result in memory')).each(function(item) {
              item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
                console.log(text);
            });
          });
                 
    });

});