// isPalindrome.js

var isPalin = function(s, cut = false) {
    let j = s.length - 1;
    for (let i = 0; i < s.length/2; i++, j--) {
        if (s[i] !== s[j]) {
            if (cut) return false;
            return isPalin(s.substring(i,j),true) ||
                isPalin(s.substring(i+1,j+1),true);
        }
    }
    return true;
}


var isPalindrome = function(s) {
    return isPalin(s);
};

let s = "abcda";
let answer = isPalindrome(s);
console.log(answer);