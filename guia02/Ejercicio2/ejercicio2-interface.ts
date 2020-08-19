/*
Crear una interface en TypeScript a partir de este código JavaScript:
var spiderman = {
nombre: "Peter parket",
poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
*/

// Creacion de interface //
interface Superhero {
    Name: string,
    powers: string [] 
}

var spiderman:Superhero = {
    Name: "Peter Parker" ,
    powers: ["trepar", "fuerza", "agilidad", "telas de araña"]
}

console.log(spiderman);
