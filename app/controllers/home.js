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
  gpio.open(16, "output", function (err) {
    if (err)console.log(err);
    gpio.write(16, 1, function () {
      
      gpio.write(16, 0, function () {

        //if (!stopMotors)move();
      });
    });

  });

});

router.post("/stop", function (req, res) {

});


