let mazzo;
let chiamtaMazzo = true;
let conteggio =0;
let score = 0;
let scoreBanco = 0;
let pt = document.getElementById("pt");
let ptBanco = document.getElementById("ptBanco");
let risultato = document.getElementById("risultato");

$(document).ready(function() {
    $('#formCarta').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
        type: 'POST',
        url: 'chiama.php',
        data: formData,
        success: function(response) {
            if(chiamtaMazzo){
            mazzo = JSON.parse(response);
            chiamtaMazzo = false;
            }
            carta();
        }
        })
    })
})

let carta = () =>{
    let primaCarta = mazzo[conteggio++];
    score += primaCarta["valore"];
    var elem = document.createElement("img");
    document.getElementById("tavolo").appendChild(elem);
    elem.src = primaCarta["immagine"];
    pt.innerHTML = "il tuo punteggio è " + score;
    if(score>7) banco();
}

$(document).ready(function() {
    $('#formBanco').submit(function(event) {
        event.preventDefault();
        $.ajax({
        type: 'POST',
        success: function() {
            if(score<8) banco();
            else lose();
        }
        })
    })
})

let banco = () =>{
    while(scoreBanco<=7.5 && scoreBanco<score && score<8){
    let primaCarta = mazzo[conteggio++];
    scoreBanco += primaCarta["valore"];
    var elem = document.createElement("img");
    document.getElementById("tavoloBanco").appendChild(elem);
    elem.src = primaCarta["immagine"];
    ptBanco.innerHTML = "il punteggio del Banco è " + scoreBanco;}
    if(scoreBanco>7.5) win();
    else lose();
}
let win = () =>{
    risultato.innerHTML = "<h2>Hai Vinto!</h2>";
    $("#rigiocaButton").show();
    aggiornaPunteggio(1)

}
let lose = () =>{
    risultato.innerHTML = "<h2>Hai Perso!</h2>";
    $("#rigiocaButton").show();
    aggiornaPunteggio(0)
}
let nascondi = () =>{
    $("#rigiocaButton").hide();
}
let aggiornaPunteggio = (youWon) =>{
        $.ajax({
        type: 'POST',
        url: 'aggiorna.php',
        data: {stato : youWon},
        success: function() {
        }
    })

}