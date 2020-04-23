// How do you find the missing numbers in a given integer array?

const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];

let missingNumberArray = [];

const missingNumber = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] - array[i -1] !== 1) {
            missingNumberArray.push(array[i] - 1);
            return missingNumberArray;
        }
    }
}
console.log(missingNumber(array));