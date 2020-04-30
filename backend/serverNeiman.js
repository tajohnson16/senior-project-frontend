/**
 * Connects to Neiman MongoDB Collection.
 * Separate connections made for Neiman shoes,
 * belts, and watches.
 * 
 * @author Tim Johnson
 * Senior Project
 */

const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const Data = require('./dataNeiman');
const Data2 = require('./dataNeiman2');
const Data3 = require('./dataNeiman3');

const API_PORT = 3004;
const API_PORT2 = 3005;
const API_PORT3 = 3006;

const app = express();
const app2 = express();
const app3 = express();

app.use(cors());
app2.use(cors());
app3.use(cors());

const router = express.Router();
const router2 = express.Router();
const router3 = express.Router();

/**
 * Connects to Neiman Marcus database
 */
const dbRoute =
    'mongodb://localhost:27017/neiman-mens-prod';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

/**
 * Error handling
 */
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/**
 * Logging and parsing requested data in json format
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

/**
 * Fetches all available data from database
 */
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router2.get('/getData', (req, res) => {
    Data2.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router3.get('/getData', (req, res) => {
    Data3.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

/**
 * Appends '/api' for HTTP requests
 */
app.use('/api', router);
app2.use('/api', router2);
app3.use('/api', router3);

/**
 * Launches backend into ports
 */
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
app2.listen(API_PORT2, () => console.log(`LISTENING ON PORT ${API_PORT2}`));
app3.listen(API_PORT3, () => console.log(`LISTENING ON PORT ${API_PORT3}`));