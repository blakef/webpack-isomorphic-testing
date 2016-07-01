import Worker from './shim/worker';

let w = new Worker('mocachino_worker.js');
w.onmessage = function onmessage(msg) {
    console.log(`Received a message: ${msg.data}`);
};
w.onclose = function() {
    console.log('Worker has terminated');
};

w.postMessage('Hello, World!');
