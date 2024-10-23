// MDN DOCS (For Programming Theory)

// LECTURE 1 (VARIABLES $ DATA TYPES)

// VARIABLE
// Variable means something that has variations. e.g, every variable can have values that can be changed or varry.
//VARIABLES are CONTAINERS for data. We store variables in a container.

// Javascript is Dynamically Typed language

//equals to "=" is called assignment operator. it means it is assigning the value to the variale. e.g. age = 24. 24 is the value assigned to varibale a.

// VARIABLE RULES:
// 1) Variables are case sensitive; "a" & "A" is different.
// 2) Only letters, digits, underscore(_) and $ is allowed in variables. (not even space)
// 3) Only a letter, underscore(_) or $ should be the first character of a variable.
// 4) Reserved words cannot be variable names. It means fixed values cannot be variables. eg (console cannot be a variable).

// We define variables in camel case. eg (fullName).

// VARIABLES:

//There are 3 types of variables in Javascript. In Java we have to inlude one of these types to define variables.
// 1) let, 2) const, 3) var

// let = Variable cannot be re-declared, but can be updated. A block scope variable
// const = Variable cannot be re-declared or updated. A block scope variable. (const variable can only be defined once)
// var = Variable can be re-declared & updated. A global scope variable. (Var is not used anymore)

// By default, a variable is undefined if you donot give any value to it. Undefined will appear in console.
// While in const, value is needed otherwise it will throw an error.

// A BLOCK SCOPE VARIABLE:

// block scope means curly braces/brackets i.e. "{}". what ever code we are writing in curly braces is called "one block".
// If we define a variable of let in braces, then it will be called a variable of that block omly.

/* e.g.
 {
    let a = 10;
    console.log(a)
 } 
  
 {
   let a = 50;
   console.log(a)
//  } */

// In above example, variable a is defined twice and will work twice as they have been defined to a specific block




/* DATA TYPES in JavaScript
1) Primitive (7 types)
2) Non Primitive (objects) */

// 7 Types of Primitive Data

/*  1) Numbers
    2) String
    3) Boolean
    4) Undefined
    5) Null
    6) BigInt
    7) Symbol */

// e.g.
// let age =24; (here, age is a number/numerical data).
// To check data type, you can write "typeof age" and it will show you which data type it is.

// Boolean data type is in true and false.
// e.g.
// isFollow = true;

// undefined means no value in variable. When we create a variable withot any value, its type is automatically undefined.

// Null means there should be an object in variable, but currently its null.
// e.g. let x = null;

// NON PREMITIVE DATA
// Non primitive data include objects. Objects include (arrays, functions).

/* Objects = It is collection of values/different variables. if have to save many values, it will be names as objects.
 e.g. Suppose we have to include students data i.e. name (string), age(number), marks(number), isPass(Boolean) This collection is called object.
 In ojects, we are storing key values. e.g. key : value
 e.g 

 {
   age(key) : 24(value)
   name(key) : "Rahul"(vale)
 }*/

// These collections are made inside curly braces.
// usually, objects are declared with const but we can also use let.
// key values in object of const can be changed.

// CONST
// const variable cannot be changed.
// However keys in an object of const variable can be changed.

// If we want only one key from object, we can call it directly in square braces for example:
//Suppose we have stored all keys(variables) in object student and we want to print its name only. it will be written as:
// console.log(student["name"]) OR console.log(student.name) . To call a particular key from object, we use square barckes.

// Suppose you wante to change the value of key in an object. It will be written as:
// student["name"] = "Yaseen". It will change the name OR
// student["age"] = student["age"] + 5. It will  increase the value by 5.

/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/


// LECTURE 2 (OPERATORS & CONDITIONAL STATEMENTS)

// OPERATORS in JS

/* (a+b). This formula in math and programming is called "EXPRESSIONS"
variables in this expression i.e. a and b or 1 & 2 in 1 + 2 is called "OPERANDS"
The plus (+) sign in this expression is called "OPERATOR". In this scenerio, operator is adding the value */

// 1) ARITHMETIC OPERATORS

