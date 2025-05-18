// Immediately invoked function expression (IIFE)

(function hi(){
    //named IIFE
    console.log(`DB connected`);
})();

( (name) => {
    //Un named IIFE
    console.log(`DB connnected two ${name}`);
    
})("sahil")
