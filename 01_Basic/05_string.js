const name = 'ankur ';

const repoCount = 54;

// console.log(name + repoCount);


console.log(`Hello my name is ${name} and my repocount ${repoCount}`);

const gameName  = new String("ansul-sachan-sachan")

console.log(gameName.__proto__.String);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherName = gameName.slice(0, 4);
console.log(anotherName);

const newStringOne = "   ankur   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ankur.com/ankur%20sachan"
console.log(url.replace('%20','_'));

console.log(url.includes('ankur'));

console.log(gameName.split('-'));


