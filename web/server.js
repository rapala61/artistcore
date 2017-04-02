/* eslint-disable no-use-before-define, no-console*/

const http = require('http');
const throng = require('throng');
const app = require('../app');
const config = require('../config');

throng({
  workers: config.workers,
  master,
  start: worker,
});

function master() {
  console.log('This is the master process');
}

function worker(id) {
  console.log(`Starting worker ${id}`);
  http.createServer(app.callback()).listen(config.port);
}
