const express = require('express');
const multer = require('multer');
const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


routes.post('/users', SessionController.store);
routes.post('spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;