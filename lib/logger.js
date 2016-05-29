/** Created by Juan Manuel Ventura */

'use strict';

var winston = require('winston');
var config = require('../config').logging;

var logger = new winston.Logger(config.server.defaults);
logger.add(winston.transports.Console, config.server.transports.console);
logger.add(winston.transports.File, config.server.transports.file);

var http = new winston.Logger(config.http.defaults);
http.add(winston.transports.Console, config.http.transports.console);
http.add(winston.transports.File, config.http.transports.file);


module.exports = logger;

module.exports.stream = {
  write: function (message) {
    if(message.indexOf("GET /pollme/") === 0)
    return;
    if(message.indexOf("GET /health") === 0)
    return;
    http.log('http', message.replace(/\s+/g, ' ').trim());
  }
};
