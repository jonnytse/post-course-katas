// 3. How do you find duplicate numbers in an array if it contains multiple duplicates?

const array = [2, 6, 13, 5, 9, 11, 16, 11, 3, 17, 8, 5];

// array.sort(function(a,b){return a-b});
array.sort((a, b) => a - b);
console.log(array);
let duplicateNumber = [];
//use for each function?
for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i-1] === 0) {
        duplicateNumber.push(array[i]);
        console.log(duplicateNumber);
    }
}