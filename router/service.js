"use strict";
let fs = require("fs");
let path = require("path");
let express = require('express');
let router = express.Router();
let directory = null;

// 获取游戏列表
router.get("/game", function(req, res, next) {
	var arr = [{
		id: 1,
		title: "游戏1"
	}, {
		id: 2,
		title: "游戏2"
	}, {
		id: 3,
		title: "游戏3"
	}];
	res.json({
		"status": 1,
		"data": arr,
		serverTime: Date.now()
	});
});



module.exports = function() {
	return router;
};