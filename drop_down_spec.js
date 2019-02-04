describe('Protractor all elements demo',function() {  

    function calc (a,b,c) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item) {

            item.getAttribute('value').then(function(values) {
                
                if(values==c) {
                    item.click();
                }

            });
          }); 

          // another way to select an element from drop-down list is using chain method: element(by.model('operator')).element(by.css('option:nth-child(1)')).click();
          
          element(by.id('gobutton')).click(); 
    }

    it('locators',   () => {
        
          browser.get('http://juliemr.github.io/protractor-demo/');
          calc(3,5,"MULTIPLICATION");
          calc(3,5,"DIVISION");
          calc(3,5,"DIVISION");
          calc(10,6,"ADDITION");
           
          element.all(by.repeater('result in memory')).each(function(item) {
            item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
              console.log(text);
          });
        });
    });

});