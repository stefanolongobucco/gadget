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

btn.addEventListener("click",
function(){  
depo =  parseFloat(prompt("Cuanto dinero se depositara?"));
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor;
let balancePesos = localStorage.getItem('balancePesos');
localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(depo));
imporMon = localStorage.getItem('balancePesos'); 
document.getElementsByClassName("import")[1].innerHTML= imporMon;
}); 


let k = 0; 
const Cripto2 = document.getElementById("Cripto2");
for (const moneda of monedas) {  
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${moneda.nombre}  </span><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span>`;
 Cripto2.append(parrafo);
 k++;
};

