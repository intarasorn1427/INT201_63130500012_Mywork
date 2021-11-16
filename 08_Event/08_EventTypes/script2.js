//capturing
const cancelBtn = document.querySelector('#cancel');
const formEle = document.querySelector('#userForm');

// เติม true จะเป็น captering เอา trueออกจะเป็น bubbling
formEle.addEventListener('click', writeSomething, true);//here!!
function writeSomething(event) {
  // console.log(event.target);
  // console.log(event.target.id);
  console.log(event.type);
  console.log(event.currentTarget);
  console.log(event.eventPhase);
  console.log('Hello World');
}

const divFormEle = document.getElementById('userDivForm');
//on the fly
divFormEle.addEventListener(
  'click',
  (event) => {
    // console.log(event.target);
    // console.log(event.target.id);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
  },  true //here!!
);

