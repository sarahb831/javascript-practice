function coinCombos6(amount, denoms) {
    let comboArray = new Array(amount + 1).fill(0);
    comboArray[0] = 1; // adds 1 combo to each element; 1 combo for 0 (all 0s)

    for (let i = 0; i < denoms.length; i++) {
        let coin = denoms[i];
        for (let currAmount = 0; currAmount <= amount; currAmount++) {
            if (coin <= currAmount) {
                let remainder = currAmount - coin;
                comboArray[currAmount] += comboArray[remainder];
            }
        }
    }
    return comboArray[amount];
}

const amount = 5;
const denoms = [1,2,5];
let answer = coinCombos6(amount, denoms);
console.log(answer);