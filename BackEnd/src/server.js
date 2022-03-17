const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://usuario1:usuario1@devspot.0zo0f.mongodb.net/DevSpot?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(___dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);