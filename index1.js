// Reduce function

// UniqueString

const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
  
  const countOccurrences = strings.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; 
    return acc;
}, {});

console.log(countOccurrences);

console.log("---------------------------------");

// Product of Multiple of three or five

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

const multiples = numbers.filter(num => num % 3 === 0 || num % 5 === 0);

const sum = multiples.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 

console.log("---------------------------------");


// Filter functions

// palindromesString

const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  
  const isPalindrome = (word) => {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
  };
 
  const palindromes = words.filter(isPalindrome);
  
  console.log(palindromes);
  
  console.log("---------------------------------");

  //FindImage

  const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
  
  const isImage = (filePath) => /\.(jpg|jpeg|png|gif)$/i.test(filePath);
 
  const images = filePaths.filter(isImage);
  
  console.log(images);
  
  console.log("---------------------------------");

  // Map function

  // swapingString

  const Strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  
  const reverseString = (str) => str.split('').reverse().join('');

const swappedAndReversed = Strings.map(reverseString);

console.log(swappedAndReversed);

console.log("---------------------------------");

// ForEach Function

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  sentences.forEach((sentence, index) => {
    const wordCount = sentence.split(' ').length; 
    console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
  });

  console.log("---------------------------------");

  // sumOfSquareOfOddNumbers

  const Numbers = [1, 2, 3, 4, 5, 7];


const sumOfSquareOfOddNumbers = Numbers
  .filter(num => num % 2 !== 0) 
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0); 

console.log(sumOfSquareOfOddNumbers); 

