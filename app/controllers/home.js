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
  gpio.open(0,"output",function(err){
    if(err)console.log(err);
    gpio.open(1,"output",function(err){
      if(err)console.log(err);
      gpio.open(2,"output",function(err){
        if(err)console.log(err);
      });
    });

  });
  gpio.write(0, function() {
    console.log("0");
    gpio.write(1, function() {
      console.log("1");
      gpio.write(2, function() {
        console.log("2");
      });

    });
  });
});

router.post("/stop",function(req,res){

});


