// Date 

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2002, 7, 30);
// let myCreateDate = new Date(2002, 7, 30, 5, 3);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-02-2003");
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate =  new Date();
console.log(newDate.getDay() + 1);


newDate.toLocaleString('default',{
    weekday: "long",
})