/* a) Modulus = % (Modulus is the remainder value that remains after dividing 2 values)
e.g. 5 % 2 = 1 (In 5 modulus 2, the value of modulus is 1).

b) Exponentiation = Exponentiation means power just like we give power values in maths. i.e. 2^3 = 2*2*2 = 8.
e.g. for exponentiation we use "**" like a**b means a^b.
e.g. if the value of a = 5 and b =3. a**b would be 5*5*5 = 125 */

// __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// UNARY OPERATORS
// c) Increment Operator (++) => Increment Operators are denoted as (++)
// d) Decrement Operator (--) => Decrement Operators are denoted as (--)

/* Increment and decrement operataors are called unary operators because they need only single operant to work.
While in other operators like modulus and exponential, they need at least 2 operands like a and b to work*/

//  In Increment Operators, if we write a++, it means a+1 same is the case with Decrement Operator i.e a-- = a-1

/* TYPES OF INCREMENT
1) POST INCREMENT = a++ => in post increment, the value is changed from the next value when you will print it again. 
2) PRE INCREMENT = ++a => in pre increment, the value is changed right after applying. 
3) POST DECREMENT = a-- => in post decrement, the value is changed from the next value when you will print it again. 
// 4) PRE DECREMENT = --a => in pre decrement, the value is changed right after applying. */
// __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x


// ASSIGNMENT OPERATORS

// Assignment Operators are used to assign values to variables.

/* Types of Assigment Operators

1) equals to (=) => a = 5 

let a = 5

2) (+=) ... e.g. if we write a+=4 it means a= a+4 => a+=4 means a = 5+4 = 9,
3) (-=) ... e.g. if we write a-=4 it means a= a-4 => a-=4 means a = 5-4 = 1,
4) (*=) ... e.g. if we write a*=4 it means a= a*4 => a*=4 means a = 5*4 = 20,
5) (%=) ... e.g. if we write a%=4 it means a= a%4 => a%=4 means a = 5%4 = 1,
6) (**=) ... e.g. if we write a**=4 it means a= a**4 => a**=4 means a = 5*5*5*5 = 625. */

// __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

/* COMPARISON OPERATORS
-- Comparison operators are used for comparing 2 values. It compares one value with the other.*/

/* TYPES OF COMPARISON OPERATORS

1) == (Equal to) => single = is used for assignment operator hence we use double == for comparsion
2) != (Not Equal to) => ! is used as NOT in programing language hence not equal is used as != .
3) === (Equal to & type) => Strict version of equal to. It compares value as well as data type.
4) !== (Not Equal to & type) => Strict version of Not equal to. It compares value as well as data type.
5) >, >=, <, <=

eg for 3 & 4 point:

If we give value a = 5 and b = "5". we will get the result as "True" because in "==", javascript converts strings into numbers
and then compares the value. Hence we use "===" if we do not want string and numbers to be compared equally.
"===" or "!==" do not only compare the value, but also compare the data type while its in number or string etc.

 __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x */

/*  LOGICAL OPERATORS
-- Logical operators evaluate multiple expressions & then give the final answer either true or false. 
   Logical operators check statement of all expressions an then gives the final answer.*/

   /* TYPES OF LOGICAL OPERATORS

   1) Logical AND (&&) => Logical And (&&) is used when we want to check if all conditions are true or not. If one condition
   is false, the final result will be false.

   2) Logical OR (||) => Logical OR (||) is used when one of the condition is true. If one condition is true, the final result
   will be true. It only return the reuslt as false if both conditions are false.

   3) Logical NOT (!) = Logical NOT (!) reverses the condition of true and false. It means if the condition is true, the final
   result will be false and if the condition is false, the final result will be true. 
   
   Not(!) is written as => !(a < b) It means not off a < b. We write ! and then condition in parenthesis.
   

   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x */

   
/* CONDITIONAL STATEMENT
-- To implement some conditions in the code. 
e.g. If we want to add dark-mode in our website, we can create a variable like mode === "dark-mode" and can define color to it.*/

