// How do you find all pairs of an integer array whose sum is equal to a given number?

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pairCheck = (number) => {
    for (let i = 0; i < array.length; i++) {
        if (array.includes(number - array[i])) {
            console.log (number - array[i], array[i]);
        }
    } 
}
console.log(pairCheck(14));