var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let currentDate = new Date();
  let targetDate = new Date("2021/08/06");  // 8/6
  let diff = (targetDate - currentDate) / 1000.0;
  let remainDays = parseInt(diff / 86400);
  diff %= 86400;
  let remainHours = parseInt(diff / 3600);
  diff %= 3600;
  let remainMinutes = parseInt(diff / 60);
  diff %= 60;

  let renderOptions = ['julia', 'hua', 'harden', 'jin'];
  // let renderOptions = ['julia'];
  // let renderOptions = ['hua'];
  // let renderOptions = ['harden'];
  // let renderOptions = ['jin'];
  let chosen = remainDays % renderOptions.length;
  res.render(renderOptions[chosen], { 
    title: '2021中央大學新生知訊網' ,
    countDownDays: remainDays
  });
});

module.exports = router;
