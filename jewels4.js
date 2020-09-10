// jewels4.js 

function jewels4(jewels, capacity) {
    // create array to track max value per capacity for remainders

    let capArray = new Array(capacity + 1).fill(0); // for zero offset of elements

    for (let currCapacity = 0; currCapacity <= capacity; currCapacity++) {
        let currMaxValue = 0;

        for (let i = 0; i < jewels.length; i++) {
            let jewel  = jewels[i];
            console.log('currCapacity, jewel.weight', currCapacity, jewel.weight);

            if (jewel.weight === 0 && jewel.value !== 0) {
                return Infinity;
            }

            if (jewel.weight <= currCapacity) {
                let remainder = currCapacity - jewel.weight;
                let currValue = jewel.value + capArray[remainder];
                currMaxValue = Math.max(currMaxValue, currValue);
                console.log('currValue, currMaxValue, currCapacity, jewel#', currValue, currMaxValue, currCapacity, i);
            }
        }
        capArray[currCapacity] = currMaxValue;
        console.log(capArray);
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

let result = jewels4(jewels, capacity);
console.log(answer === result);