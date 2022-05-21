let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7




const monedas = JSON.parse(localStorage.getItem("monedasLocales")) || [];
const movimientos = JSON.parse(localStorage.getItem("movimientosLocales")) || []; 




function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance') || [];;
    };
};

ingresaImpor();

const btn = document.getElementById("ingresarDinero");

btn.addEventListener("click",() => {  
depo =  parseFloat(prompt("Cuanto dinero se depositara?")) ||0;
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor || '';
let balancePesos = localStorage.getItem('balancePesos');
localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(depo));
imporMon = localStorage.getItem('balancePesos'); 
document.getElementsByClassName("import")[1].innerHTML= imporMon || '';
}); 


let k = 0; 
const movimientosCripto = document.getElementById("movimientosCripto");


for (const mov of movimientos) {  
if(mov.nombre != 0){
let parrafo = document.createElement("li");
parrafo.innerHTML = (`<span>${mov.nombre}  </span><span>${mov.fecha}   </span><span>${mov.importePesos}   </span><span>${mov.importe}   </span>`)||'';
movimientosCripto.append(parrafo);
 k++;
};
};

