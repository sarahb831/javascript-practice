//const { toASCII } = require("punycode");

function alienSorting3(words, order) {
    let decoder = [];
    // create hashmap (not really necessary for fixed length alphabe)
    for (let i = 0; i < decoder.length; i++) {
        decoder[asciiIndex(order[i])] = i;
    }

    // compare each word to the next one for lex order
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];

        // if words have same prefix, 2nd one needs to be longer
        for (let j = 0; j < word1.length; j++) {
            if (j >= word2.length) return false; // make sure word2 hasn't ended
            let c1 = decoder[asciiIndex(word1[j])];
            let c2 = decoder[asciiIndex(word2[j])]; 
            if (c1 > c2) return false;
            if (c1 !== c2) break;
        }
    }
    return true;
}

function asciiIndex(char) {
    // convert char to ascii offset from 'a'
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

let order = "hlabcdefgijkmnopqrstuvwxyz";
let words = ["hello","leetcode"];

let result = alienSorting3(words, order);
console.log(result);

words = ["apple","app"]; 
order = "abcdefghijklmnopqrstuvwxyz"

result = alienSorting3(words, order);
console.log(result);