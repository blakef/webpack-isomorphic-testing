var WebSocket = require('../src/shim/websocket');

var should = require('should');

describe('websocket', function() {
    var w;

    beforeEach(() => w = new WebSocket('ws://echo.websocket.org'));
    afterEach(() => w.close());

    it('websocket should echo back in upper case', done => {
        w.on('message', msg => {
            msg.should.eql('foo');
            done();
        }); 

        w.on('open', () => w.send('foo'));
    });

});
