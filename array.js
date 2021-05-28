var friendsAge = [12,13,17,30]
console.log(friendsAge)

console.log(friendsAge[3])

console.log(friendsAge.indexOf(17))
//push and pop

friendsAge.push(19)
console.log(friendsAge)
friendsAge.push(29)
console.log(friendsAge)
friendsAge.pop()
console.log(friendsAge)
console.log(friendsAge.length)

//add element and delete element at the beginning

var teaLine=['palam','jalam','kalam']
//pop begin
teaLine.shift()
console.log(teaLine)
//push begin
teaLine.unshift('sabrine','fahim','zitu')
console.log(teaLine)
//slice
var part=teaLine.slice(2) 
console.log(part)
console.log(teaLine)
part=teaLine.slice(2,4)
console.log(part)