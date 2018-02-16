require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const port =3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000}
}));
massive(process.env.CONNECTION_STRING).then(dbInstance =>app.set('db', dbInstance));

app.post('/api/auth/login');
app.post('/api/auth/register');
app.post('/api/auth/logout');
app.post('/api/properties');
app.get('/api/properties');
app.delete('/api/properties:id');

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});