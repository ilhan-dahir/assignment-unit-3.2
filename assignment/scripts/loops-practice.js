console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
//change i to be less then 6
for(let i=0; i<6; i++){
  console.log(i);
}//end for

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
//start i at 3
for(let i=3; i<6; i++){
  console.log(i);
}//end for

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
//Start i at 2, and less 11 and count by twos instead of incrementing plus one
for(let i=2; i<11; i+=2){
  console.log(i);
}//end for

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
//start at 5, if i is greater or equal to zero, decrement i
for(let i=5; i>=0; i--){
  console.log(i);
}//end for

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']


// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
// console.log('Some stars:');
//loop through stars array and print out each star
for(star of stars){
  console.log("some stars: ", star);
}// end for

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
// console.log('Some stars using while:');

let i = 0; //initalize i
while (i < stars.length){ //while i is less then length of array, loop through
  console.log('Some stars using while:', stars[i]); //log the star at i
  i++; //increment 
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

i = 0; //init i
while(i<6){  //while i is less then 6, log i and increment
   console.log(i);
   i++;
}//end while

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

//init i
i = 10; 
while(i>4){  //while i is greater then 4, log i and decrement 
   console.log(i);
   i--;
}//end while
