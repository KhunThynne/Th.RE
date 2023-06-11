"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var logger = require('morgan');
var path = require('path');
const app = (0, express_1.default)();
const socket_io_1 = require("socket.io");
var ErrorThynne = require('./midleware/ErrorThynne/index');
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.set('title', 'Thynne');
app.get('/', (req, res) => {
    res.send(`<head><title>${app.get('title')}</title> </head>`);
});
app.get('/s', (req, res) => {
    res.send(`zxc`);
});
app.use(ErrorThynne);
var server = app.listen(port, () => console.log(`Application is running on port ${port}`));
const io = new socket_io_1.Server(server);
io.sockets.on('connection', function (socket) {
    console.log('listening on *:3000');
});
