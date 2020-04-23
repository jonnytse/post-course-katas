// 4. How do you remove duplicates from an array in place?
//Reference medium.com article by Samantha Ming....v good (how to remove array dupes in ES6)
//indexOf returns the index of the 1st occurence of the element 
const array = [0, 1, 2, 0, 0, 3];

let result = array.filter((item, index) => {
    console.log(
        item,
        index,
        array.indexOf(item),
        array.indexOf(item) === index,
    );
    return array.indexOf(item) === index
});
console.log(result);