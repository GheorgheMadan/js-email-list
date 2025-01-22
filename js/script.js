// Descrizione
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// seleziono l'elemento di output 
const output = document.getElementById('output')
console.log(output)

// setto l'endpoint
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// creo un array che contenga le mail 
const emailArr = []
// creo un ciclo che mi stampi automaticamente 10 mail
for(let i = 1; i <= 10; i++){
    // faccio partire la richiesta Ajax verso l'API per ricevere l'email
     axios.get(endPoint)
        .then(responseEmail =>{
            const email = responseEmail.data.response;
            // // verifico se funziona
            // console.log(email)

            // pusho nell'array le mail creando un oggetto
            emailArr.push({mail: email})

            // estrapolo l'oggetto mail
            const {mail} = emailArr
            
             // utilizzo innerHTML per stampare in pagina utilizzando l'oggetto estrapolato
            output.innerHTML += `<li>${mail}</li>`
        })
        .catch(error =>{
            // codice da eseguire in caso di errore 
            console.error(error);
        })
}
// stampo l'array in console per vedere se funziona
console.log(emailArr);
