const cors = require('cors');
const express = require('express');
const movieApi = require('./movieApi');

const app = express();

app.use(cors());

app.set('port', (process.env.PORT || 8000));

app.get('/api/popular', (req, res) => {
    movieApi.popular().then((data) => {
        res.send(data);
    });
});

app.get('/api/search', (req, res) => {
    movieApi.search(req.query.query).then((data) => {
        res.send(data);
    });
});

app.get('/api/movie/:id', (req, res) => {
    movieApi.details(req.params.id).then((data) => {
        res.send(data);
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
