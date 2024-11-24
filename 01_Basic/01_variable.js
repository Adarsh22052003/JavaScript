const accountId = 1234322;
let accountEmail = "ad@Gagmail.com";
var accountPassword = "Jaipur";
accountCity = "Jaipur";
let accountstate = "";
console.log(accountCity);

/*
prefer not to use
because of issue in block and functional scope
*/
// accountId = 2;
accountEmail = "dg@gmail.com";
console.log(accountId);

console.table([accountEmail,accountId,accountPassword, accountstate,accountCity]);