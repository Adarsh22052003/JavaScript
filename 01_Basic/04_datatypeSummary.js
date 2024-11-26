// primitive data type

// 7 type : String , Number, Boolean , Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId =  Symbol('123');

// console.log(id == anotherId);

const bigNumber = 22324232443424442456565667676767n;
// console.log(bigNumber);


// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["aman","tejas", "anuj"];
let myObj ={
    name: "ankur",
    age: 24
}

const myFuction = function(){
    console.log("hello wolrd")
}
// console.log(typeof myFuction);

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "adarshsachan";
anotherName = "ankursachaan";

console.log(myName);
console.log(anotherName);

let user = {
    email: "e@mail.com",
    upi: "user1@pytm"
}
let user1 = user;

user1.email = "agmail.com"

console.log(user.email);
console.log(user1.email);

