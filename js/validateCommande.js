const birthday=document.querySelector('.inscription_txt');
const adress=document.querySelector('.commande_txt');
const formH2=document.querySelector('.user_form h2');
const submitForm=document.querySelector('input[type="submit"]');
console.log(submitForm)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isCommande = urlParams.get("commande");
console.log(birthday)
if (isCommande) {
    adress.style.display='block';
    formH2.innerHTML='Valider Votre Commande';
    submitForm.value='Commander';
    birthday.style.display='none';
} 
