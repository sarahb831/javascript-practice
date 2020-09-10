const coinCombos5 = (amount, denoms) => {
    let comboArray = new Array(amount + 1).fill(0);
    comboArray[0] = 1;

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
};

const amount = 4;
const denoms = [1,2,3];
let answer = coinCombos5(amount, denoms);
console.log(answer);