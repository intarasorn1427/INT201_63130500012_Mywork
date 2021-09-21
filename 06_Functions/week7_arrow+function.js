const arr1 = [5,4,3,2,1];
arr1[0] = 10;
console.log(arr1);  //[ 10, 4, 3, 2, 1 ]


//สร้างfunctionธรรมดา 
function area(wigth,height){
    return wigth*height
};

console.log(area(5,6)); //30



//function expression  เอาfunctionเข้าไปเก็บใย object
const doSomething = function(n1,n2,n3){
    return n1+n2+n3;
};

console.log(doSomething(9,4,3));  //16   functionไม่มีชื่อ เวลาเรียกใช้ ก็ผ่าน object+() ใส่ข้อมูลตาม parameter



//Name function expreession  เอาfunctionเข้าไปเก็บใย object
 const findSum = function sum(n){
     if(n<=1){       //เช็คค่าn ถ้า n <= 1 return 1    ในที่นี้ n = 5 ดังนั้นต้องไป else
         return 1;
     }else
     return n + sum(n-1);     //5+sum(4)                       sum(4)เข้าioop
    };                        //5+4+sum(3)                     sum(3)เข้าioop
                              //5+4+3+sum(2)                   sum(2)เข้าioop
                              //5+4+3+2+sum(1)                 sum(1)เข้าioop

 console.log(findSum(5)); //15       // 5+4+3+2+1



  

 // กลับค่าจาก traditional -> Arrow function

 //1.traditional
 function helloSomeone(name){
     return `Hello,${name}`;
 }
 //Arrow
const helloSomeone = (name) => `Hello,${name}`;  
const helloSomeone = name => `Hello,${name}`;    //same

console.log(helloSomeone('Jaehyun'));


//2.traditional

function area(width, height) {
    return width * height;
  }
   
 //Arrow





 //3.traditional
  function evenNum(num) {
    if (num % 2 === 0) return true;
    else return false;
  }
   
  //Arrow


//-------------------------------------------------------------------------------------------

  //functions
  function helloSomeone(name) {
    let greeting = `Hello`;
    return `${greeting} ${name}`;
  }
  //greeting and num are local variables, you can refer only inside function