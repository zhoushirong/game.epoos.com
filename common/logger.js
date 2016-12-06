"use strict";
let log4js = require('log4js');
let path = require('path');
let config = require('../config');
let env = process.env.NODE_ENV || "development";
let logger = log4js.getLogger('game');

log4js.configure({
	appenders: [
	{
		type: 'console'
	},
	{
		type: 'file',
		filename: path.join(__dirname,'../logs/game.log'),
		category: 'game'
	}
	]
});

logger.setLevel("INFO")

module.exports = logger;