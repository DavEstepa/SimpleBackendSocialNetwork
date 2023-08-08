const express = require('express');
const bodyParser = require('body-parser');

const placeRoutes = require('./routes/place-routes');
const userRoutes = require('./routes/user-routes');

const app = express()

app.use(bodyParser.json());
app.use('/api/places', placeRoutes); //Middleware for handle '/api/places/..' starting routes.
app.use('/api/users', userRoutes);

app.listen(5000);
