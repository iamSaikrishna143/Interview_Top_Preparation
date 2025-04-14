// 2 3 5 7 - Prime number
const num=20;
let isPrime=true;

if(num===1){
    console.log('is not prime');
}
else if(num >1){
    for(let i=2;i<=num;i++){
        if(num%i==0){console.log('Program Started');
console.log('Program Ended');
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is a prime number`);
    }
    else{
        console.log(`${num} is a prime number`);
    }
}
else{
    console.log('error');
}

// Anpother method

// const lownum = parseInt(prompt("enter a number"));
// const highnum = parseInt(prompt("enter a number"));

// for (let i = lownum; i <= highnum; i++) {
//   let flag = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (i > 1 && flag == 0) {
//     console.log(i);
//   }
// }

//factorial
// const number=parseInt(prompt('enyer a number'));

// if( number<0){
//     console.log('-ve');
// }
// else if(number==0){
//     console.log(zero);
// }
// else{
//     let fact=1;
//     for(i=1;i<=number;i++){
//         fact=fact*i;
//     }
//     console.log(`${number}---------${fact}`);
// }

// Fiboinacci Series

// const number=parseInt(prompt('enter a number'));
// let n1=0,n2=1,nextTerm;

// for(i=1;i<=number;i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }

// Armstrong
// const number=parseInt(prompt('enter a number'));
// let sum=0;
// let temp=number;
// while(temp>0){
//     let remindar=temp%10;
//     sum=sum+remindar*remindar*remindar;
//     temp=parseInt(temp/10);
// }
// if(sum==number){
//     console.log('armstrong');
// }
// else{
//     console.log('not a armstrong');
// }

// print factor
// const number=parseInt(prompt('enter a number'));
// for(let i=1;i<=number;i++){
//     if(number%i==0){
//         console.log(i);
//     }
// }

// Palindrome of a string
// function checkPalindrome(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "nor palindrome";
//     }
//   }
//   return "palindrome";
// }
// const input = prompt("enter a number");
// const value = checkPalindrome(input);
// console.log(value);

//Palindrome a number
// function checkPalindrome(number) {
//   let reverseNumber=0;
//   let temp = number;
//   while (number > 0) {
//     let reminder = number % 10;
//      reverseNumber = reverseNumber * 10 + reminder;
//     number = parseInt(number / 10);
//   }
//   if (reverseNumber == temp) {
//     console.log("palindrome");
//   } else {
//     console.log("not palindrome");
//   }
// }
// checkPalindrome(151);

//Leap Year
// function checkLeapYear(year){
//     if((0==year%4)&&(0!==year%100)||(0==year%400)){
//         console.log(year,'leap year');
//     }
//     else{
//         console.log(year,'not leap year');
//     }

// }
// const input=prompt('enyter a number');
// checkLeapYear(input);

//unshift
// const arra=[1,2,3,5,8];
// console.log(arra.unshift(5,8));
// console.log(arra);

//Spread opeartor

/*
The JavaScript spread operator (...) allows us to quickly copy all 
 or part of an existing array or object into another array or object.
 const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
 */

//Array destructuring
/*
Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects
const items=[1,2,3];
const [x,y,z]=item;
console.log(x);
console.log(y);
console.log(z);
*/
/*

Is JavaScript a pass-by-reference or pass-by-value language?
The variable's data is always a reference for objects, hence it's always pass by value. As a result,
 if you supply an object and alter its members inside the method, the changes continue outside of it.
  It appears to be pass by reference in this case. However, if you modify the values of the object variable, 
  the change will not last, demonstrating that it is indeed passed by value.
*/

//Reverse a number
// let number = parseInt(prompt("enter a number"));
// let result = 0;
// while (number > 0) {
//   let remainder = number % 10;
//   result = result * 10 + remainder;
//   number = Math.floor(number / 10);
// }
// console.log("result is " + result);

//Reverse a String Using for Loop
// function ReverseString(str){
//   let name="";
//   for(let i=str.length-1;i>=0;i--){
//     name=name+str[i];
//   }
//   return name;
// }
// const string=prompt('enter a name');
// const result=ReverseString(string);
// console.log(result);

//Find duplicate
// const checkduplicate = (input) => {
//   const duplicate = input.filter((item, index) => input.indexOf(item) != index);
//   return Array.from(new Set(duplicate));
// };
// const arr = [4, 4, 4, 5, 4, 7, 7, 8, 9, 9];
// console.log(checkduplicate(arr));

//largest & smalest
// function findNumber(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let smallest = arr[0];
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     } else if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return { smallest, largest };
// }
// const number = [1, 5, 8, 9, 4, 7, 10];
// const result = findNumber(number);
// console.log(result.smallest);
// console.log(result.largest);

// Reverse an array
// let number=[1,2,3,4,5,6];
// let result=[];
// for(let i=number.length-1;i>=0;i--){
//   result.push(number[i])
// }
// console.log(result);

// console.log('3'+2+3);
// let as='saikrishna';
// let ass='achary';
// // let ass='achary';
// console.log(as.slice(0,3));
// console.log(as.substring(0,3));
// console.log(as.substr(0,5));
// console.log(as.concat(' '+ ass));
// // console.log(as.padStart(4,'0'));
// console.log(as.charAt(5));
// console.log(as.charCodeAt(5));
// let text = "Please locate where 'locate' occurs!";
// console.log(text.lastIndexOf('locate'));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// console.log(fruits.join('%'));
// console.log(fruits.pop());
// console.log(fruits.push('kadali'));
// // console.log(fruits.splice(0,4,'banana','lemon','kiwi'));
// console.log(fruits.slice(2));
// console.log(fruits.toString());

//Star Program
/*  *****
 *****
 *****
 *****
 *****

let n = parseInt(prompt("enter a number"));
let string = "";
for (let i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);

 */

/*
 *****
 *   *
 *   *
 *   *
 *****
 
let n = parseInt(prompt("enter a number"));
let string = "";
for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
console.log(string);
*/

/*
     *
    **
   ***
  ****
 *****


let n = parseInt(prompt("enter a number"));
let string = "";

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 */

/*
*
**
***
****
*****

let n=parseInt(prompt('enter a number'))
let string='';
for(let i=1;i<=n;i++){
  for(let j=0;j<i;j++){
    string+='*';
  }
  string+='\n';
}
console.log(string);
*/

/*
 *****
 ****
 ***
 **
 *
 
let n = parseInt(prompt("enter a number"));
let string = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string =string + "*";
  }
  string = string + "\n";
}
console.log(string);
*/
/*
 *
 **
 * *
 *  *
 *   *
 ******
 
let n = parseInt(prompt("enter a number"));
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (i === n) {
      string =string + "*";
    } else {
      if (j == 0 || j == i - 1) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
  }
  string = string + "\n";
}
console.log(string);
*/
/*
Pyramid pattern
    *
   ***
  *****
 *******
*********
*/
// let n = parseInt(prompt("enter a number"));
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; i++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

/*
  ``1
`` 121
  12321
 1234321
123454321
*/

