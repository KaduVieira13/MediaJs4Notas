function media() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);


    var media = (nota1 + nota2 + nota3 + nota4) / 4;


    if (media < 5) {
        alert("Você foi reprovado, sua média foi: " + media);
    }

    else if (media <= 6) {
        alert("Você foi aprovado, mas pode melhorar, sua média foi: " + media);
    }

    else {
        alert("Você foi aprovado! sua média foi: " + media)

    }
}



