// singleton
// Object.create

// Object literals

const mySum = Symbol("Key1")

const jsuser = {
    name: "Sahil",
    "Full name": "Sahil Santosh Gore",
    age: 20,
    [mySum]: "myKey1",
    location: "Nashik",
    email: "Sahilgore@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]);
// console.log(jsuser[mySum]);

jsuser.email = "Sahil@google.com"

// Object.freeze(jsuser)
jsuser.email = "Sahil@microsoft.com"

// console.log(jsuser["email"]);
// console.log(jsuser);


jsuser.greeting = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(jsuser.greeting());