/*TYPES OF CONDTIONAL STATEMENT

1) IF CONDITION:
e.g:
let color;
if(mode === "dark-mode") {
   color = "black";
}

In above condition, we have given a condition/expression after "if" in paranthesis and then we have given a value/code in
curly braces. If the condition is true, the value in curly braces will be executed otherwise, it won't.

2) IF ELSE CONDITION:

In this condition, we include else after if condition. It means in case IF condition is true then print if conditon
Otherwise print ELSE condition in case of False conditon

3) ELSE-IF CONDITION.

Else if condition is used if we want to check more than one codition. We can check as many conditions as we want by putting
else-if after the if condition.

4) TERNARY OPERATORS (Special Operator)
-- Ternary Operators is the only javascript operator that works on 3 opearands. One is conditon, and 2 are outputs.
condition ? true output : false output. In this condition questionmark (?) nad column (:) is ternary operators.

e.g. a ? b : c => a (condition) ? b (true output) : c (false output)

In above example we are including a condition in a with a questionmark and asking if the output is true or false.
e.g 
if condition value is true, in this case value of b will print & in case of false, value of c will be printed.


/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/



// LECTURE 3 (LOOPS $ STRINGS)

// --Loops are used to execute a piece of code again and again.

// Types of Loops

/* 1) FOR LOOP

lets suppose a condition of for loop:

for (let i=1; i<=5; i++){
   console.log("Hello World")
}

in above example we have 3 conditions in for loop:

1) let i=1; => It is called initializing statement. This is iniatializing variable i condition which is starting from 1.
               In this case, loop will keep initializing untill value is 5 or less than 5.
2) i <=5; => This statenment tells you the stopping condition i.e. When this loop is going to stop. 
3) i++; => This is called updation/updating condtion i.e. how variable i is going to be updated.

In above condition, statement i is starting from one and it will updated every time with 1 value due to i++ until vale 5.
In for loop, we are writing our entire condition in parenthesis i.e. in brackets()

IMPORTANT:
Loop can only be access inside the block. If we will try to call it like with console.log outside the block, error will appear./*

// 2) INFINITE LOOP (A loop that never ends). We never use it in programming though.

// -- When stopping condition becomes always true, the loop becomes infinite.

e.g. if we make a below condition, the loop will never ends.

for(let i=1; i>=0; i++){
   console.log("i =", i)
};

Infinite Loop is not used in programming as it crashes the memory of your system.*/

// 2) WHILE LOOP

/*-- In While Loop, we first give the initialization value before loop. Then we start our while loop.
     After that, we give stopping condition in parenthesis in while loop and then we write our condition in curly braces,
     then we give updating condition after our condition is completed.

e.g. 

let i = 1;

while(i<=5){
    console.log("i =", i);
    i++;
} 
*/

// 3) DO-WHILE LOOP

/* -- In Do while loop, the stopping condition of while loop comes in the end. While loops at least print once.

e.g.

let i = 1;
do{
    console.log("i =", i);
    i++;
}while(i<=5)

For Lop, While Loop and Do-While loop are our general loops.
// __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x__________ x__________ x


SPECIAL LOOPS:

1) for-of Loop
2) for-in Loop

These loops helps us to use loop on some special data types.

1) FOR-OF LOOP

-- for-of loop is used to apply a loop condition on the value of STRINGS & ARRAYS
e.g.

let str = "ApnaCollege"; 

for(let i of str){       
    console.log("i = ", i);
    
}

Here, we do not provide initializing or updation condition to i. It woll count the string characters automatically.
i here is iterator that will give you all characters.

You can give any variable instead of i like..... for(let val of str)... here, val is iterator. Generaly, we use val as iterator.

2) FOR_IN LOOP

-- For in Loop is used to apply a loop condition on objects and arrays.

In for in loop, we use "key" as an itrator. for-in loop return keys vaiables.
in case we want key values as well, then we will pass the object as well.

e.g.

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("key =", key, "value =", student[key]);
    
}

NOTE: PROMPMT:

-- Prompt returns strings naturlly. prompt type is string by nature. 

/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// STRINGS
-- Strings is a sequence of characters used to represent text. Strings can be written in both single and double quotes.
-- To create a string we start from "let"

e.g.
let str = "ApnaCollege"  //Double Quotes
let str2 = 'ApnaCollege' //Single Quote

both above examples are correct.

All strings that we create in javascript have inbuilt properties and inbuilt funtions (methods). We call functions as methods.

*In-Built Properties:

Most important in-built properties of an string is string LENGTH. Every internal variable of a string stores a value in it.
In main se ek internal variable jo har string ke pass hota hai that is a LENGTH variable.

e.g.
let str = "ApnaCollege"

console.log(str.length) and it will show the character legth of str.

--INDEX/INDICES (Index is singular and Indices are plural)

We can also calculate the individual index of an string. For example, we have written "ApnaCollege" in strings. In total, it
has 11 characters. String characters starts from zero value to onwards. We can calculate the position of an individual character,
position is called index in programing.

e.g.
If we want to check the index of "ApnaCollege" having 11 characters. We will calculate it with below exxample:
str = "ApnaCollege"

console.log(str[3]) --- Here, we want the index of character number 3*/

