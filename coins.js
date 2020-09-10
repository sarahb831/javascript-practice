// coins.js

function coinCombos(amount, denoms) {
    let numCombos = new Array(amount + 1).fill(0);
    numCombos[0] = 1;

    for (let currAmount = 0; currAmount <= amount; currAmount++) {

        for (let i = 0; i < denoms.length; i++) {
            let coin = denoms[i];
            if (coin <= currAmount) {
                let remainder = currAmount - coin;
                numCombos[currAmount] += numCombos[remainder];
                console.log('currAmount,coin', currAmount, coin, ' : ', numCombos);
            } 
        }
    }
    return numCombos[amount];
}

let amount = 4;
let denoms = [1,2,3];
let answer = coinCombos(amount, denoms);
console.log(answer);