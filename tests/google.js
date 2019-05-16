module.exports = {
  '@disabled': false,

  'open google.com' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'search google nightwatch' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .saveScreenshot('./reports/search-result.png')
      .assert.containsText('#search', 'nightwatch')
      .end();
  }
};