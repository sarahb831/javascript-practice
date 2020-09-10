// coinCombos4.js

function coinCombos4(denoms, amount) {

    let combosArray = new Array(amount + 1).fill(0);

    combosArray[0] = 1;  // base case

    // build up array using each coin
    for (let i = 0; i < denoms.length; i++) {
        let coin = denoms[i];

        for (let currAmount = 0; currAmount <= amount; currAmount++) {
            if (coin <= currAmount) {
                let remainder = currAmount - coin;
                combosArray[currAmount] += combosArray[remainder];
            }
        }
    }
    return combosArray[amount];
}

const amount = 4;
const denoms = [1,2,3];
let answer = coinCombos4(denoms, amount);
console.log(answer);