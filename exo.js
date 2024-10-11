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

const lettre = "AZERTYUPQSDFGHJKLMWXCVBN";
const nombre = "0123456789";
let plaque ="";


/*
function PlaqueGen (){
    for (let i=0; i < 2 ; i++){
        plaque += lettre.charAt(Math.floor(Math.random() * lettre.length));
        //console.log(plaque)
    }
    plaque += "-";
    
    //console.log(plaque);
    
    for (let i=0; i < 3 ; i++){
        plaque += nombre.charAt(Math.floor(Math.random() * nombre.length));
        //console.log(plaque)
    }
    plaque += "-";
    
    //console.log(plaque);
    
    for (let i=0; i < 2 ; i++){
        plaque += lettre.charAt(Math.floor(Math.random() * lettre.length));
    }
    return console.log(plaque);
}

//let Nplaque = prompt("Nombre de Plaques à generer");

let Nplaque = prompt("nombre");
*/

//-----Nouvelle verision-----//
function LetterGen(){
    for ( let i = 0; i < 2; i++){
        plaque += lettre.charAt(Math.floor(Math.random() * lettre.length));
    }
    return plaque;
};

function NumberGen(){
    for (let i =0; i <3; i++){
        plaque += nombre.charAt(Math.floor(Math.random() * nombre.length));
    }
    
    return plaque;
}

function PlaqueGen(){
    LetterGen();
    plaque += "-";
    NumberGen();
    plaque += "-";
    LetterGen();
    
    return plaque;
}


