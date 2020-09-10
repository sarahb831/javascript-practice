// coins2.js

function coinCombos(amount, denoms) {
    let numCombos = new Array(amount + 1).fill(0);
    numCombos[0] = 1;

    for (let i = 0; i < denoms.length; i++) {
        let coin = denoms[i];

        for (let currentAmount = 0; currentAmount <= amount; currentAmount++) {
            if (coin <= currentAmount) {
                let remainder = currentAmount - coin;
                numCombos[currentAmount] += numCombos[remainder];
                console.log('currAmount,coin', currentAmount, coin, ' : ', numCombos);
            }
        }
    }
    return numCombos[amount];
}

let amount = 4;
let denoms = [2,3];
let answer = coinCombos(amount, denoms);
console.log(answer);