/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

/* TEMPLATE LITERALS IN JS

-- A way to have embedded expressions in strings
-- Template Literal is a special type of string. We use back ticks (``) instead of double quotes in template literals.
-- In short template strings are also strings but we can have embedded expressions in them by using back ticks.

-- `this is a template literal`

// STRING INTERPOLATION

-- To create strings by doing substitution of placeholders.

-- 'string text ${expression} string text'

e.g.

let obj = {
    item: "pen",
    price: 10
};

 let output = `price of ${obj.item} is ${obj.price} rupees`;

 console.log(output);

 In above example, we have written the entire sentence in back ticks and have written values with ${}.

 while using back ticks, we use objects keys with $ sign and curly braces i.e. ${obj.item} or ${obj.prce}

//  ESCAPE CHARACTER (\n) 

-- Escape character is a part of template literal. Escape Charater is used to break lines & print character in next line.

e.g.

consol.log(Apna/nCollege)

-- In above example, escape character \n will break line and will print college in next line

// TAB SPACE (\t)

Tab space is used to give TAB space in the middle and is denotd by \t

/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// STRING METHOD (Functions) IN JS
-- They are built-in functions to manipulate a string.
-- method and functions are same. Method means kuch bhi kaam karna.

e.g.
console.log("ApnaCollege")

upar example main log jo hai wo kuch print karwane ka kaam kr raha hai.

METHODS IN STRINGS:

1) toUpperCase()
2) toLowerCase()
3) trim()

1) toUpperCase():

-- toUpperCase() is used to change the strings in upper case.


NOTE: str.toUpperCase original string ki value ko change nahi karega. Wo new value print kara kar dega. That is why is method
ko hum new varibale bana kar apply karee.

QUESTION: Why original strings do not gets changed in JavaScript?
Answer: JavaScript main strings are immtuable matlab jo cheez change nahi hoti. like even if you want to change string "abc" to
bhi apko new string bana kar usko change karna parega.

e.g.

let str = "ApnaCollege"
let newStr = str.toUpperCase

console.log(newStr);
-- The above example will print in upper case.


2) toLowerCase():

-- toLowerCase() is similar to upper case example.

3) trim()

-- trim() method removes the white spaces. Starting and end main jitni bhi whitespace hoti hain unhe remove karta hai trim().

e.g.

let str = "   Apna College  JS    "
consol.log(str.trim())

-- In above example, trim will remove the space from start and end only.

// MORE METHODS IN STRINGS

1) SLICE METHOD(Start, End) // returns part of string
-- Slice method returns us a part of string. You have to give the starting and ending index in slice method. However, the ending
index is non-exclusive. It means that the value will return one index before the ending one.

e.g.

let str = "0123456789"

console.log(str.slice(3,7));

-- The above example will print 3,4,5,6 and will exlude 7 as the ending index is non-exclusive.

-- in case we want the starting index from middle and want to print all values after the starting index, then we will type:

e.g.

let str = "Hello"

console.log(str.slice(2));

-- In above example, the index will start from 'e' and will print all letters after e i.e. "ello" as there is no ending index.

2) CONCATINATION/CONCAT // join str2 with str 1

-- Concat joins 2 srings with each other..

if we want to join string 1 and 2, we will write: 
str1.concat(str2)
OR
str1 + str2

e.g.

let str1 = "Apna"
let str2 = "College"

let res = str1.concat(str2)
OR
let res = str1 + str2

console.log(res); // It will return Apna College after combining both

3) // REPLACE METHOD // str.replace("searchVal", "newVal")

-- Replace method is used to search and then replace values in strings

e.g.

let str = "ApnaCollege"

console.log(str.replace("C", "P"));  // It will return as ApnaPollege

4) CHARACTER AT METHOD// str.charAt(idx)

-- String ke anda agar humain koi particular index find krke print karwani hai to we use charAt method.

e.g.

let str = "College"

console.log(str.charAt(5)); // It will print g*/


