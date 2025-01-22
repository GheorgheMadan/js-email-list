// Descrizione
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// seleziono l'elemento di output 
const output = document.getElementById('output')
console.log(output)
// seleziono il pulsante 
const button = document.getElementById('invia')
const title = document.getElementById('titolo')

// setto l'endpoint
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// creo un array che contenga le mail 
let emailArr = []

// stampo l'array in console per vedere se funziona
console.log(emailArr);

button.addEventListener('click', () =>{

    // Reset dell'array e dell'output ad ogni clic
    emailArr = []; // Resetto l'array delle email
    output.innerHTML = ''; // Svuoto il contenuto della lista HTML

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
             // utilizzo innerHTML per stampare in pagina utilizzando l'oggetto estrapolato
            output.innerHTML += `<li class="border rounded fs-5 list-unstyled p-2 bg-button text-white shadow fw-bold">${email}</li>`
        })
        .catch(error =>{
            // codice da eseguire in caso di errore 
            console.error(error);
        })
}
    if(button.innerHTML === 'GENERA'){
        button.innerHTML = 'RIGENERA'
        title.classList.remove('d-none');
        title.classList.add('d-inline');
    } else {
        button.classList.remove('btn-warning');
        button.classList.add('btn-primary');
    }
});