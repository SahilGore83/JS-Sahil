
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner :",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sahil"

    function two(){
        const password = "1234"
        console.log(username);
        
    }
    // console.log(password);
    
    two()
}

// one()
if(true){
    const username = "Rohit"
    if (username === "Rohit") {
        const website = " youtube"

        // console.log(username + website);
        
        
    }
    // console.log(website);
    
}
// console.log(username);

//+++++++++++++++++++ interesting++++++++++++
adddone(7)
console.log(adddone(7));

function adddone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 2
}

addtwo(4)