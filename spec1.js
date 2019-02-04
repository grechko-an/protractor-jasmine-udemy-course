describe('Protractor baby steps',function() {  

    it('Open Angular js website', () => {
         browser.get("https://angularjs.org");
         browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
            console.log("I am the last step to execute");
         });
    });

    it('close browswer', () => {
    
    });

});