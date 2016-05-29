/**
 * Created by fgallucci on 29/05/16.
 */

var gpio = require("pi-gpio");

var router = module.exports = require('express').Router();

router.get("/", function (req, res) {
  log.info("RASPBOOOOMMM  HOME");
  res.send("RASSPPBOOOOMMMMMMM!!!")
});

router.post("/move", function (req, res) {
  var i = req.query.pin;

  gpio.open(16, "output", function(err) {		// Open pin 16 for output
    gpio.write(16, 1, function() {			// Set pin 16 high (1)
      gpio.close(16);						// Close pin 16
    });
  });







});


