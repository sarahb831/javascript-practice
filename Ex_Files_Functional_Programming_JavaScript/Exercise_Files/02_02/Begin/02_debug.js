// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02

const DEBUG_MODE_ENABLED = false;
let debug;

if (DEBUG_MODE_ENABLED) {
  debug = printDebugMessage;
} else {
  debug =  doNothing;
}

debug("Some debug message")

function printDebugMessage(message) {
  console.log("DEBUG: " + message)
}

function doNothing() {}
// ...


// ...

// function printDebugMessage(message) {
//   console.log("DEBUG: " + message)
// }
//
// function doNothing() { }
