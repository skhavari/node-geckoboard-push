var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushLine;

function GeckoboardPushLine(params, widget_key) {
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushLine.prototype.send = function(items, callback) {
  /*
    http://docs.geckoboard.com/api/custom-charts.html#line
    items is an array of values, settings is an object containing axisx (an array of values), axisy (an array of values), and colour which is a hex value
  */
  this.prototype.send(items, callback);
}