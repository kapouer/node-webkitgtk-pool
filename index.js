var WebKit = require('webkitgtk');
var Pool2 = require('pool2');

module.exports = function(poolOpts, webkitgtkOpts) {
	return new Pool2(Object.assign({
		acquire: function(cb) {
			var view = new WebKit();
			view.init(webkitgtkOpts, cb);
		},
		dispose: function(view, cb) {
			view.unload(cb);
		},
		destroy: function(view) {
			view.destroy();
		}
	}, poolOpts));
};

