// Descrizione
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// seleziono l'elemento di output 
const output = document.getElementById('output')
console.log(output)

// const emailArr = []
// creo un ciclo che mi stampi automaticamente 10 numeri casuali per provare il ciclo
for(let i = 1; i <= 10; i++){
    console.log(generaNumeroRandomRange(1, 10));
    
}


// FUNZIONE CHE GENERA UN NUMERO DA ... A ... I NUMERI LI SCELGO IO
console.log(generaNumeroRandomRange(100, 50))

function generaNumeroRandomRange(max, min){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}
