/**
 * Created by fgallucci on 28/05/15.
 */

'use strict';

module.exports = {
  server: {
    defaults  : {
      levels: {
        debug   : 0,
        info    : 1,
        warn    : 2,
        error   : 3,
        cleared : 4,
        critical: 5
      },
      colors: {
        debug   : 'red',
        info    : 'green',
        warn    : 'yellow',
        error   : 'red',
        cleared : 'green',
        critical: 'red'
      }
    },
    transports: {
      console: {
        level      : 'debug',
        prettyPrint: true,
        colorize   : true,
        silent     : false,
        timestamp: true
      },
      file   : {
        filename: process.env.NODE_ENV === 'TEST' ? 'test/server.log' : 'log/server.log',
        level   : 'debug',
        json    : false,
        maxsize : 5242880, //5MB
        maxFiles: 5
      }
    }
  },
  http  : {
    defaults  : {
      levels: {
        http: 0
      },
      colors: {
        http: 'magenta'
      }
    },
    transports: {
      console: {
        level      : 'http',
        prettyPrint: true,
        colorize   : true,
        silent     : false,
        timestamp  : false
      },
      file   : {
        filename: process.env.NODE_ENV === 'TEST' ? 'test/access.log' : 'log/access.log',
        level   : 'http',
        json    : false,
        maxsize : 5242880, //5MB
        maxFiles: 5
      }
    },

    format: 'tiny'
  }
};
