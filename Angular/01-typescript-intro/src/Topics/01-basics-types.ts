const name: String = "joel";

/*hola = 123;  esto da un erro porque no se le puede asignar un numero a un tipo String*/

let hp: number | "Full" = 95;
hp = "Full";
let isAlieve: Boolean = true;

console.log({
    name, hp, isAlieve
});