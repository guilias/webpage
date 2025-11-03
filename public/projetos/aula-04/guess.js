let texto = document.getElementById("texto");
let exibirNumeroGerado = document.getElementById("exibirNumeroGerado");


function enviaNumero(){
    texto.innerHTML = "Analisando dados...";
    texto.style.color = "white";
    let numeroAleatorio = Math.floor(Math.random() * 99);
    let numeroDigitado = document.getElementById("guess-numero").value;
    exibirNumeroGerado.innerHTML = "Número gerado: " + numeroAleatorio;
    if(numeroAleatorio == numeroDigitado){
        texto.innerHTML = "Acertou, caralho!!!";
        texto.style.color = "green"
    }
    else{
        texto.innerHTML = "Não foi dessa vez... Tente novamente!";
        texto.style.color = "red"
    }
}