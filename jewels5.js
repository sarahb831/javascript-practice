function jewels5(capacity, jewels) {

    let capArray = new Array(capacity + 1).fill(0);

    for (let i = 0; i <= capacity; i++) {
        let maxValue = 0;
        for (let j = 0; j < jewels.length; j++) {
            let jewel = jewels[j];
            if (jewel.weight <= i) {
                let remainder = i - jewel.weight;
                let currValue = capArray[remainder] + jewel.value;
                maxValue = Math.max(currValue, maxValue);
            }
        }
        capArray[i] = maxValue;
    }
    return capArray[capacity];
}

const jewels = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 }
];
const capacity = 20;
const answer = 555;

let result = jewels5(capacity, jewels);
console.log(answer === result);