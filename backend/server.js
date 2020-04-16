const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const Data = require('./data');
const Data2 = require('./data2');
const Data3 = require('./data3');

const API_PORT = 3001;
const API_PORT2 = 3002;
const API_PORT3 = 3003;

const app = express();
const app2 = express();
const app3 = express();

app.use(cors());
app2.use(cors());
app3.use(cors());

const router = express.Router();
const router2 = express.Router();
const router3 = express.Router();


// this is our MongoDB database FOR SAKS
const dbRoute =
    'mongodb://localhost:27017/saks-mens-prod';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
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


// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create method
// this method adds new data in our database
router.post('/putData', (req, res) => {
    let data = new Data();

    const { categoryUrl, message } = req.body;

    if ((!categoryUrl && categoryUrl !== null) || !message) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.message = message;
    data.categoryUrl = categoryUrl;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use('/api', router);
app2.use('/api', router2);
app3.use('/api', router3);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
app2.listen(API_PORT2, () => console.log(`LISTENING ON PORT ${API_PORT2}`));
app3.listen(API_PORT3, () => console.log(`LISTENING ON PORT ${API_PORT3}`));