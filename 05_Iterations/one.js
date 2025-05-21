// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
    if (element == 8) {
    //    console.log("number is 8");   
    }
    
}

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) { 
            // console.log(`inner loop value ${j} and outer loop ${i}`);
            // console.log(`${i} * ${j} = ${i*j}`);
            
    }
    
}

let myArray = ["Flash","Batman", "Superman"]

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and contiue

// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
        
//     }
//     console.log(`value of index is ${index}`);
// }

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of index is ${index}`);
}