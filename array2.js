// let data =[23,45,78,89,12]
// console.log(data)
// data.push(67)
// data.push(78)
// data.pop()

// console.log(data)
// let values=[34,45.67,"javascript",true]
// console.log(values)
// for(value of values)//ES 6
// {
//     console.log(`Values are ${value}`)
// }
// for(index in values)
// {
//     console.log(`The value of ${index} position is =${values[index]}`)
// }
// for(var i=0;i<data.length;i++)
// {
//     console.log(`The value at ${i} position is =${data[i]}`)
// }
// const person=["mayank ","arun","vishal","om"]
// console.log(typeof(person[0]))
// //arry as a object
// let names={firstName:"mayank ",lastName:"singh",age:22}
// console.log(names.firstName)
// console.log(names.lastName)
// //length methods
// console.log(person.length)
// person.push(33)
// console.log(person[4])
// //normal for loop 
// for(i=0;i<person.length;i++){
//     console.log(person[i])
// }

//for in loop
let num=["12",23,43,56,"gfff",99]
for(index in num){
    console.log(`the value of the array at the index ${index} position the value is=${num[index]} `)
}
//for of loop
for(value of num) {
    console.log(`the value of the array is =${value}`)
}

console.log(num.length)
console.log(num[num.length-1])
console.log(num.sort())
//sort method is mostly used in anonymous function arrow function
var sor=[4,2,5,1,3]
sor.sort(function(a,b){
    return a-b
})
console.log(sor)


//for each method in arrow function
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// //// Arrow function
// forEach((element) => { ... } )
// forEach((element, index) => { ... } )
// forEach((element, index, array) => { ... } )

// array1.forEach(element.arrrar1[0] => console.log(element[0]))

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
console.log(text)
function myFunction(value) {
  text += "<li>" + value + "</li>";
}
//Java script new kew word array as object
var point=new Array(3,4,5,6,7,8,9)//array as object
var poiny=[3,4,5,6,7,8,9]
for(index in point){
    console.log(point[index])
}
console.log(typeof(point))//point as object
console.log(typeof(poiny))//object