
const _npm_modules = require('./npm_modules');
const _common      = require('./common');
const _middleware  = require('./middleware');
const _models = require('../../models');

global.__base__ = {};
const path = {
  utils:__dirname,
  pages:__dirname+'/../client/pages',
  models:__dirname + '/../../models'
}
global.__base__.path = path;








exports.path         = path;
exports._npm_modules = _npm_modules
exports._common      = _common
exports._middleware  = _middleware
exports._models      = _models;
