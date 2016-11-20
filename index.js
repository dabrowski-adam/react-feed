const nodeStatic = require('node-static');
const open = require('open');

var serve = new nodeStatic.Server('./public/');

require('http').createServer((req, res) => {
    req.addListener('end', () => serve.serve(req, res));
    req.resume();
}).listen(8080);

/**
 * Open browser.
 */
open('http://localhost:8080');