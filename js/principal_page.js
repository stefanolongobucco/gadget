let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7




const monedas = JSON.parse(localStorage.getItem("monedasLocales"));
 



let nombre = localStorage.getItem('nombre');

document.getElementById("titulo").innerHTML=nombre[0].toUpperCase() + nombre.slice(1).toLowerCase(); 



function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance');;
    };
};

ingresaImpor();

const btn = document.getElementById("ingresarDinero");

btn.addEventListener("click",() =>{  
depo =  parseFloat(prompt("Cuanto dinero se depositara?")) || 0;
if (depo > 0){
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor;
document.getElementsByClassName("import")[1].innerHTML= ((parseFloat(impor)||0)-(parseFloat(acumPesos(movimientos))||0));
}else{alert("El importe no puede ser 0 ni menor a 0")};  
}); 


let k = 0; 
const Cripto2 = document.getElementById("Cripto2");
for (const moneda of monedas) {  
let parrafo = document.createElement("li");
if(moneda.porcentaje >=0){
    parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monP">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div>   <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div>`;
}else{parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monN">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div> <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div>`;}

 Cripto2.append(parrafo);
 k++;
};

