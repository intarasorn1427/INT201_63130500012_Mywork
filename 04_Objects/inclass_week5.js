// let person = {} // let perrdon = new object(); //implicit class
// person.id = 12345;
// person.name = 'Jaehyun';
// console.log(person);
// person.email = 'banana@gmsail.com' ;
// console.log(person);
// delete person.email;
// console.log(person);

//


//สร้างconstuctuerของคลาส
// class Person {
//     constructor(id, name) {
//         if (id.length != 13) this._id = 'unknown';        //สร้างเงือนไข้า id ใส่เข้ามาไม่ถึ 13 ตัว 
//         else this._id = id;                         //backing field   _ เพื่อใช้เเยกid , name เเยกออกจากgetter setter ถ้าไม่ใส่ทุกครั้งที่เรียก id name จะเรียกใช้getter sertter
//         this._name = name;
//     }
//  //getter
//  get id() {
//     return this._id;
//   }
//   //setter
//   set id(id) {
//     this._id = id; //backing field
//   }
//   set name(name) {
//     console.log('you are in setter ');
//     this._name = name;
//   }

//   get name() {
//     console.log('you are in getter ');
//     return this._name;
//   }
//   // //method

//   toString() {
//     return `person id = ${this._id}, person name= ${this._name}`;

//   }

// }

// let per1 = new Person('1234567', 'SomSri');

// per1.name = 'Umaporn';

// console.log(per1.name);



//----------------------------------------------//
// let per1 = new Person('1234567', 'SomSri');

// console.log(per1.toString());
// let per2 = new Person('1234567891234', 'Somsak');

// console.log(per2.toString());

// per2.getFirstNameLetter = function () {
//   return this._name.charAt(0);

// };

// console.log(per2.getFirstNameLetter());
// console.log(per1.getFirstNameLetter());

// console.log(Object.prototype.isPrototypeOf(per1));

// console.log(Person.prototype.isPrototypeOf(per1));

//-----------------------------------------------------------
//per1.getFirstNameLetter is not a function


// Person.prototype.getFirstNameLetter = function () 
//   return this._name.charAt(0);
// };

// console.log(per2.getFirstNameLetter());
// console.log(per1.getFirstNameLetter());

//---------------------------------------
//console.log(Object.prototype,isProto)



//Newwwwwwwwwwwwwwwwwwwwwwww
// 2 objects
//if on name ,set is as unknown

//ทำเอง
// class Player {
//     constructor(name) {
//         if (this._name = undefined) {
//             console.log(this._name='Unknown');
//         } else
//             this._name = name;

//     }

//     get name(name) {
//         this._name = name;

//     }
//     set name(name) {
//         this._name = name;

//     }
// }

//----------------------------------------------------

// 2 objects
//if on name ,set is as unknown
class Player2 {
    constructor(name) {
        console.log('Insert your name');
        if (name) {
            this._name = name;
        } else {
            this._name = 'Unknown';
        }

    }

    get name() {
       return this._name;
    }

    set name(name) {
         this._name=name;
    }
}

let play1 = new Player2();
console.log(play1);







