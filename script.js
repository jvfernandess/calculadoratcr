function calcularJuros() {
    var valorEmprestimo = parseFloat(document.getElementById('valorEmprestimo').value);
    var taxaJurosAnual = parseFloat(document.getElementById('taxaJuros').value);
    var periodoPagamento = parseInt(document.getElementById('periodoPagamento').value);

    var taxaJurosMensal = taxaJurosAnual / 12 / 100;
    var taxaMensal = taxaJurosMensal;
    var pagamentoMensal = (valorEmprestimo * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -periodoPagamento));

    var custoTotal = pagamentoMensal * periodoPagamento;
    var jurosTotal = custoTotal - valorEmprestimo;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML =
        '<p>Valor do empréstimo: R$ ' + valorEmprestimo.toFixed(2) + '</p>' +
        '<p>Taxa de juros anual: ' + taxaJurosAnual.toFixed(2) + '%</p>' +
        '<p>Taxa de juros mensal: R$ ' + (taxaJurosMensal * valorEmprestimo).toFixed(2) + '</p>' +
        '<p>Período de pagamento: ' + periodoPagamento + ' meses</p>' +
        '<hr>' +
        '<p>Pagamento mensal estimado: R$ ' + pagamentoMensal.toFixed(2) + '</p>' +
        '<p>Custo total do empréstimo: R$ ' + custoTotal.toFixed(2) + '</p>' +
        '<p>Juros totais pagos: R$ ' + jurosTotal.toFixed(2) + '</p>';
}
