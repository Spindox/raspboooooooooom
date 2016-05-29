/**
 * Created by fgallucci on 29/05/16.
 */

var gpio = require("rpi-gpio");

var router = module.exports = require('express').Router();

router.get("/", function (req, res) {
  log.info("RASPBOOOOMMM  HOME");
  res.send("RASSPPBOOOOMMMMMMM!!!")
});

router.post("/move", function (req, res) {
  var i = req.query.pin;

  gpio.setup(i, gpio.DIR_OUT, function(){
    gpio.write(i, true, function(err) {
      if (err) throw err;
      console.log('Written to pin');
    });
  });







});


