/**
 * Created by fgallucci on 29/05/16.
 */

'use strict';
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors  = require('cors');
const mounter = require('./lib/mounter');




global.log    = require('./lib/logger');
global.config = require('./config/index');


//app.use(timeout(20000));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(morgan(config.logging.http.format, { stream: log.stream }));

// routes
mounter.mount(app);


module.exports.start = function (port) {
  server.listen(3000, function () {
    const port = server.address().port;
    log.info(' Server started at port', port);
  });
  return server;
};


module.exports.stop = function () {
  server.close();
};
