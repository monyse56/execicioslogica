// Exemplo de dados em JSON representando o faturamento diário
const faturamentoMensal = [
    { "dia": 1, "valor": 200 },
    { "dia": 2, "valor": 0 },
    { "dia": 3, "valor": 300 },
    { "dia": 4, "valor": 100 },
    { "dia": 5, "valor": 400 },
    { "dia": 6, "valor": 0 },
    { "dia": 7, "valor": 0 },
    { "dia": 8, "valor": 500 }
];

// Função para calcular os resultados
function calcularFaturamento(faturamento) {
    let menorValor = Infinity; // Inicializa com infinito
    let maiorValor = -Infinity; // Inicializa com -infinito
    let soma = 0;
    let diasComFaturamento = 0;

    // Itera pelo vetor para calcular o menor, maior e a soma
    faturamento.forEach(dia => {
        if (dia.valor > 0) { // Ignorar dias sem faturamento
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    // Calcula a média mensal
    const mediaMensal = soma / diasComFaturamento;

    // Conta os dias com faturamento acima da média
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Calculando os resultados
const resultados = calcularFaturamento(faturamentoMensal);

// Exibindo os resultados
console.log("Menor valor de faturamento:", resultados.menorValor);
console.log("Maior valor de faturamento:", resultados.maiorValor);
console.log("Número de dias acima da média:", resultados.diasAcimaDaMedia);
