const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newNums =mynum.map((num) => num +10)
// console.log(newNums);

// const newNums = mynum.forEach((item)=>{
//     console.log(`${item+10}`);
    
// })

const newNums = mynum.map(
    (num) => num *10
)
.map(
    (num)=> num/10
)
.filter(
    (num)=>num >=5
)
console.log(newNums);

