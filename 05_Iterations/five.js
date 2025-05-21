const coding = ["js","Cpp","Python","rb","java"]

// coding.forEach( function(item){
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach((item , index, arr)=>{
//     console.log(item, index,arr);
    
// })

const myArr = [
    {
        languageName:'Javascript',
        languageFileName:'js'
    },
    {
        languageName:'Java',
        languageFileName:'java'
    },
    {
        languageName:'Python',
        languageFileName:'py'
    },
]

myArr.forEach((item)=>{
    console.log(item.languageName);
    
})