document.getElementById("interestForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener y validar los saldos
    const saldoSinGracia = parseFloat(document.getElementById("saldoSinGracia").value.replace('$', '').replace(',', '').trim());
    const saldoConGracia = parseFloat(document.getElementById("saldoConGracia").value.replace('$', '').replace(',', '').trim());
    const tasaAnual = parseFloat(document.getElementById("tasaAnual").value);
    const diasPeriodo = parseInt(document.getElementById("diasPeriodo").value);

    if (isNaN(saldoSinGracia) || saldoSinGracia < 0 || isNaN(saldoConGracia) || saldoConGracia < 0) {
        alert("Por favor, ingresa saldos válidos en ambos campos.");
        return;
    }

    if (isNaN(diasPeriodo) || diasPeriodo <= 0) {
        alert("Por favor, ingresa un número válido de días del periodo.");
        return;
    }

    // Calcular saldo promedio total
    const saldoPromedioTotal = saldoSinGracia + saldoConGracia;

    // Calcular la tasa diaria y el interés total
    const tasaDiaria = tasaAnual / 360 / 100; // Convertir tasa anual a diaria
    const interesTotal = saldoPromedioTotal * tasaDiaria * diasPeriodo;

    // Mostrar resultados
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Tasa anual:</strong> ${tasaAnual}%</p>
        <p><strong>Tasa diaria:</strong> ${(tasaDiaria * 100).toFixed(4)}%</p>
        <p><strong>Saldo promedio total:</strong> $${saldoPromedioTotal.toFixed(2)}</p>
        <p><strong>Interés total del periodo:</strong> $${interesTotal.toFixed(2)} MXN</p>
    `;
});
