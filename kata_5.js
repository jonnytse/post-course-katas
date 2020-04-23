// How do you find the largest and smallest number in an unsorted integer array?

const array = [5, 34, 2, 33, 54, 323, 12, 347, 43, 63, 23];

// array.sort(function(a,b) {return a-b});
array.sort((a, b) => a - b);
console.log(array);
let small_large = [];
small_large.push(array[0], array[array.length -1]);
console.log(small_large);