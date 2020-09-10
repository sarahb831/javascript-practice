// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 01

// passing functions and anonymous functions as variables

const x = 1

function doIf(condition, func) {
  if (condition) {
    func();
  }
}

doIf(x===1, sayXis1);
doIf(x==='Bananas',sayXisBananas);
doIf(x < 10 && x > 0, sayXisBetween0And10);

doIf(x===1, function() { console.log('x is equal to 1'); });
doIf(x==='Bananas', function() { console.log("x is equal to 'Bananas'"); })
doIf(x < 10 && x > 0, function() { console.log('x is between 0 and 10'); })
/*
if (x === 1) {
  sayXis1()
}

if (x === "Bananas") {
  sayXisBananas()
}

if (x < 10 && x > 0) {
  sayXisBetween0And10()
}
*/
function sayXis1() { console.log("x is equal to 1") }

function sayXisBananas() { console.log("x is equal to 'Bananas'") }

function sayXisBetween0And10() { console.log("x is between 0 and 10") }
