
let string = "Monyse";

// Variável para armazenar a string invertida
let stringInvertida = "";

// Invertendo os caracteres da string manualmente
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

// Exibindo os resultados
console.log("String original:", string);
console.log("String invertida:", stringInvertida);
