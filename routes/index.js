var express = require('express');
var router = express.Router();
var request = require('request');

const APIKEY = '&apikey=5ccacc41';
const BASEURL = 'http://www.omdbapi.com/?';

/* GET home page. */
router.get('/', function(req, res, next) {

  var url = BASEURL + 's=dhoom&r=json' + APIKEY;
  request(url, function(error, response, body){
    if(!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      
      res.render('index', { title: 'Find Movie Free', data: data });
    }
  });

});

module.exports = router;
