// Question 1: What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

/**
 * Mutating methods are ones that change the object after the method has been used. Non-mutating methods do not change the object after the method has been used.

mutatingArrayMethods                    non-mutationArrayMethods
array.push()                            array.concat()
array.unshift()                         ...array
array.pop()                             array.filter()
array.unshift()                         array.slice()
array.splice                            array.map()

**/

//Question 2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. 
//Add ‘Kotlin’ to the end of the array
let languages = ['C#', 'JavaScript','Ruby','PHP','Python']
languages.push('Kotlin');

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java')

//Remove the first item in the array
languages.shift()

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala','Swift')

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust')
console.log(languages);


/* Question 3: What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
*/
fruit = ['apple', 'mango', 'orange']


//  Question 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
let numbers = [13,15,25,50,75,82,-100]
function maximum(numbers){
    let i;

    let max = numbers[0];

    for (i = 1; i < numbers.length; i++){
        if (numbers[i] > max)
        max = numbers[i];
    }
    return max;
}
console.log("Maximum value is " + maximum(numbers));

/* Question 5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]

*/
function valTimesIndex(number2){
    return number2.map(function(value,index,array){
      return value*index;
  });   
}
let number2 = [2,4,5,10,23]
console.log(valTimesIndex(number2));