const express = require('express');
const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig)
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

routes.post('/users', SessionController.store);
routes.post('spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;