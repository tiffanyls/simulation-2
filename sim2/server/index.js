const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstances =>app.set('db', dbInstance));

app.post('/api/auth/login');
app.post('/api/auth/register');
app.post('/api/auth/logout');
app.post('/api/properties');
app.get('/api/properties');
app.delete('/api/properties:id');