const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(
//     function(acc , curval) {
//         console.log(`acc:${acc} and curval: ${curval}`);
        
//         return acc + curval
//     },0
// )

// const myTotal = myNums.reduce(
//     (acc, curr) => acc+curr,0
// )

// console.log(myTotal);


const shoppingCart = [
    {
        itemname:"js course",
        price:3999
    },
    {
        itemname:"Data Science",
        price:49999
    },
    {
        itemname:"Java",
        price:1999,
    }
]

const pricetopay =shoppingCart.reduce(
    (acc, item) => acc +item.price, 0
)
console.log(pricetopay);

