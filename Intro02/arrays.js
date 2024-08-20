var superHeros = []; // type never
// correct way to declare array with a type
var arr1 = [];
arr1.push(1, 2);
console.log(arr1);
var allUsers = [{ name: "Aupam", isActive: false }];
allUsers.push({
  name: "name2",
  isActive: true,
});
var models = [[3, 4, 5], []];
