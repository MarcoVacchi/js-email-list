/*Ciao ragazzi,
esercizio di oggi: *Email List*
nome repo: js-email-list
Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
Programmi utili
Postman API
Insomnia API
Thunder Client (VSCode Extension)*/



const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailList = document.getElementById("email-list");
const button = document.getElementById("button");

function refreshEmail(){
let emails = ''
let count = 0;
let countNumber = 1;
//console.log(emailList);

for(let i = 0; i < 10; i++){

 axios.get(endPoint)
 .then(response => {

    let email = response.data.response;
    //console.log(email);

    emails += `<li class="list-group-item list-group-item-dark text-black fs-3 mb-2 rounded-pill border-black mt-2">${countNumber} - ${email}</li>`;

    count ++;
    countNumber ++;
    
    if( count === 10){
      // console.log(emails);
        emailList.innerHTML = emails;
        button.addEventListener("click", refreshEmail);
    } 
})
    .catch(error => {
        console.error("Errore:", error);
        //console.log(error);
    });
 }
 
}

// invoco la funzione per richiamare tutto il programma

refreshEmail();




