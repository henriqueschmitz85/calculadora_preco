function calcular() {
    // Obtendo os valores dentro da função para garantir que eles sejam atualizados quando a função for chamada
    let custo_ger = parseFloat(document.getElementById("custo-gerencial").innerHTML);
    let vlr_venda = parseFloat(document.getElementById("novo-valor-venda").innerHTML);

    // Verifica se os valores são números válidos
    if (!isNaN(custo_ger) && !isNaN(vlr_venda)) {
        let resultado = (vlr_venda / custo_ger) - 1;
        console.log("Resultado: ", resultado); // Exibe o resultado no console ou use conforme necessário
    } else {
        console.log("Erro: Um ou ambos os valores são inválidos");
    }
}


