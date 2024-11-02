

// //====================================Assignment no 14============================================
// // chapters35-38.pdf
// // PDF

// // 1. Write a function that displays current date & time in your
// // browser.

// // function currentDateTime() {
// //     return console.log(new Date);
// // }

// // currentDateTime();
// // // 2. Write a function that takes first & last name and then it
// // // greets the user using his full name.
// // var firstName = prompt('First Name');
// // var lastName = prompt('Last Name');

// // function fullName() {
// //     return console.log(firstName + ' ' + lastName);
// // }
// // fullName();

// // 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.

// // var num1 = +prompt('Enter first number');
// // var num2 = +prompt('Enter second number');

// // function addNumbers() {
// //     return console.log(num1 + num2);
// // }

// // addNumbers();

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser.
// // var op1 = +prompt('Operator');
// // var op2 = +prompt('opeartor 2');
// // var op3 = prompt("enetr what you want");
// // function Calculator(op1,op2,op3) {
// //     if (op3 === "+") {
// //         return op1 + op2;
// //     }  else if (op3 === "-") {
// //         return op1 - op2; 
// //     }
// //     else if (op3 === "*") {
// //         return op1 * op2;
// //     }
// //     else if (op3 === "/") {
// //         return op1 / op2;
// //     }
// //     else{
// //         "error"
// //     }
// // }
// // console.log(Calculator(op1,op2,op3));


// // 5. Write a function that squares its argument.
// // function square(a) {
// //     return a*a;
// // }
// // console.log(square(+prompt('enter what you want to give square')));

// // 6. Write a function that computes factorial of a number.
// function factorial(n) {
//   if (n=== 1 || n===0) {
//     return 1;
//   } else {
//     return n * factorial(n-1);
//   }
//   }
// console.log(factorial(5));
// // 7. Write a function that take start and end number as inputs
// // & display counting in your browser.

// function counting(a,b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//   }

//   }
//   counting(1,10);

// //   8. Write a nested function that computes hypotenuse of a
// // right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2

// // function | JAVASCRIPT

// // Page 2 of 4

// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare()

//  function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(a) {
//     return a * a;
//   }
//   var squareOfBase = calculateSquare(base);
//   var squareOfPerpendicular = calculateSquare(perpendicular);
//   return Math.sqrt(squareOfBase + squareOfPerpendicular);
// }

// console.log(calculateHypotenuse(3, 4)); // Output: 5
// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:

// // i. Arguments as value
// // ii. Arguments as variables

// function calculateArea(width, height) {
//   return width * height;
// }

// console.log(calculateArea(5, 10)); // Output: 50

// // 10. Write a JavaScript function that checks whether a passed
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.

// // function reverseString(a) {
// //   return a.split('').reverse().join('');
// //   }
// //   console.log(reverseString("kawishzia"));
  
//   // 11. Write a JavaScript function that accepts a string as a
//   // parameter and converts the first letter of each word of the
//   // string in upper case.
//   // EXAMPLE STRING : 'the quick brown fox'
//   // EXPECTED OUTPUT : 'The Quick Brown Fox'
// // var a = "the quick";
// // var b = a.split(" ");
// // for (let i = 0; i < b.length; i++) {
// //   const element = b[i];
// //   var c = b[i].slice(1);
// //   b[i] = element[0].toUpperCase() + c;
  
// // }

// // console.log(b.join(" "));

// // 12. Write a JavaScript function that accepts a string as a
// // parameter and find the longest word within the string.
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'
// function abc(a) {
//   var words = a.split(" ");
//   var longestWord = words[0];//a
//   for (var i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
//   }
//   console.log(abc("Web Development Tutorial")); // Output: Development
  
//   13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetter(str, letter) {
//   return (str.toLowerCase().split(letter.toLowerCase()).length - 1);
// }

// console.log(countLetter('JSResooourceS.com', 'o')); // Output: 3



// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage:
calcCircumference(5);
calcArea(5);
