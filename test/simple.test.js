var Worker = require('../src/shim/worker');

var should = require('should');

describe('webworker', function() {
    var w;

    beforeEach(() => w = new Worker('mocachino_worker.js'));
    afterEach(() => w.terminate());

    it('webworker should echo back in upper case', done => {
        w.onmessage = msg => {
            msg.data.should.eql('Received: FOO');
            done();
        }; 

        w.postMessage('foo');
    });

});
