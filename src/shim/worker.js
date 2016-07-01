/**
 * Provides a uniform interface to Web Workers for node and browser execution
 */
try {
	var path = require('path');
	var cwd = path.resolve('.');
} catch (e) { }

module.exports = (function() {
	try {
		try {
			var worker = require('workerjs');
			return function WorkerJSShim(url) {
				return new worker(path.resolve(cwd, url), true);
			};
		} catch(e) {
			return window.Worker;
		}
	} catch(e) {
		return self.Worker;
	}
})();

