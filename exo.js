let monCanard = "Donald";

let nombreDePate = 2;
let nombreDAile = 2;

function canard (nombreDePate,nombreDAile){
    let maCannette = "Daisy";
    let mesCanards = maCannette + " et " + monCanard;


    return nombreDePate += nombreDAile;
}


console.log(canard(2,2))
console.log(canard("deux","deux"))

const x = 1;

function f(){
    let x = 2;
    console.log(x);
}

console.log(x);
f();

/*Notice how even though x is first declared as a const, when inside the function
 f, the variable "x" exists within the function as a different variable independantly
 from the "const x"*/

 