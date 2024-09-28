// LECTURE 4 (ARRAYS)

// let marks = [97, 82, 75, 64, 36];

// console.log(marks);

// let heroes = ["IronMan", "Hulk", "SpiderMan", "Batman"];

// console.log(heroes);

// console.log(typeof(heroes));

// let info = ["Daniyal", 90, true]

// console.log(info);

// ARRAY INDICES

// let marks = [97, 82, 75, 64, 36];

// marks[3] = 100;

// console.log(marks[3]);

// LOOPING OVER AN ARRAY

// FOR LOOP

// let heroes = ["IronMan", "Hulk", "SpiderMan", "Batman", "AntMan", "Thor"];

// for(i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
    
// }

// FOR-OFF LOOP IN ARRAYS

// let heroes = ["IronMan", "Hulk", "SpiderMan", "Batman"];

// for(let hero of heroes ){
//     console.log(hero);
    
// }

// let cities = ["Karachi", "Lahore", "Sukkar", "Peshawar", "Quetta"];

// for(let city of cities){
//     console.log(city.toUpperCase());
    
// }

// PRACTICE QUESTIONS

// let marks = [85, 97, 44, 37, 76, 60]

// let sum = 0;

// for(let val of marks){
//     sum += val
// }

// let average = sum/marks.length;
// console.log(`avg marks of the class = ${average}`);

// let items = [250, 645, 300, 900, 50]
// let i = 0;

// for(let val of items){
//     console.log(`value of index ${i} = ${val}`);
//     let offer = val/10
//     let result = items[i] - offer;
//     console.log(`value after offer is = ${result}`);
//     i++
// }

// let items = [250, 645, 300, 900, 50];

// for(let i=0; i<items.length; i++){
//     console.log(`value of index is ${i} = ${items[i]}`);
//     let offer = items[i]/10;
//     let result = items[i] - offer;
//     console.log(result);
     
// }

// ARRAY METHODS 

// 1) PUSH() METHOD:

// let foodItems = ["potatoe", "apple", "tomato", "pineapple"];

// console.log(foodItems);

// foodItems.push("Orange", "Mangoes", "Ginger");

// console.log(foodItems);

// 2) POP() METHOD:

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman"];

// console.log(heroes);

// heroes.pop()

// console.log(heroes);

// 3) TO STRING

// let foodItems = ["potatoe", "apple", "tomato", "pineapple"];

// console.log(foodItems);
// console.log(foodItems.toString());

// let marks = [27, 57, 89, 93, 76];

// console.log(marks);

// console.log(marks.toString());

// 4) CONCAT()

// let fastFood = ["Burger", "Pizza", "Broast", "Fries", "Tikka"];

// let sweetDish = ["Keer", "Custard", "Rasmalai", "Rabri", "Mithai"];

// let seaFood = ["prawns", "Fish", "Crabs", "Octopus"]

// let buffet = fastFood.concat(sweetDish, seaFood);

// console.log(buffet);

// 5) UNSHIFT() METHOD:

// let foodItems = ["potatoe", "apple", "tomato", "pineapple"];

// console.log(foodItems);

// foodItems.unshift("Ginger", "Gabbage")

// console.log(foodItems);

// 6) SHIFT METHOD


// let foodItems = ["potatoe", "apple", "tomato", "pineapple", "Ginger"];

// console.log(foodItems);

// foodItems.shift()

// console.log(foodItems);

// 7) SLICE() METHOD:


// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// console.log(heroes);

// console.log(heroes.slice(3));

// SPLICE METHOD

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// console.log(heroes);

// heroes.splice(2,3,"Daniyal");

// console.log(heroes);

// ADD ELEMENT

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// heroes.splice(4,0,"Daniyal")

// console.log(heroes);

// DELETE ELEMENT

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// heroes.splice(3,2)

// console.log(heroes);

// REPLACE ELEMET

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// heroes.splice(4,1,"Daniyal")

// console.log(heroes);

// SPLICE DELETE ALL INDEX

// let heroes = ["Ironman", "Batman", "Superman", "Antman", "Spiderman", "Thor", "Hulk"];

// heroes.splice(4)

// console.log(heroes);

// PRACTICE QUESTIOONS OF ARRAYS

/* Q) Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

a. Remove the first company from the array.
b. Remover Uber and Add Ola in its place.
c. Add Amazon at the end. */

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);


// a. Remove the first company from the array.

// companies.shift()

// console.log(companies);

// b. Remover Uber and Add Ola in its place.

// companies.splice(2,1,"Ola")

// console.log(companies);

// c. Add Amazon at the end. */

// companies.push("Amazon")

// console.log(companies);

// Q) Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array.
// b. Remover Uber and Add Ola in its place.
// c. Add Amazon at the end. */



