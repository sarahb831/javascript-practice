var isAlienSorted = function(words, order) {
    // create map of char order in 'order' to standard ascii relative index
    // note that for fixed size of 'order' this isn't needed

    const decoder = new Array(26);
    for (let i = 0; i < order.length; i++) {
        decoder[asciiOffset(order[i])] = i;
    }

    for (let i = 0; i < words.length - 1; i++) { // remember to adjust for next word
        let w1 = words[i];
        let w2 = words[i+1];

        for (let j = 0; j < w1.length; j++) {
            if (w2[j] === undefined) return false; // wrong lex order 
            let val1 = decoder[asciiOffset(w1[j])];
            let val2 = decoder[asciiOffset(w2[j])];
            console.log('w1,w2,i,j', w1, w2, i, j, val1, val2)
            if (val1 > val2) return false;
            if (val1 !== val2) break; // move to next words
        }
    }
    return true;
}

const asciiOffset = char => {
    return (char.charCodeAt(0) - 'a'.charCodeAt(0));
}

let order = "hlabcdefgijkmnopqrstuvwxyz";
let words = ["hello","leetcode"];

let result = isAlienSorted(words, order);
console.log(result);

words = ["apple","app"]; 
order = "abcdefghijklmnopqrstuvwxyz"

result = isAlienSorted(words, order);
console.log('2nd: ', result);