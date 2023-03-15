export {};
//! Types in TypeScript 

//? To run i need to:
//* Open Terminal run 
//* cd into location
//* Run tsc FILENAME - to turn it into a js file
//* Run the js file with - node FILENAME

//? With JavaScript and TypeScript we can make variables like this?
//* let age = can be any data type 

//? But with TypeScript we can lock in the DataType 
//* let age: number = will only allow integers now 
let age: number = 34
let firstName: string = 'Skylar'
let busy: boolean = true


function response( a: number, b: number ){
    return a + b 
}


//? console.log(response("5","6")) 
//* Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(response(5,6))