exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['practise_exercise_spec.js'],

    capabilities: {
      'browserName': 'chrome'
    }

  };