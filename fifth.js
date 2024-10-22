// LECTURE 5 (METHODS & FUNCTIONS)

// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("We are learning JS");
// }

// myFunction();
// myFunction();

// Functions with Parameter

// function myFunction(msg){ //Parameter ->input
//     console.log(msg)
//  }

//  myFunction("Apna College")  //argument

// Functions To Calculate 2 Numbers

// function sum(x,y){
//     console.log(x + y);
// }


// sum(2 , 4)

// RETURN in Function


// function sum(x, y){
//     s = x + y;
//     return s;
// }


// let val = sum(3, 4)

// console.log(val);

// ARROW FUNCTION (=>)
    

// const arrowSum = (a,b)=> {
//     console.log(a + b);
// }

// arrowSum(2 , 6)

// // Example 2

// const arrowMul = (a,b)=>{
//     console.log(a * b);
// }

// arrowMul(4 , 6);

// EXAMPLE WITH RETURN

// const arrowMul = (a,b)=>{
//     return a * b;
// }


// console.log(arrowMul(3,4));

// const printHello = () =>{
//     return "Hello";
     
// }

// console.log(printHello());

// PRACTICE QUESTION

// Count Vowles

// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("apnacollege"));

// ARROW FUNTION PRACTICE AS ABOVE

// const countVow = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVow("apnacolege"));

// FOR EACH LOOP:

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// Example With Arrow Function

// let arr = ["Karachi", "Lahore", "Peshwar", "Islamabad"];

// arr.forEach((val) =>{
//     console.log(val);
    
// })

// // EXAMPLE WIH INDEX and Array

// let arr = ["Karachi", "Lahore", "Peshwar", "Islamabad"];

// arr.forEach((val, idx, arr) =>{
//     console.log(val.toLocaleUpperCase(), idx, arr);
    
// })

// PRACTICE QUESTION

// Q-) For a given array of numbers, print the square of each value using forEach Loop.

// let nums = [2,3,4,5,6];

// nums.forEach((num)=>{
//         console.log(num*num);
// })

// ANOTHER WAY TO PASS CALL BACKS


// let nums = [1,2,3,4,5];

// let calSquare = (num) => {
//     console.log(num*num);
// }

// nums.forEach(calSquare)

// MAP TO PRINT ALL VALUES:

// let nums = [2,3,4,5,6];

// nums.map((val)=>{
//     console.log(val);
    
// })

// MAP TO CREATE NEW ARAY:

let nums = [1,2,3,4,5];

let newArr = nums.map((val)=>{
    return val
})

console.log(newArr);

