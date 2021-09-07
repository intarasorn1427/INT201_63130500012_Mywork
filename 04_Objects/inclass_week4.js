

//Object.create() สืบทอด
let student4 = {name : "Jaehyun" , id : 63698}
let student5 = Object.create(student4);
console.log(student5.name.id);

 

 

 //Aggigasted object (สังเกตุที่ {} ซ้อน {} )
 let student3 = {
    id : 263,
    name : "num",
    gpa : {
        INT201 : "A",
        INT203 : "b+"
  
    }
  }
  console.log(student3);
  console.log(student3.gpa.INT201[0]); //กำหนดindexที่ต้องการ
  
  
  
  //object valuse if array (สังเกตูที่ [] อยู่ข้างใน)
  let student1 = {
  
    st_name : "Chayada",
    My_husband : ['Jaehyun','Taehyng','Jungwoo']
  
  };
  console.log(student1);
  console.log(student1.My_husband[1]);
  console.log(student1.My_husband[student1.My_husband.length-1]); //เข้าถึงdata ในarrayที่เป็นตัวสุดท้าย
  
  
  
  
  //Aggigasted object
  let student3 = {
    id : 263,
    name : "num",
    gpa : {
        INT201 : "A",
        INT203 : "b+"
  
    }
  }
  console.log(student3);
  
  
  //ตัวอย่างเอา object2ตัวมาใส่
  let product1 = {name : "coke" , price : 25};
  let product2 = {name : "pepsi" , price : 30};
  
  let waterDispenser = [product1,product2];
  
  for(let water of waterDispenser){
      console.log(water);
  }
  
  

  
   