/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/

   /* ARRAYS

   -- Arrays are collections of items. Generally, when we want to store same type of information, we use arrays.
   -- Like if we want student names or marks, we will be using arays to store same kind of information.
   -- Arrays information ko store karane ka ek Linear tareeka hai. Means if we want to add marks, previously we were using
      different names to keys to store information in an object, but in arrays you don't have to store information in
      different keys, ek hi object main sab store hojaega.

   -- Object main keys matter karti hain jabke arrays main position (index) matter krti hai.

   -- By default, ARRAY is an object. If you write typeof an array, it will return as an object.

   -- In a single array, we can add strings, nummbers and boolean etc. However, we do not make arrays like this.
   
   -- Generally, we use arrays when we want to store collection of multiple items, but want to give only one name to those items.

   * OBJECT vs ARRAYS
   
   -- In OBJECT we have to give different names to each key, while in ARRAYS we store all values in a single name.

   * PROPERTY vs METHOD

   --Method is the one jo kuch kaam perform kar raha hai jabke PROPERTY bus kuch value return krke deti hai.
   e.g. console.log(marks.length). Ye ek propert hai jo ke sirf length ko print karwa rhi hai


__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// * ARRAY INDICES (Indices is plural form of index)

-- Array indices are used to access index.
-- like arr[0], arr[2], arr[3]...
-- If we want to change an index of an array, we can write arr[60] = 66

e.g.

marks = [92, 80, 79, 654, 36]. These arre 4 indices. If we want index number of 79, we will write.
console.log(marks[2])
marks[3] = 75. It will change the value form 79 to 75.

-- However, if we change the index of an string, it will remain same because strings are immutable while arrays are mutable.

__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

// * LOOPING OVER AN ARRAY

-- Print all elements of an array. It means print all array elements together. It can be done via loop as array is
   iterable. Iterale means jin par hum loop laga sakte hain.

   -- ITERABLES main (Strings, Objects, Arrays) teeno cheezain ajati hain. Means in sab par loop lag sakta hai.

   -- We can use any loop in arrays. 
   
   * FOR LOOP IN ARRAYS

   -- Jab arrays main hum for loop use karte hain to we use length property as well becuase for loop ke lie humain length pata
      hona zaroori hai.

e.g.

let arr = [1,2,3,4,5]

for(let idx = 0, idx<arr.length, idx++){

}

-- In array loop, value of index is never "<=lenght", but its "<length".

e.g#2.

let heroes = ["IronMan", "Hulk", "SpiderMan", "Batman", "AntMan", "Thor"];

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

-- Above example is the standard way of write loops in arrays.

-- When we are dealing with iterables like (Strings, Objects, Arrays) we start iterable condition with zero like for(let i=0).

-- Generally we use FOR OFF Loop in arrays.

e.g.


let heroes = ["IronMan", "Hulk", "SpiderMan", "Batman", "AntMan", "Thor"];

for(let hero of heroes ){
    console.log(hero);
}

__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/

// * ARRAY METHODS

/* -- There are 3 methods in arrays

1) Push() Method : add to end (Add something at the end in existing erray) 
2) Pop() Methdo : delete from end & return (Delete something from the end in existing array)
3) toString() Method : converts array to string (Do not change existing array, but return new string)
4) Concat() : joins multiple arrays & returns result (Do not change existing array and return new array)
5) unshift() : add to start )(Add something at the start in existing erray)
6) Shift() : delete from start and return (Delete something from the start in existing array)
7) Slice(start index, end index) : returns a piece of the array -- (Do not change in existing array and return a new array)
8) Splice(startidx, delCount, newEl1...) : change original array (add, remove, replace)
9) Splice(3) --- in this method, if we pass only one index in splice, it will delete all index from the passing number.*/


