// 1. synchronous
// console.log(`hello `);
// console.log('world, ');
// console.log('bye');

// hello 
// world, 
// bye

// ------------------------------------------

//2. asynchronous
console.log(`hello `);
setTimeout(() => console.log('world, '), 5000); //asynchronous task ( func heigher func )
console.log('bye');

  //hello 
  // bye
//รอ5วิ
  // world, 

// ------------------------------------------

//2.1 asynchronous (using promise then() method)

// console.log(`hello `);
// const wait = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('world');
//   }, 2000);
// });

// wait.then((data) => {
//   console.log(data);
//   console.log('bye');
// });

//2.2 asynchronous (using async/await)

// console.log(`hello `);

// async function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('world');
//     }, 2000);
//   });
// }

// async function getWord() {
//   const data = await delay();
//   console.log(data);
//   console.log('bye');
// }

// getWord();

//3.higher order function ( callback function )
const friends = [
    { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  ];
  
  function getFullName(name, surname) {
    return name + ' ' + surname;
  }
  
//get friend Name(fullname)
//3.1
  //getFriend is a higher order function (synchornous task)
//   function getFriend(name, surname, cb) {  //cb = func
//     const fullname = cb(name, surname);
//     console.log(`fullname: ${fullname}`);
//   }
  
// getFriend('Yoko','Naree'.getFullName);

//3.2
//getFriend is a higher order function (Asynchornous task = reslove , reject)
function getFriend(name, surname, cb) {  //cb = func
    return new Promise((resolve,reject) => {    //return resolve,reject
        const fullname = cb(name, surname);
        if(fullname !== null) resolve(fullname);
        else reject(new Error('cannot get fullname'));
    }
    )
  }



  const myFriendName = getFriend('Yoko','Naree',getFullName);
  console.log(myFriendName);

  function getFriend(name, surname, cb) {  //cb = func
    return new Promise((resolve,reject) => {    //return resolve,reject
        const fullname = cb(name, surname);

        if(fullname !== null) resolve(fullname);
        else reject(new Error('cannot get fullname'));
    }
    )
  }
 //use promise.then()
  getFriend('Yoko','Naree',getFullName).then((friend)=> {
    console.log(`my frined name is ${friend}`);
    console.log('Bye Bye');
  
  })

  //-----

 //use async/await
 async function getFriend(name, surname, cb) {  //cb = func
    return new Promise((resolve,reject) => {    //return resolve,reject
        const fullname = cb(name, surname);

        if(fullname !== null) resolve(fullname);
        else reject(new Error('cannot get fullname'));
    }
    )
  }

  async function main(){
    const myFriend = await getFriend('Yoko','Naree'.getFullName);
    console.log(myFriend);
    //text task

  }
  

 async function getAdress(fullname){
     new Promise((resolve,reject) =>{
         let myFriend =  friend.friend
     })
 }