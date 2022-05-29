
document.querySelector(".bars__menu").addEventListener("click",animateBars);
document.querySelector(".ingreso").addEventListener("click",abrirDeposito);
document.querySelector(".volPed").addEventListener("click",abrirDeposito);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const deposito = document.querySelector(".deposito");
const header = document.querySelector(".header");


function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    header.classList.toggle("activeheader");

}

function abrirDeposito(){
    deposito.classList.toggle("activedeposito");     
    document.getElementById("depos").value = '$ 100.00 ARS' ; 
    document.getElementById("depMonImp").innerHTML= '$ 0.00 ARS' ; 
    document.getElementById("depComImp").innerHTML= '$ 0.00 ARS'; 
    document.getElementById("depTotImp").innerHTML= '$ 0.00 ARS';  
} 






const convertt = document.getElementById("depos"); 


convertt.onkeyup = () => {   
    let convertt = document.getElementById("depos").value || 0;                
    document.getElementById("depMonImp").innerHTML= `$ ${parseFloat(convertt).toFixed(2)} ARS` ;  
    let comision = convertt * 0.10;
    document.getElementById("depComImp").innerHTML= `$ ${parseFloat(comision).toFixed(2)} ARS` ; 
    let total = convertt - comision;    
    document.getElementById("depTotImp").innerHTML= parseFloat(total).toFixed(2); 

};



document.getElementById("realPed").addEventListener("click",() =>{  
depo = document.getElementById("depTotImp").innerText;
if (depo > 0){
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor;
abrirDeposito();
}else{alert("El importe no puede ser 0 ni menor a 0")};  
}); 


let impor = 0
let imporMon = 0 
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = localStorage.getItem("usd")


const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12:"false"};
const movimientos =  JSON.parse(localStorage.getItem("movimientosLocales"))  || [];
const monedas = JSON.parse(localStorage.getItem("monedasLocales")) || [];



class nuevoMovimiento {
    constructor (nomRed,moneda, cantidad,pesos) {
        this.nomRed = nomRed,
        this.nombre = moneda;
        this.fecha = hoy.toLocaleString("es-ES", options);
        this.importe = cantidad;
        this.importePesos = pesos;
        this.orden = Date.now()
    
    }};


     function sumarMov(...numeros){
        
        return numeros.reduce((acc,n) => acc + n)
        
    };
    

    const mostrarAcum = (y,array)=> {
        const newArray =[];
         for (const mov of array){            
            (mov.nomRed == monedas[y].nomRed) &&
              newArray.push(mov.importe);                 
         };        
         return sumarMov(...newArray);
        };
        
      


  const acumPesos = (array)=> {
      const newArray =[];
       for (const mov of array){  
            newArray.push(mov.importePesos);                        
       };        
       return sumarMov(...newArray);
      }; 


let URLactual = window.location.href; 


      function ingresaImpor(){
        document.getElementsByClassName("import")[0].innerHTML= localStorage.getItem('balance')||0;

        let posicionWallet = URLactual.indexOf("wallet");
        if (posicionWallet !== -1){
             document.getElementsByClassName("import")[1].innerHTML= (parseFloat(localStorage.getItem('balance')) - (parseFloat(acumPesos(movimientos)) ||0 )) ||0;
            };
        let posicionCompra = URLactual.indexOf("ComprarCripto");
        if (posicionCompra !== -1){
             document.getElementsByClassName("fondosCV")[0].innerHTML=`Usar todos tus Fondos($${(parseFloat(localStorage.getItem('balance')) - (parseFloat(acumPesos(movimientos)) ||0 )) ||0.00})`;
            };
        };
    
    ingresaImpor();   
     
      
    let posicioCotizacion = URLactual.indexOf("cotizacion");
    if (posicioCotizacion !== -1){    
    function comprarCripto2(){  
        let nom = document.getElementById("monCam").value;  
        const pos = monedas.findIndex( (element) => element.nomRed == nom); 
        localStorage.setItem('idMon', pos);
        localStorage.setItem('tipAcc','Comprar');
        localStorage.setItem('impConv',document.getElementById("peso").value);  
        location.href="ComprarCripto.html";
        alert("no funciona si esto")
    }; };


function comprarCripto(y){
    localStorage.setItem('idMon', y);
    localStorage.setItem('tipAcc','Comprar');
    localStorage.setItem('impConv',0.00);
    location.href="ComprarCripto.html";  
};
function venderCripto(y){
    localStorage.setItem('idMon', y);
    localStorage.setItem('tipAcc','Vender');
    localStorage.setItem('impConv',0.00);
    location.href="ComprarCripto.html";
};  