/* __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x
   __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/

// METHODS & FUNCTIONS

// FUNTIONS IN JS:

/* -- Block of code that performs a specific task, can be invoked (called) whenever needed.
   -- In Functions, parameters are working as local variables. It means it will only work for that particular block jis main
   apne ye parameters define kie hain. Curly brces khatam hone ke baad they will end. 
   -- In short, local variables of functions are block scope jo ke sirf function ke block tak zinda rehte.

FUNCTION DEFINITION

function functionName(){
   //do some work
}

OR

function functionName(pram1, pram2 ...){
   //do some work
}

-- Kaam kia karna hai wo hum batate hain function definition ke andar.
-- FUNCTIONS save us from redundancy (repitition).

FUNCTION CALL

functionName(); // Kaam karwane ke lie hum function ko call karte hain

-- IF YOU WANT TO PRINT A PARTICULAR MESSAGE, WE DEFINIE INPUT VARIABLES
-- In below example (msg) is an input variable. Input Variable is called PRAMETER

function myFunction(msg){ //Parameter
   console.log(msg)
}

myFunction("Apna College")  //argument

-- In above example, function definition main jis variable ko hum use kar rahe that's called PARAMETER.
-- Function call ke andar jis value ko hum pass karte hain that is called argument.

// FUNCTIONS to Calculate 2 Numbers

function sum(x,y){
    console.log(x + y);
}

sum(2 , 4)

-- In above example, we are storing 2 parameters in function and then calling it.

// RETURN in Function:

function sum(x, y){
    s = x + y;
    return s;
}

let val = sum(3, 4)

console.log(val);

-- In above example, we are returning the value through function by using RETURN method.
-- (x,y) is working as a local variable of Function. It means ye sirf us function ke block tak rehta hai.
-- IMP NOTE: If we are wrinting anything after the return method, it will not be executed.

Example:

function sum(x, y){
    s = x + y;
    console.log("Before Return")
    return s;
    console.log("Afet Return")

}

let val = sum(3, 4)

console.log(val);

-- In above example, After return will not be executed. Hence we donot write anything after return statement.

-- Function Parameters i.e. (x,y) are local variables of Function having a block scope jo sirf block tak zinda rehte.
*/

/*__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/

// ARROW FUNCTION (=>)
/* -- Arrow function is a compact (short) way of writing a function.
   -- Arrow Function is a part of Modern Javascript.
   -- Arrow funtion is generally used for small functions like additions and multiplications otherwise we use normal functions.

   example:

   const arrowMul = (a,b)=>{
    return a * b;
}

console.log(arrowMul(3,4));

-- Printing String using Arrow Method:

--const printHello = () =>{
//     console.log("Hello");
     
// }

// printHello()

OR

const printHello = () =>{
    return "Hello";
     
}

console.log(printHello());

/*__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x*/

