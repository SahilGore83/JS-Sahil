// Primitive

// 7 types :String,Number, Boolean, null ,undefiend, Symbol,BigInt




//Reference (Non Primitive)

//Arry, object , function

const heros = ["Deadpool","Ironaman","naagraj"]//array

let myobj = {
    name :"sahil",
    age:20,

}//object
// console.log(heros);
// console.log(myobj);

const myfunction = function(){
    // console.log("Hello World")

}
console.log(typeof heros);


/* 
Typeof val 
Undefined = "undefiend"
Null = "Object"
Boolean = "Boolean"
Number = "number"
String = "string"
object(native and does implement ([call]) = "object"
object(native or host and does not implement ([call]) = "Function"
*/

/************************************************************** */

// Stack (Primitive), Heap(Non-Primitive)

let myName = "Sahil"

let anotherName = myName
anotherName= "rohit"

console.log(myName);
console.log(anotherName);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "Sahil@gmail.com"

console.log(userone.email);
console.log(usertwo.email);





