

//Array

let arr1 = [];

console.log(typeof arr1);

arr1 = [5, 2, 10, 'student']; //untyped & unsized
console.log(arr1.length); //4
console.log(arr1[0]); //5
console.log(arr1[arr1.length - 1]); //'student'

console.log(arr1[arr1[1]]);   //arr1[1] = 2   //arr1[2] = 10  ดังนั้นคำตอบคือ 10



//[ { } ] 
let arr2 = [
    {id:1,name='Tae'},
    {id:2,name='Jae'}
];

console.log(arr2[1].name);  //เข้าถึงname ของ index 1



// [ [ ] ] array ซ้อน array
let arr3 = [
    [1,2,3,4],    // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],
    [5,6,7,8]     // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]
];
console.log(arr3[0][3]);  // 4   [0] คือ array ก้อนเเรก  [3] คือ ตำเเหน่งข้อมูลในก้อนเเรก


//spread operator ...
let arr4 = [...arr3, 0.5, 100, ...arr2];
  console.log(arr4);    //  [1,2,3,4],0.5,100,[5,6,7,8]





//iteratin array

let letters = [...'Hello world'];

let value = '';



// console.log(letters.entries());



for (let [index, letter] of letters.entries()) {

  console.log(`index: ${index}`);

  console.log(`letter: ${letter}`);

  // if (index % 2 === 0) value += letter; // letters at even indexes

}