require('gnode');

var koa = require('koa');
var router = require('koa-router');
var app = module.exports = koa();

var api = require('./api');
var logger = require('./logger');

// middleware - custom logger
app.use(logger());

// middleware - router
app.use(router(app));

// API
api(app);

if (!module.parent) app.listen(3000);