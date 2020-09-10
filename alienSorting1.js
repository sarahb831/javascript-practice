
var isAlienSorted = function(words, order) {

    if (words.length < 2) return true;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            //console.log(words[i+1][j])
            if (words[i+1][j] === undefined) return false; // if subset, shorter one should be first
            if (order.indexOf(words[i][j]) > order.indexOf(words[i+1][j])) return false;
            if (words[i][j] !== words[i+1][j]) break; // different letters in proper order, so check next words
        }
    }
    return true;
}

let order = "hlabcdefgijkmnopqrstuvwxyz";
let words = ["hello","leetcode"];

let result = isAlienSorted(words, order);
console.log(result);

words = ["apple","app"]; 
order = "abcdefghijklmnopqrstuvwxyz"

result = isAlienSorted(words, order);
console.log('2nd: ', result);