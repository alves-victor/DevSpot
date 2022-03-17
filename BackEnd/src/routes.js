const express = require('express');
const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig)
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routes.post('/users', SessionController.store);
routes.post('spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;