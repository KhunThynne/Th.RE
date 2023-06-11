import express, { Express, Request, Response, NextFunction } from 'express'
var logger = require('morgan');
var path = require('path');
const app: Express = express()
import { Server } from "socket.io";
var ErrorThynne = require('./midleware/ErrorThynne/index')
const port: number = 3000
app.engine('html', require('ejs').renderFile);

app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('title', 'Thynne');



app.use(express.static(path.join(__dirname, '../..', 'FrontEnd')));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route




app.get('/s', (req: Request, res: Response) => {
    res.send(`zxc`)
})
//app.use(ErrorThynne)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'FrontEnd', 'index.html'));
});
var server = app.listen(port, () => console.log(`Application is running on port ${port}`))

const io = new Server(server);
io.sockets.on('connection', function (socket: any) {
    console.log('listening on *:3000');
});