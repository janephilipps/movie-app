var request = require('request-promise');


exports.popular = function() {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.API_KEY;
    return request(url, function(err, res, body){
        if (!err && res.statusCode === 200) {
            console.log('SUCCESS');
            var data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};

exports.search = function() {
    var url = 'https://api.themoviedb.org/3/search/movie?query=land&api_key=' + process.env.API_KEY;
    return request(url, function(err, res, body){
        if (!err && res.statusCode === 200) {
            console.log('SUCCESS');
            var data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};

exports.details = function(id) {
    var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.API_KEY;
    return request(url, function(err, res, body){
        if (!err && res.statusCode === 200) {
            console.log('SUCCESS');
            var data = body.body;
        } else {
            console.log('ERROR: ' + err);
        }
    })
};
