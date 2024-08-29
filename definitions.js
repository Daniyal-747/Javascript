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



// LECTURE 2 (LOOPS $ STRINGS)

// --Loops are used to execute a piece of code again and again.

// Types of Loops

/* 1) FOR LOOP

lets suppose a condition of for loop:

for (let i=1; i<=5; i++){
   console.log("Hello World")
}

in above example we have 3 conditions in for loop:

1) let i=1; => It is called innitializing statement. Thisis inniatializing variable i condition which is starting from 1.
               In this case, loop will keep initializing untill value is 5 or less than 5.
2) i <=5; => This statenment tells you the stopping condition i.e. When this loop is going to stop. 
3) i++; => This is called updation/updating condtion i.e. how variable i is going to be updated.

In above condition, statement i is starting from one and it will updated every time with 1 value due to i++ until vale 5.

IMPORTANT:
Loop can only be acces inside the block. If we will try to call it like with console.log outside the block, error will appear./*

// 2) INFINITE LOOP (A loop that never ends). We never use it in programming though

// -- When stopping condition becomes always true, the loop becomes infinite.

e.g. if we make a below condition, the loop will never ends.

for(let i=1; i>=0; i++){
   console.log("i =", i)
};

Infinite Loop is not used in programming as it crashes the memory of your system.*/

// 3) WHILE LOOP

























