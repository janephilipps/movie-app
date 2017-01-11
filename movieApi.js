const request = require('request-promise');

exports.popular = () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;
    return request(url);
};

exports.search = (query) => {
    let url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.API_KEY}`;
    return request(url);
};

exports.details = (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
    return request(url);
};
