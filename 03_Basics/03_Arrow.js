const user = {
    username: "Sahil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Rohit"
// user.welcomeMessage()

// console.log(this);


// function Coffee(){
//     let username = "Sahil"
//     console.log(this.username);
// }
// Coffee()


// const Coffee = function(){
//     let username = "Sahil"
//     console.log(this.username);
    
// }

const Coffee = () => {
    let username = "Sahil"
    console.log(this);
    
}
// Coffee

// const addtwo =(num1, num2) => num1 + num2
// const addtwo =(num1, num2) => (num1 + num2)
const addtwo =(num1, num2) => ({username: "Sahil"})

console.log(addtwo(3,6));


// const myarry = [2,4,5,6]

// myarry.forEach()