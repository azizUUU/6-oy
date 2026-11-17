let olish = document.getElementById("shop-title");

let BarchaCardlar = document.querySelectorAll(".card");
console.log(BarchaCardlar.length);

let BarchaH3lar = document.querySelectorAll("h3");
for (element of BarchaH3lar) {
    console.log(element.textContent);   
}

let BarchaPricelar = document.querySelectorAll(".price");
for(pricelar of BarchaPricelar){
    console.log(pricelar.textContent);
}

let Tanlash = document.querySelector("#card3 .stock");
console.log(Tanlash.textContent);

let Otasi = document.querySelector("#shop");
console.log(Otasi.firstElementChild);
console.log(Otasi.lastElementChild);

let KengisigaOtish = document.querySelector("#card2");
console.log(KengisigaOtish.nextElementSibling.textContent);

let OrqasigaOtish = document.querySelector("#card4");
console.log(OrqasigaOtish.previousElementSibling.textContent);

let NominiChiqarish = document.querySelector(".stock");
let card = NominiChiqarish.parentElement;
let Name = card.querySelector("h3");
console.log(Name.textContent);

let NominiOzgartirish = document.querySelector("#shop-title");
NominiOzgartirish.textContent = "Yangi mevalar dokoni";
NominiOzgartirish.style.color = "green";


const BarchaCardlarga = document.querySelectorAll(".card");
for(cardlar of BarchaCardlarga){
    cardlar.style.borderRadius = "10px"
}

const Class = document.querySelector("#card1");
Class.classList.add("sale");

const clasS = document.querySelector("#card3");
clasS.classList.add("sold-out");

const BarchaPricelarning = document.querySelectorAll(".price");
for(price of BarchaPricelarning){
    price.style.fontWeight = "bold";
}

const barchaStocklar = document.querySelectorAll(".stock");

for (const stock of barchaStocklar) {
    if (stock.textContent === "Tugagan") {
        stock.parentElement.classList.add("sold-out");
    } else if (stock.textContent === "Bor") {
        stock.style.color = "green";
    }
}

const Narxlari = document.querySelectorAll(".card");

for (const narxi of Narxlari) {
    const PriceElement = narxi.querySelector(".price");    
    const Pricevalue = Number(PriceElement.textContent);
    
    if (Pricevalue < 10000) {
        narxi.classList.add("sale");
    }
}

const barchaCardlar = document.querySelectorAll(".card");

for (let i = 0; i < barchaCardlar.length; i++) {
    if (i % 2 !== 0) {
        barchaCardlar[i].style.backgroundColor = "lightgray";
    }
}

const barchaCardlaR = document.querySelectorAll(".card");

let engKattaNarx = 0;
let engQimmatCard = null;

for (const card of barchaCardlaR) {
    const priceElement = card.querySelector(".price");
    const priceValue = Number(priceElement.textContent);
    
    if (priceValue > engKattaNarx) {
        engKattaNarx = priceValue;
        engQimmatCard = card;
    }
}

if (engQimmatCard) {
    engQimmatCard.style.border = "2px solid red";
}