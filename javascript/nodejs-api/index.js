const express = require('express');
const expressjwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();

const jwtCheck = auth({
    audience: 'node-api',
    issuerBaseURL: 'https://dev-zwr7mb40qavwhnbs.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  

app.get('/public', (req, res) => {
    res.status(200).send('Hello, world!');
});

app.get('/private', jwtCheck, (req, res) => {
    res.status(200).send('Hello, private!');
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(8888, () => {
  console.log('API started on port 8888');
});