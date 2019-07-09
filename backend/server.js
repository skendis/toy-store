//Imports
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const db = require('./services/mongo.service.js').connect();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const express = require('express')
const app = express();

//App.Use
app.use(morgan('dev'));
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'kuki puki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, }
}))

//Routes
const toyRoute = require('./api/toy.route.js');

app.use('/api/toy', toyRoute);
app.get('/', (req, res) => res.send('Hello World!'));

const server = app.listen(port,
    () => console.log(`[express] Listening on port ${port}`));


const msgsDB = [];
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log("connected!!!!!")
    socket.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data)
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
