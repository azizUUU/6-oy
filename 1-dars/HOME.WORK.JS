// ------------1---------------
// const bugun = new Date();
// console.log(bugun.getDate());

// ------------2---------------

// const sana = new Date();

// const yil = sana.getFullYear();
// const oy = sana.getMonth()+1;
// const kun = sana.getDate();

// console.log("Yil:" + yil + " Oy raqami:" + oy + " Kun:" + kun);

// ------------3---------------

// const haftaKunlari = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
// const oyNomlari = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr","Noyabr", "Dekabr"];

// const bugun = new Date();

// const kunlarNomi = haftaKunlari[bugun.getDay()];
// const oylarNomi = oyNomlari[bugun.getMonth()];
// const sana = String(bugun.getDate()).padStart(2 ,0);
// const yil = (bugun.getFullYear());

// const natija = `${kunlarNomi}, ${oylarNomi}, ${sana}, ${yil}`

// console.log(natija);

// ------------4---------------

// const bugun = new Date();
// const yangiYil = new Date(2027,0,1);

// const farqiMs = yangiYil - bugun;
// const kunlarFarqi = Math.ceil(farqiMs / (1000 * 60 * 60 * 24));
// console.log("Yangi yilgacha " + kunlarFarqi + " kun qoldi.");

// ------------5---------------

// const bugun = new Date();

// const sana = String(bugun.getDate()).padStart(2 , 0);
// const oy = String(bugun.getMonth()).padStart(2 , 0);
// const yil = bugun.getFullYear();
// const soat = String(bugun.getHours()).padStart(2 , 0);
// const minut = String(bugun.getMinutes()).padStart(2 , 0);

// console.log(sana + "." +  oy + "." + yil + " " + soat + ":" + minut);           


// ------------6---------------

// setTimeout(() => {
//    console.log("Salom Dunyo!");
// }, 2000);


// ------------7---------------

// let hisob = 0;

// const id = setInterval(() => {
//   hisob++;
//   console.log("Tik-tak", hisob);

//   if (hisob === 3) {
//     clearInterval(id);
//   }
// }, 1000);


// ------------8---------------

// setTimeout(() => {
//  console.log("Bir");
// },1000);
// setTimeout(() => {
//  console.log("Ikki");
// },3000);
// setTimeout(() => {
//  console.log("Uch");
// },6000);

// ------------9---------------

// let son = 5; 
// console.log(son);


// const id = setInterval(() => {
//     son--;
//     console.log(son);
    
//     if(son === 0){
//         console.log("Start!");
//         clearInterval(id);
//     }
// }, 1000);

// ------------10---------------
// function VaqtniolibBer(){
//     let hozirgiVaqt = new Date();
//     let soat = String(hozirgiVaqt.getHours()).padStart(2 , "0");
//     let minut = String(hozirgiVaqt.getMinutes()).padStart(2, "0");
//     let sekund = String(hozirgiVaqt.getSeconds()).padStart(2, "0");
//     return `${soat}:${minut}:${sekund}`;
// }

// let chiqdi = 0;

// const id = setInterval(() => {
//     chiqdi++;
//     console.log(VaqtniolibBer())
//     if(chiqdi === 5){
//         clearInterval(id);
//     }
// }, 1000);