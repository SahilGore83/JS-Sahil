// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let newdate = new Date()
// console.log(newdate.getMonth()+1);

console.log(newdate.toLocaleString('default',{
    weekday: "long",
    day: "numeric", 
}));
