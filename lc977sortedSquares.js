// lc977sortedSquares.js

function lc977sortedSquares(A) {
let sortedSquares = new Array(A.length);

let i = A.length-1;
let pB = 0;
let pE = A.length-1;
let j = i;
while (pB <= pE) {
    let sqPB = Math.pow(A[pB],2);
    let sqPE = Math.pow(A[pE],2);
    if (sqPB < sqPE) {
        sortedSquares[i] = sqPE;
        pE--;
    } else {
        sortedSquares[i] = sqPB;
        pB++;
    }
    i--;
}

return sortedSquares;
};

const A = [-4,-1,0,3,10];

let expected = [0,1,9,16,100];
let answer = lc977sortedSquares(A);

function correctAnswer(expected, answer) {
    let expString = expected.join(',');
    let ansString = answer.join(',');
    return (expString === ansString);
}

console.log(correctAnswer(expected, answer) ? 'CORRECT!' : 'Wrong answer :(');
console.log(answer);

