
var assert = require('assert');

var quiche = require('../quiche');

describe('Pie Chart percentages', function() {
  var pie = quiche('pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Foo', 'FF0000');
  pie.addData(2900, 'Bas', '0000FF');
  pie.addData(1500, 'Bar', '00FF00');
  pie.setLabel(['Foo','Bas','Bar']);
  var url = pie.getUrl();

  it('should return a url', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a pie chart', function() {
    assert.ok(url.indexOf('cht=p') > 0);
  });
  it('should have labels', function(){
    assert.ok(url.indexOf('chl=Foo%7CBas%7CBar') !== -1);
  });
});
