function validParentheses2(s) {
    let stack = [];
    let sArray = s.split('');
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === '(') {
            stack.push(i);
        } else if (sArray[i] === ')') {
            if (stack.length < 1) {
                sArray[i] = '';
            } else {
                stack.pop();
            }
        }
    }
    // handle extra '('
    for (j in stack) {
        sArray[stack[j]] = '';
    }
    return sArray.join('');
};


const s = "a)b(c)d";
console.log(validParentheses2(s));

const t = '))((';
console.log(validParentheses2(t));