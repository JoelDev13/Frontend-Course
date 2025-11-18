function addNumbers(a: number, b: number) {
    return a + b;
}

//funcion de flecha
const addNumbersArrow = (a:number, b:number) =>{
    return a / b;
}

const multuplyNumbers = (primerNombre: number, segundoNombre?: number, base: number = 2) => {
    return primerNombre * base;
}

//let result: number =addNumbers(10, 10)
//let result2: number = addNumbersArrow(10, 5);
//let multiplyResult: number = multuplyNumbers(19);

//console.log(result, result2 , multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healthPLayer = (character: Character, amount: number) => {
    character.hp += amount;
}

const Joel: Character = {
    name: 'Joel',
    hp: 90,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healthPLayer(Joel, 10);

Joel.showHp();