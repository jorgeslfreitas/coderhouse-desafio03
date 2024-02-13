let valorEmprestimo = Number(prompt("Digite o valor que desejado de empréstimo: "));
let parcelasEmprestimo = Number(prompt("Número de parcelas: "));
let emprestimo1HTML = document.querySelector("#emprestimo1");
let emprestimo2HTML = document.querySelector("#emprestimo2");

let valorParcelas = valorEmprestimo / parcelasEmprestimo.toFixed(2);

emprestimo1HTML.innerHTML = `Valor empréstimo de R$${valorEmprestimo}, quantidades de parcelas ${parcelasEmprestimo}, no valor de R$${valorParcelas} por parcela`;

function emprestimo(valorEmprestimo, parcelasEmprestimo, valorParcelas, emprestimo2HTML) {
    let saldoDevedor = valorEmprestimo;
    for (let i = 1; i <= parcelasEmprestimo ; i++) {
        saldoDevedor = saldoDevedor - valorParcelas;
        emprestimo2HTML.innerHTML += `Saldo devedor por parcelas: Parcela ${i}: R$${saldoDevedor.toFixed(2)} <br>`;
    }
}

emprestimo(valorEmprestimo, parcelasEmprestimo, valorParcelas, emprestimo2HTML);
