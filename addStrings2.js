const addStrings2 = (num1, num2) => {

    let sum = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let dig1 = i >= 0 ? num1[i] - '0' : 0;
        let dig2 = j >= 0 ? num2[j] - '0' : 0;
        let digitSum = carry + dig1 + dig2;
        sum = `${digitSum % 10}${sum}`;
        console.log(i,j,dig1,dig2, digitSum, sum)
        carry = digitSum > 9 ? 1 : 0;

        i--;
        j--;
    }
    return sum;
}

let num1 = '456';
let num2 = '87';
let answer = addStrings2(num1, num2);
console.log(answer);