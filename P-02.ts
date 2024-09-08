function Greet( greet: string): string{
    return greet + " everyone";
}

const greet: string ="hello";
const text = Greet(greet);

console.log(`The text is: ${text} `);