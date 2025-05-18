// const netflixUser = new Object()

const netflixUser = {}

netflixUser.id = "123"
netflixUser.name = "Sahil"
netflixUser.isloggedIn = false

// console.log(netflixUser);


const regularUser = {
    email: "Sahilgore@google.com",
    fullname: {
        userfullname:{
            firstname: "Sahil",
            lastname: "Gore"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
]

users[1].email
// console.log(netflixUser);

// console.log(Object.keys(netflixUser));
// console.log(Object.values(netflixUser));
// console.log(Object.entries(netflixUser));

// console.log(netflixUser.hasOwnProperty('isloggedIn'));



const course = {
    coursename: "JavaScript",
    price: "699",
    courseInstructor: "Sahil"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


//Json format
// {
//     "name": "sahil",
//     "course" : "javascript",
//     "price" : "free"
// }

// [
//     {},
//     {},
// ]
