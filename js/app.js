const pizzaSelect = document.querySelector(".pizza_select");
const imgPizzaSelected = document.querySelector(".img_pizza_selected img");
const pizName = document.querySelector(".piz_na");
const qteChoiceP = document.querySelector(".qte");
const qtePiz = document.querySelector('input[type="number"]');
const pricePizza = document.querySelectorAll(".price_pizza");
const priceChoice = document.querySelector(".pizza_choice");
const priceTotal = document.querySelector(".price_total");
const sizePizza = document.querySelector(".size_pizza_select");
const patePizza = document.querySelector(".pate");
const tailleChoice = document.querySelector(".taille_choice");
const pateChoice = document.querySelector(".pate_choice");
const supprimer = document.querySelector(".modify_and_delete span:nth-child(1)");
const modifier = document.querySelector(".modify_and_delete  span:nth-child(2)");

let qteChoice = 1;
var prixUnit = pricePizza[0].innerHTML;

let pricePizzaValue = pricePizza.innerHTML;

var pizzaSelected = "";

//évenement sur la listes des pizzas
pizzaSelect.addEventListener(
  "change",
  (e) => {
      pizzaSelected = e.target.value;
      if (pizzaSelected === "Pizza Anchovies") {
      pizzaChange("./images/imgp-1.png", "Pizza Anchovies", 15.99);
      montantTotal(); 
    } else if (pizzaSelected === "Pizza Salami") {
      pizzaChange("./images/imgp-3.png", "Pizza Salami", 18.99);
      montantTotal();    
    } else if (pizzaSelected === "Pizza Colors") {
      pizzaChange("./images/imgp-2.png", "Pizza Colors", 19.99);
      montantTotal();    } else {
      pizzaChange("./images/pizza.png", "Pizza Pepperoni", 14.99);
      montantTotal();   
     }
  },false);
//function pour l'evement de la liste des pizzas
let pizzaChange = (imgSelected, pizNameP, priceChoiceP) => {
  imgPizzaSelected.src = imgSelected;
  pizName.innerHTML = pizNameP;
  priceChoice.innerHTML = pizNameP;

  pricePizza.forEach((prix) => {
    prix.innerHTML = priceChoiceP;
    prixUnit = prix.innerHTML;
  });
};

//évenement sur le size des pizza
sizePizza.addEventListener("change",(e)=>{
    tailleChoice.innerHTML=e.target.value;
},false);


let montantTotal=()=>{
    priceTotal.innerHTML = parseFloat(prixUnit) * parseInt(qteChoice);
}

//évenement sur les pates
patePizza.addEventListener('change',(e)=>{
    pateChoice.innerHTML=e.target.value;
},false);

//évenement sur la quantite choisie 
qtePiz.addEventListener(
  "change",
  (e) => {
    qteChoice = e.target.value;
    montantTotal();
//reinitialison des choix a 1 au cas ou la qte est invalide
    if (qteChoice == 0 || qteChoice < 0) qteChoice = 1;
    qteChoiceP.innerHTML = qteChoice;
  },false);

//évenement sur supprimer
supprimer.addEventListener('click',()=>{
    if(qteChoice>1){
        if(confirm('Voulez vous vraiment  supprimer un pizza de la liste?'))
        {
            qteChoice--;
            qteChoiceP.innerHTML = qteChoice;
            qtePiz.valueAsNumber=qteChoice;
            montantTotal();
        }else{
            alert("Supression Annuler!");
        }
    }else{
        alert('Vous avez une seule Pizza dans votre liste');
    }
},false);

//évenement sur modifier
modifier.addEventListener('click',()=>{
    alert('Vous pouvez modifier votre Pizza maintenant!');
},false);




//checkout section
