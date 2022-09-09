//GUILLERMO VALENCIA MOSQUERA (A00373570)
//https://forms.gle/ju3R3o5wWVkjHkt39
const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
    console.log("Diosito, ayudame, ¡EL SERVIDOR CORREEEEEEEE!");
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */
app.get('/', (req, res) => {
    res.send("Diosito, ayudame")
});

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {

});

/*
Pseudocódigo



*/

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */

app.post('/', function (request, response) {
    response.send('');
});