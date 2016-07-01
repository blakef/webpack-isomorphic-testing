/**
 * * Provides a uniform interface to WebSocket for node and browser execution
 * */
module.exports = (function() {
    try {
        try {
            return require('ws');
        } catch(e) {
            return window.WebSocket;
        }
    } catch(e) {
        return self.WebSocket;
    }
})();

