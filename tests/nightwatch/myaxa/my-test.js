module.exports = {
  'Step 1' : function (client) {
    client
      .url('http://google.no')
      .pause(1000);

    // expect element  to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    client.expect.element('#lst-ib').to.have.css('display');

    // expect element <#lst-ib> to be an input tag
    client.expect.element('#lst-ib').to.be.an('input');

  },

  'Step 2' : function (client) {

    // expect element <#lst-ib> to be visible
    client.expect.element('#lst-ib').to.be.visible;

    client.end();
  }
};