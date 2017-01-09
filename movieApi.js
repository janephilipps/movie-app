const request = require('request-promise');


exports.popular = () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;
    return request(url, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            let data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};

exports.search = (query) => {
    let url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.API_KEY}`;
    return request(url, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            let data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};

exports.details = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
    return request(url, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            let data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};
