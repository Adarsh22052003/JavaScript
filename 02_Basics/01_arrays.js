// array

 const myArr = [3,5,6,7,8,4,3];
 const myHero = ["pitaji","brother"];
 const myarr2 = new Array(1,2,3,4);

 console.log(myArr[0]);
 
//  Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));



// console.log(myArr);

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);



// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
