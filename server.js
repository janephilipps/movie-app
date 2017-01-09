const express = require('express');
const movieApi = require('./movieApi');

const app = express();

app.set('port', (process.env.PORT || 8000));

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.get('/api/popular', function(req, res) {
    console.log('getting popular movies');
    movieApi.popular().then(function(data) {
        res.send(data);
    });
});

app.get('/api/search', function(req, res) {
    movieApi.search().then(function(data) {
        res.send(data);
    });
});

app.get('/api/movie/:id', function(req, res) {
    movieApi.details(req.params.id).then(function(data) {
        res.send(data);
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
