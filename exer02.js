// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    // Inicializando os dois primeiros números da sequência
    let a = 0, b = 1, proximo = 0;

    // Caso o número informado seja 0 ou 1, ele pertence diretamente
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Calculando a sequência de Fibonacci até que o próximo valor seja maior ou igual ao número informado
    while (proximo < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    // Verificando se o número informado é igual ao último valor calculado
    if (proximo === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Testando a função com um número informado
const numeroInformado = 23; // Substitua por qualquer número para testar
console.log(pertenceFibonacci(numeroInformado));
