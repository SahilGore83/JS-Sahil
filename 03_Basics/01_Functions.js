
function Sahil(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// Sahil()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2

}
const result = addTwoNumbers(3,4)

//console.log("Result: ",result);



function loginUserMessage(username = "KURO"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sahil"));
// console.log(loginUserMessage("Sahil"));




function calculatelateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatelateCartPrice(200, 100,300 , 245));


const user = {
    username: "Sahil",
    price: 290
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "Rohit",
    price:220

})

const myArray = [200, 400, 600, 4000]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myArray));
// console.log(returnSecondvalue( [200, 400, 600, 4000]));


