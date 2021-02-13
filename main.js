// Prva zadaca 

// let num = prompt('Please enter a number: '); 
 
//   if (num % 2 == 0) {
//     console.log("The number is even.");
//   } else {
//     console.log("The number is odd.");
//   }


//   Vtora zadaca 	

// for(let i = 10; i <= 100; i++){
//     if(i % 3 == 0 && i % 2 == 0){
//         console.log(`${i}`);
//     }
// }


// Treta zadaca 

// let num1 = parseInt(prompt('Please enter a number: '));
// let num2 = parseInt(prompt('Please enter a number: ')) ;
// let num3 = parseInt(prompt('Please enter a number: ')) ;
// let isPrime = true;

// console.log (`Number 1: ${num1}`);
// console.log (`Number 2: ${num2}`);
// console.log (`Number 3: ${num3}`);

// let smallestNum;
// let largestNum;

// if (num1 > num2 && num1 > num3 ) {
//     console.log (`The largest number is ${num1}.`);
//     largestNum = num1;
// } else if (num2 > num1 && num2 > num3) {
//     console.log (`The largest number is ${num2}.`);
//     largestNum = num2;
// } else {
//     console.log (`The largest number is ${num3}.`);
//     largestNum = num3;
// }

// if (num1 < num2 && num1 < num3) {
//     console.log (`The smallest number is ${num1}.`);
//     smallestNum = num1;
// } else if (num2 < num1 && num2 < num3) {
//     console.log (`The smallest number is ${num2}.`);
//     smallestNum = num2;
// } else {
//     console.log (`The smallest number is ${num3}.`);
//     smallestNum = num3;
// }

// if (smallestNum === 1) {
//     console.log(`${smallestNum} is neither prime nor composite number.`);
// } else if (smallestNum > 1) {
//     for (let i = 2; i < smallestNum; i++) {
//         if (smallestNum % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`The smallest number ${smallestNum} is prime.`);
//     } else {
//         console.log(`The smallest number ${smallestNum} is not prime.`);
//     }
// } else {
//     console.log("The number is not a prime number.");
// }

// if (largestNum === 1) {
//     console.log(`${largestNum} is neither prime nor composite number.`);
// } else if(largestNum > 1) {
//     for (let i = 2; i < largestNum; i++) {
//         if (largestNum % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`The largest number ${largestNum} is prime.`);
//     } else {
//         console.log(`The largest number ${largestNum} is not prime.`);
//     }
// } else {
//     console.log("The number is not a prime number.");
// }