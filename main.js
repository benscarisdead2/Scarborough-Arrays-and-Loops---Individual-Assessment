// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball', 'football', 'swimming'];
// total = 4


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:

function longestString(inputArray) {
    var currentLongestString = "";
    for (var index = 0; index < inputArray.length; index++) {
        if(inputArray[index].length > currentLongestString.length) {
           currentLongestString = inputArray[index]; 
        }       
    }    
    return currentLongestString;
}


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

function smallestNumber(anArray) {
    // start with the smallest number as the first number in the array
    var theSmallestNumber = anArray[0];
    // loop over all the remaining numbers in the array...
    for (var index = 1; index < anArray.length; index++) {
        // ... and if we find a smaller number, update
        if (anArray[index] < theSmallestNumber) {
            theSmallestNumber = anArray[index];            
        }        
    }    
    return theSmallestNumber;
}

// console.log(smallestNumber(numbers));  
console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

function getEvens(inputArray) {
    var evenNumbers = [];
    for (var index = 0; index < inputArray.length; index++) {
        if ( (inputArray[index] % 2) == 0 ) {
            evenNumbers.push( inputArray[index] );            
        }
    }
    return evenNumbers;
}


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(inputArray) {
    var outputArray = [];
    for (var index = inputArray.length - 1; index >= 0 ; index--) {
        outputArray.push( inputArray[index] );        
    }    
    return outputArray;
}

// console.log(arrayReverser(numbers));
console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

function sumArrayOfNumbers(inputArray) {
    var sum = 0;

    for (var j = 0; j < inputArray.length; j++) {

        sum += inputArray[j];
    }

    return sum;    
}

// console.log(sumArrayOfNumbers(numbers));
console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

function numbersOver10(anArray) {
    var outputArray = [];
    for (var index = 0; index < anArray.length; index++) {
        currentElement = anArray[index];
        if (currentElement > 10) {
            outputArray.push(currentElement);  
        }         
    }  
    return outputArray;  
}


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(anArray, X) {
    var outputArray = [];
    for (var index = 0; index < anArray.length; index++) {
        currentElement = anArray[index];
        if (currentElement > X) {
            outputArray.push(currentElement);  
        }         
    }  
    return outputArray;  
}

// console.log(numbersOverX(numbers, 0))
console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:

function joinArrays(arrayOfArrays) {
    var outputArray = [];
    for (var i = 0; i < arrayOfArrays.length; i++) {
        outputArray = outputArray.concat(arrayOfArrays[i]);
    }
    return outputArray;
}

// console.log(joinArrays([numbers, numbersTwo]));
console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = undefined;

var instructorOne = instructors[4][0];
// instructorOne = "Dan"

var instructorTwo = instructors[0][1];
// instructorTwo = "JavaScript"

var instructorThree = instructors[2][0];
// instructorThree = "Brit"

