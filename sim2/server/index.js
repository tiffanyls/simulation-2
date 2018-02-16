require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const port =3001;

const app = express();

app.use(json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000}
}));

app.use((req,res, next) => {
    console.log('SESSION:', req.session);
    console.log('BODY:', req.body)
    next();
});

function registered(req,rest,next) {
    const username = '';
    if (req.body.username === username) {
        next(); 
} else {
    res.status(200).json({message:"Not registered, please register"});
}

massive(process.env.CONNECTION_STRING).then(dbInstance =>app.set('db', dbInstance));

app.post('/api/auth/login');
app.post('/api/auth/register');
app.post('/api/auth/logout');
app.post('/api/properties');
app.get('/api/properties');
app.delete('/api/properties:id');

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})};