//als Modul für InstaNode

var util = require("util"),
    exec = require("child_process").exec,
    child;

var command = "convert";

 
//private machen!
private function runCommand(pcommand) {
  console.log(pcommand);
  child = exec(pcommand, function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  }); 
}

function resizeImg(origFile, resultFile, rate) {
  var query = command + " " + origFile + " -resize " + rate + "% " + resultFile;
  runCommand(query);
}

function cropImg(origFile, resultFile, x, y, width, height) {
  
}

function sepiaImg(origFile, resultFile, rate) {
  var query = command;
}
