// Dados de faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calculando o valor total mensal
const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calculando o percentual de representação de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
