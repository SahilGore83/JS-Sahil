const marvel_heros = ["Ironman", "thor" , "Hulk"]
const DC_Heros = ["Superman", "Flash" , "Batman"]

// marvel_heros.push(DC_Heros)

// console.log(marvel_heros);


// const allheros = marvel_heros.concat(DC_Heros)
// console.log(allheros);


const all_new_heros = [...marvel_heros, ...DC_Heros]

// console.log(all_new_heros);


const newarray = [1, 2, 3,[4,5,6],7 ,[6,7,[4,5]]]

const real_newarray = newarray.flat(Infinity)

console.log(real_newarray);


console.log(Array.isArray("Sahil"))

console.log(Array.from({name: "Sahil"})) //instresting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
