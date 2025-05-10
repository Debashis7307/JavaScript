let score = "33az"

console.log(typeof(score));

let scoreInt = Number(score); // Converts string to integer (Number) type value.
console.log(typeof(scoreInt));

console.log(scoreInt) //NaN -> Not a number

// "33" => 33
// "33az" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let verify =1;
let check = Boolean(verify);
console.log(check);

  // 1 => true
  // 0 => false
  // NaN => false
  // null => false
  // undefined => false
  // "" => false
  // "ami" => true

let no = 73;
let strNo = String(no);
console.log(strNo);
console.log(typeof(strNo));

// ********************* OPERATIONS *************************

let valu = 3;
let negValu = -valu; // Negation operation (Unary) operator.
console.log(negValu);
console.log(valu+valu); // Addition operation (Binary) operator1, operator2.
console.log(valu-valu); // Subtraction operation (Binary) operator1, operator2.
console.log(valu*valu); // Multiplication operation (Binary) operator1, operator2.
console.log(valu/valu); // Division operation (Binary) operator1, operator2.
console.log(valu %valu); // Modulo operation (Binary) operator1, operator2.
console.log(++valu); // Pre-Increment operation (Unary) operator.
console.log(valu ** valu); // Exponentiation operation (Binary) operator1, operator2.

let str1 = "I am ";
let str2 = "Deb"
let str3 = str1+str2;
console.log(str3);

console.log("5"+ 1);
console.log("5"+1+2);
console.log(5+1+"2");

console.log(+true);
console.log(+"");


 
