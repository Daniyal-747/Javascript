// LECTURE 3 (LOOPS $ STRINGS)

// for(count=1; count<=5; count++){
//     console.log("Hellow World!");
// }


// let sum = 0;
// let n=5;

// for(let i=1; i<=n; i++){
//     sum = sum+i;
// }


// console.log("sum =", sum);



// console.log("Loop has ended as condition has been fulfilled");

// for(let i=1; i<=5; i++){
//     console.log("i =", i);
    
// }

// INFINITE LOOP

// for(let i=1; i>=0; i++){
//     console.log("i is", i);
    
// }


// WHILE LOOP

// let i = 1;

// while(i<=5){
//     console.log("i =", i);
//     i++;
// }


// DO-WHILE LOOP

// let i = 1;

// do{
//     console.log("i =", i);
//     i++;
// }while(i<=5)

// FOR-OF LOOP

// let str = "JavaScript"; 

// let size = 0;

// for(let i of str){      // i here is iterator > characters 
//     console.log("i = ", i);
//     size++
// }

// console.log("string size =", size);

// FOR-In Loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log("key =", key, "value =", student[key]);
    
// }

// let num = n;

// for(let i=-1; i<=100; i++){
//     console.log("value of i is =", i);
    
// }

// for(let num=0; num<=100; num++){
//     if(num%2!== 0){
//         console.log("Num", num);
//     };
// }

// PRACTICE

// let gameNum = "25";
// let userNum = prompt("Guess the number");

// while(userNum!=gameNum){
//     userNum = prompt("Wrong guess. Try Again!")
// }

// console.log("congratulatons! You guessed the right number.");

// __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// STRINGS

// let str= "ApnaCollege"

// console.log(str[4]);


// TEMPLATE LITERALS

// let specialString = `This is a Template Literal`;

// console.log(typeof(specialString));


// let obj = {
//     item: "pen",
//     price: 10
// };

//  let output = `price of ${obj.item} is ${obj.price} rupees`;


//  console.log(output);

// let str = "ApnaCollege"

// let newStr = str.toLowerCase();

// console.log(newStr);

// let str = "   Apna College  JS   "

// console.log(str);

// SLICE METHOD

// let str = "0123456789"

// console.log(str.slice(3,7));

// CONCAT METHOD

// let str1 = "Apna"
// let str2 = "College"
// let str3 = "Best"

// let res = str1.concat(str2+str3)
// console.log(res);


// REPLACE METHOD

// let str = "ApnaCollege"

// console.log(str.replace("College", "Pan"));

// Character At Method

// let str = "College"

// console.log(str.charAt(5));

// let str = "College";

// str = str.replace("C", "D");

// console.log(str);

// PRACTICE QUESTION

// let fullName = prompt("Enter Your fullname without spaces")

// let username = "@" + fullName + fullName.length

// console.log(username);