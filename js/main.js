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
let emails = ''
const emailList = document.getElementById("email-list");
let count = 0;
//console.log(emailList);

for(let i = 0; i <= 10; i++){

 axios.get(endPoint)
 .then(response => {

    let email = response.data.response;
    //console.log(email);

    emails += `<li>${email}</li>`;

    count ++;

    if( count === 10){
      // console.log(emails);
        emailList.innerHTML = emails;
    } 
})
    .catch(error => {
        console.error("Errore:", error);
        //console.log(error);
    });
 
}
