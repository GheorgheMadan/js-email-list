// Descrizione
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// seleziono l'elemento di output 
const output = document.getElementById('output')
console.log(output)

// setto l'endpoint
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// creo un ciclo che mi stampi automaticamente 10 mail
const numArr = []
let items = ''
for(let i = 1; i <= 10; i++){
    // console.log(endPoint);
    // const numRandom = generaNumeroRandomRange(1, 10)
    // numArr.push(numRandom)
    // items += `<li>${numRandom}</li>`
     axios.get(endPoint)
        .then(responseEmail =>{
            const email = responseEmail.data.response;
            console.log(email)
            output.innerHTML += `<li>${email}</li>`
        })
        .catch(error =>{
            // codice da eseguire in caso di errore 
            console.error(error);
        })
}






// FUNZIONE CHE GENERA UN NUMERO DA ... A ...
function generaNumeroRandomRange(max, min){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}