// FOR EACH LOOP (METHOD)
/*
-- For Each Loop is generally used for arrays. For Each Loop is basicaly a method.
-- Methods are generally functions, but methods ko hum kisi objects ya data structure ke saath jor dete hain.
-- For Each Loop is used to create a loop.

-- IF we want to create a loop for an array. we will first write array name then dot(.)forEach then in parenthesis, we pass
   function called (callBackFunction)

   Eg:
   arr.forEach(callBackFunction)

      -- Functions in Java Script can be passed as a parameter and also we can return the value of a function.

   *CALL BACK FUNCTION
   
   -- A call back is a function passed as an argument to another function.
   -- CallBackFunction: Here, it is a function to execute for each element in the array

   Eg:

   let arr = [1,2,3,4,5]

   arr.forEach(function printVal(val){
      console.log(val);
   })

   -- We don't have to execute call back funtion. We only have to pass its definition. For Each will execute it automatically
      for each element.

   -- Generally, we pass CALL BACK function in the form of arrow function (=>)
   
   Eg:   
   
   let arr = ["Karachi", "Lahore", "Peshwar", "Islamabad"];

   arr.forEach((val) =>{
    console.log(val);
    
   })

   --For Each hum tab use karte hain jab humain array ke har ek element ke lie kuch kaam perform karana hota hai.

   ** We have 3 paameters in CALL BACK FUNCTION 

   -- TYPES OF CALL BACK FUNTIONS PARAMETER 

   1) value/item
   2) index = Our index position
   3) array itself

   // EXAMPLE WIH INDEX and Array

   let arr = ["Karachi", "Lahore", "Peshwar", "Islamabad"];

   arr.forEach((val, idx, arr) =>{
      console.log(val.toLocaleUpperCase(), idx, arr);
    
   })

   **IMPORTANT NOTE: FOR Each Loop can only be used for ARRAYS. It cannot be used for STRINGS.

   ** INTERVIEW QUESION FOR WEB DEVELOPMENT:

   -- What are Higher Order Functions/Methods?

   -- This forEach Loop is called Higher Order Function or Higher Order Method
   -- Higher Order Functions wo functions hote hain jo doosre function ko ya to as a parameter le leter hain ya ksi function ko
      return karte hain.

/*__________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x __________ x

** SOME MORE IMPORTANT ARRAY METHODS

1) MAP METHOD:

-- Map creates a new array with the result of some operation. The value its callback returns are used to form new array.
-- It is quite similar to for each oop. 
-- Map humin ek naya array return karke deta hai

-- arr.map(callbackFnx(value,index,array))

When we use forEach Loop or Map, we don't generally used index or array. We are generally using value.

Example of map to print all values:

let nums = [2,3,4,5,6];

nums.map((val)=>{
    console.log(val);
    
})

Example of map to create new array:

let nums = [1,2,3,4,5];

let newArr = nums.map((val)=>{
    return val
})

console.log(newArr);

-- DIFFERNCE BETWEEN forEACH LOOP AND MAP:

-- forEach Loop is used when humain koi normally calculation karwani ho ya normally kuch print karwana ho.
-- MAP is used jab humain values ko use karke kuch naya array create karna ho.


2) FILTER METHOD:

-- Creates a new array of elements that gives true for a condition/filter.

-- Filter methods ka kaam hota hai Array ke ek ek individual index par ja kar kuch values ko filter out karna based on some
   condition. It will be stored in new array.

   Eg: // Filtering even numbers

   let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val)=>{
    return val % 2 === 0
})

console.log(evenArr);


-- In above example, return ke baad jo condition hai wo true hojae to wo element new element main store hojaega and jiski
   condition false hogi wo new array main store nahi hoga.


   3) REDUCE METHOD:

   -- Performs some operations and reduces the array  to a single value. It returns that single value.
   -- Jab input main humare paas boht values hon lekin output main sirf ek value chahie to hu, reduce method use karte.

   Eg:

  let arr = [1,2,3,4];

   const output = arr.reduce((res , curr)=>{
       return res + curr
   })

   console.log(output);

   -- In above example, result means previous and current means current value. In above example, previous value is 1 and
      current value is 2. When we write res + curr, it adds previous value (1) in current value (2) and gives the answer.
      The answer stores in result. after 1 + 2, result will become 3 and current will move to digit 3 from 2 and will add
      again. The answer will be 6 in result and then current value will become 4 and it will add again and the final output
      will be 10. That's how reduce works.

      --Since Result is called previous, we can also write above condition as:

       let arr = [1,2,3,4];

      const output = arr.reduce((prev , curr)=>{
         return prev + curr
      })

      console.log(output);

   // NOW, If we want to return the largest number, we will use below method

   let arr = [3,7,4,6,8];

   let output = arr.reduce((prev , curr)=>{
       return prev > curr ? prev : curr; 
      })

   console.log(output);

   