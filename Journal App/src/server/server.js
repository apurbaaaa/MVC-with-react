const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017.mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

