//Imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const db = require('./services/mongo.service.js').connect();
const session = require('express-session');
const cookieParser = require('cookie-parser');

//App.Use
app.use(morgan('dev'));
app.use(cors());
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

app.listen(port,
    () => console.log(`[express] Listening on port ${port}`));