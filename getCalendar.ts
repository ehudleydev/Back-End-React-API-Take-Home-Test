var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/getCalendar', function(req, res, next) {
  request({
    uri: 'https://api.cps.edu/Calendar/cps/calendarslist',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(body);
      } else {
        res.json(error);
      }
    }
  });
});

module.exports = router;