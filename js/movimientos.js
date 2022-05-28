/* let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7





const movimientos = JSON.parse(localStorage.getItem("movimientosLocales")) || [];  
const monedas = JSON.parse(localStorage.getItem("monedasLocales")) || [];*/



function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance') || [];;
    };
};

ingresaImpor();

const btn = document.getElementById("ingresarDinero");

/* btn.addEventListener("click",() =>{  
depo =  parseFloat(prompt("Cuanto dinero se depositara?")) || 0;
if (depo > 0){
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor;
document.getElementsByClassName("import")[1].innerHTML= ((parseFloat(impor)||0)-(parseFloat(acumPesos(movimientos))||0));
}else{alert("El importe no puede ser 0 ni menor a 0")};  
}); 
 */

let k = 0; 
const movimientosCripto = document.getElementById("movimientosCripto");

const movi = movimientos.sort((a,b)=> {return b.orden - a.orden;})


for (const mov of movi) {  
if(mov.nombre != 0){
let parrafo = document.createElement("li");
parrafo.innerHTML = (`<div class="mov_l1"><span>${mov.nombre}  </span><span>${mov.fecha}   </span><span>${mov.importePesos}   </span><span>${mov.importe}   </span></div><div><hr></div>`)||'';
movimientosCripto.append(parrafo);
 k++;
};
};

