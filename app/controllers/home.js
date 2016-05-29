/**
 * Created by fgallucci on 29/05/16.
 */

var gpio = require("pi-gpio");

var router = module.exports = require('express').Router();

router.get("/",function(req,res){
  log.info("RASPBOOOOMMM  HOME");
  res.send("RASSPPBOOOOMMMMMMM!!!")
});

router.post("/move",function(req,res){
  gpio.write(16, 1, function() {
    sleep(1000);
    gpio.write(16, 0, function() {
      sleep(1000);
      if(!stopMotors)move();
    });
  });
});



