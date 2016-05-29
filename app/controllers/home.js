/**
 * Created by fgallucci on 29/05/16.
 */

var router = module.exports = require('express').Router();

router.get("/",function(req,res){
  log.info("RASPBOOOOMMM  HOME");
  res.send("RASSPPBOOOOMMMMMMM!!!")
});