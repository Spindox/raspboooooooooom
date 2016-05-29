/** Created by Juan Manuel Ventura */

'use strict';

var fs = require('fs');
var path = require('path');
var debug = require('debug')('app:router');

/**
 * Recursively routes mounter helper
 * @module Core
 * @param {Object} app The express app
 */
module.exports.mount = function mountRoutes(app) {
  var basePath = path.resolve(__dirname, '../app/controllers');

  buildRoutes(basePath).sort(alphabetically).forEach(function (route) {
    app.use(route.path, require(route.handler));
    debug('mounted route %s', route.path);
  });

  function buildRoutes(folder, routes) {
    routes = routes || [];
    var folderPath = path.resolve(basePath, folder);
    var rootFolder = folder.replace(basePath, '') || '/';

    fs.readdirSync(folderPath).forEach(function (file) {
      if (fs.statSync(path.resolve(folderPath, file)).isDirectory()) return buildRoutes(path.join(folderPath, file), routes);

      routes.push({
        path:    file === 'index.js' ? rootFolder : path.join(rootFolder, path.basename(file, '.js')),
        handler: path.resolve(folderPath, file)
      });

    });
    return routes;
  }

};

function alphabetically(a, b) {
  return a.path < b.path ? -1 : 1;
}