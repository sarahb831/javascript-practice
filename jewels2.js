//jewels2.js 

function jewels2(jewels, capacity) {
    let capacityArray = new Array(capacity + 1).fill(0);

    let maxValue = 0; // needed?

    for (let currCapacity = 0; currCapacity <= capacity; currCapacity++) {
        let currMaxValue = 0;

        for (let i = 0; i < jewels.length; i++) {
            let jewel = jewels[i];
            if (jewel.weight === 0 && jewel.value === 0) {
                return Infinity;
            }

            if (jewel.weight <= currCapacity) {
                let remainder = currCapacity - jewel.weight;
                let currValue = jewel.value + capacityArray[remainder];
                currMaxValue = Math.max(currMaxValue, currValue);
            }
        }

        capacityArray[currCapacity] = currMaxValue;
    }

    return capacityArray[capacity];
}

let capacity = 3;
let jewels = [
    {weight: 1, value: 3},
    {weight: 3, value: 2}
];

let answer = jewels2(jewels, capacity);
console.log(answer);