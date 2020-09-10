
function lc977sortedSquares2(A) {
    let sortedSquares = new Array(A.length);

    let pHead = 0;
    let pTail = A.length - 1;
    let i = pTail;

    while (pHead <= pTail) {
        let sqH = A[pHead] * A[pHead]; // alt Math.pow(A[pHead],2) but slightly slower
        let sqT = A[pTail] * A[pTail];

        if (sqH < sqT) {
            sortedSquares[i] = sqT;
            pTail--;
        } else {
            sortedSquares[i] = sqH;
            pHead++;
        }
        i--;
    }
    return sortedSquares;
}

const A = [-4,-1,0,3,10];
let answer = lc977sortedSquares2(A);
console.log(answer);