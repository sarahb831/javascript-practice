// jewels3.js 



function jewels3(jewels, capacity) {

    let valueArray = new Array(capacity + 1).fill(0);

    for (let currCapacity = 0; currCapacity <= capacity; currCapacity++) {
        let maxValue = 0;
        for (let i = 0; i < jewels.length; i++) {
            let jewel = jewels[i];
            let currMax;
            if (jewel.weight === 0 && jewel.value !== 0) {
                return Infinity;
            }

            if (jewel.weight <= currCapacity) {
                let remainder = currCapacity - jewel.weight;
                currMax = jewel.value + valueArray[remainder];
            }
            maxValue = Math.max(maxValue, currMax)
        }
        valueArray[currCapacity] = maxValue;
    }

    return valueArray[capacity];
}

const jewels = [
    {weight: 7,
    value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
];

const capacity = 20;

const answer = jewels3(jewels, capacity);
console.log(answer);
