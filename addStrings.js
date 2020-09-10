var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = "";

    while (i >= 0 || j >= 0 || carry > 0) { // to handle carry at highest value
        let digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        let digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        let digitSum = carry + digit1 + digit2;
        sum = `${digitSum % 10}${sum}`; // use string literal to prepend to string
        carry = digitSum > 9 ? 1 : 0;
        i--;
        j--;
    }
    return sum;
}

let num1 = '0';
let num2 = '0';
num1 = '456';
num2 = '1789';
let answer = addStrings(num1, num2);
console.log(answer);