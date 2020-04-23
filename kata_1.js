// How do you find the missing numbers in a given integer array?

const array = [1, 2, 4, 5, 6, 7, 8];
let missingNumberArray = [];

const missingNumber = (array) => {
    for (let i = 1; i < array.length; i++) {
        if (i + 1 !== array[i]) {
            missingNumberArray.push(i + 1)
            return missingNumberArray;
        }
    }
}
console.log(missingNumber(array));