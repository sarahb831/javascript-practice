const validParentheses = function(s) {
    let sArray = s.split('');
    let stack = [];
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
    console.log(stack, sArray)
    for (i in stack) {
        sArray[stack[i]] = '';
    }
    return sArray.join('');
}

const s = "a)b(c)d";
console.log(validParentheses(s));