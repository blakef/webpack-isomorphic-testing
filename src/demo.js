import WebSocket from './shim/websocket';

const ws = new WebSocket('ws://echo.websocket.org');
let queue = [];

ws.addEventListener('message', msg => {
	console.log('Received Message');
    self.postMessage(`Received: ${msg.data.toUpperCase()}`);
	if ('close' in self) self.close();
});

ws.addEventListener('open', () => {
	queue.forEach(m => ws.send(m));
});

self.onmessage = function onmessage(msg) {
	console.log('Sending message');
	if (ws.readyState === ws.OPEN) {
		ws.send(msg.data);
	} else {
		queue.push(msg.data);
	}
};
