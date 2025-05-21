// falsy value

//false, 0, -0, BigInt 0n , "", null, undefined , NaN

//Truthy Values

//true , [], "0",'false', " ", {}, function(){}, 

const useremail = []

// if(useremail.length === 0){
//     console.log("Array is zero");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
    
}

// Nullish Coalecsing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 12
// val1 = undefined ?? 14
val1 = null?? 10 ?? 30

console.log(val1);


// terniary operator
// condition ? true : false

const icetea = 100

icetea<= 80 ? console.log("less than 80"): console.log("more than 80");

