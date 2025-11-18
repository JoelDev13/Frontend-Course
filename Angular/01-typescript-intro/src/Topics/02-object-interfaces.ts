let skill: String[] = ["volar", "superFuerza"]

interface character {
    name: String;
    hp: number;
    skill: string[];
    hometown?: String;
    
}

let p1: character = {
    name: "joel",
    hp: 99,
    skill: ["volar", "superVelocidad"],
}

p1.hometown= "en el mundo";

console.log(p1);