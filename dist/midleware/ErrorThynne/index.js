"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var router = express.Router();
var path = require('path');
module.exports = (req, res, next) => {
    res.status(404).render(__dirname + "/views/error.html", { name: "sd" });
};
/*
module.exports = (options: any) => {
    return ErrorThynne
}
*/ 
