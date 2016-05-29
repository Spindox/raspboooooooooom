/**
 * Created by fgallucci on 28/05/15.
 */

'use strict';

//the server has to know its own (public) URL to send mails with the proper link
var server = {
  development: {
    port   : 3000,
    address : "https://pre-api-nse.valentino.ws"
  },
  production       : {
    port   : 3000,
    address : "https://pro-api-chat.valentino.ws"
  }
};

module.exports = server[process.env.NODE_ENV || 'development'];
