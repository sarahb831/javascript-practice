//coins3.js

function coins3(denoms, amount) {
    let combosArray = new Array(amount + 1).fill(0);
    combosArray[0] = 1;

    for (let i = 0; i < denoms.length; i++) {
        const coin = denoms[i];

        for (let currAmount = 0; currAmount <= amount; currAmount++) {
            if (coin <= currAmount) {
                let remainder = currAmount - coin;
                combosArray[currAmount] += combosArray[remainder];
            }
            console.log('currAmount, coin, combosArray', currAmount, coin, combosArray)
        }
    }
    return combosArray[amount];
}

const denoms = [1,2,3];
const amount = 4;

let answer = coins3(denoms, amount);
console.log(answer);