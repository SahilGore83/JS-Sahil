// if statement

// if (2 == "2") {
//     console.log("HI");
    
// }

// // < , > , <= , >= , !=, ==, ===, !==
// if (2 === "2") {
//     console.log("HI");
    
// }
// else{
//     console.log("Not equal");
    
// }

// const score = 200
// if(score>100){
//     let power = "Fly"
//     console.log(`user power: ${power}`);
    
// }
//console.log(`user power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("yeah"),console.log("yeah2");

//  if (balance < 500){
//     console.log("less than 500");
    
//  }else if(balance < 750){
//     console.log("less than 750");
    
//  }else{
//     console.log("greater than 750");
    
//  }

const userloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromemail = true

if (userloggedIn && debitcard) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromemail) {
    console.log("Allow to login in  course");
    
}