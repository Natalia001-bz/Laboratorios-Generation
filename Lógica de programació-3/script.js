function calcularFactorial() {
    let numeroN = document.getElementById("numero-factorial").value.trim();
    let resultadoDiv = document.getElementById("resultados");

    
    if (numeroN === "") {
        resultadoDiv.textContent = "Por favor, introduce un número.";
        return;
    }

    let numero = Number(numeroN);

   
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        resultadoDiv.textContent = "Entrada inválida. Ingresa un número entero positivo.";
        return;
    }

   
    if (numero > 5000) {
        resultadoDiv.textContent = "Número demasiado grande. Ingresa un valor menor o igual a 5000.";
        return;
    }

    
    let resultado = BigInt(1);
    for (let i = 2; i <= numero; i++) {
        resultado *= BigInt(i);
    }

   
    resultadoDiv.textContent = `El factorial de ${numero} es:\n${resultado.toLocaleString()}`;
}


document.getElementById("reinicio").addEventListener("click", function() {
    document.getElementById("numero-factorial").value = "";
    document.getElementById("resultados").textContent = "";
});
