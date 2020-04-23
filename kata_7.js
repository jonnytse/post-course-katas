// How do you reverse the words in a sentence?

const sentence = 'The man fell off a cliff';

// let reverseSentence = sentence.split(' ').reverse().join(' ');
// console.log(reverseSentence);

let reverseSentence = [];
let sentenceArray = sentence.split(' ');
console.log(sentenceArray);
for (let i = sentenceArray.length - 1; i >= 0; i--) {
    reverseSentence.push(sentenceArray[i]);
}
console.log(reverseSentence);