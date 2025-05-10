//Unary Operator
 let a = 5;
 a++;
  console.log(a); // 6  - its a increment(post) operator
 a--;
  console.log(a); // 5  - its a decrement(post) operator
 ++  a; // 5
  console.log(a); // 6  - its a increment(pre) operator
  --a;
  console.log(a); // 5  - its a decrement(pre) operator

let num = 10;
let newNum = num++; //post
console.log(newNum);
newNum = ++num;  //pre
console.log(newNum); 

// camelCase - PascalCase - snake_case
// camelCase - first letter is small and next letter is capital
// JS - camelCase , caseSensitive
// in JS - The type of variables can be changed - dynamic typing
/// TypeScript - static typing - stricked version of JS - designed for large applications by Microsoft

//string
let str = "Aarav";
let c=str[-1];
console.log(c);

//Q1
let na = "Debashis Bera";
console.log((na.length)-1);
//Q2
let nam = "Debashis"
console.log(nam[0]);
//Q3
console.log(nam[nam.length-1]);
//Q4
console.log("".length);
console.log(" ".length);

