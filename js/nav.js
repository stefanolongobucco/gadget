
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
function comprar(y){  
    monedas[y].seMuestra ++;  
    cBtc =  parseFloat(prompt("Cuantos Cripto quieres comprar?(en pesos)"+`${monedas[y].nomRed}`)) ||0;
    if (cBtc > 0){
    if((localStorage.getItem('balance')-(parseFloat(acumPesos(movimientos)||0))) >= cBtc){  
        movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(((cBtc/usd) / monedas[y].precioCompra)),parseFloat(cBtc)));      
        let muestrarAcum = parseFloat(mostrarAcum(y,movimientos)||0);          
        let posicion = URLactual.indexOf("wallet");
        if (posicion !== -1){
        document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= parseFloat(muestrarAcum) ||0; }
        ingresaImpor();
        localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));
        localStorage.setItem("monedasLocales", JSON.stringify(monedas));              
}else{alert("No tiene suficiente dinero en su cuenta")};        
}else{alert("El importe no puede ser 0 ni menor a 0")};   
};

function vender(y){
cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)")) || 0;
if (cBtc > 0){
if(parseFloat(mostrarAcum(y,movimientos)||0) >= ((cBtc/usd) / monedas[y].precioVenta)){   
    let posicion = URLactual.indexOf("wallet");
    if (posicion !== -1){
    movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(-((cBtc/usd) / monedas[y].precioVenta)),parseFloat(-cBtc)));  }       
    document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= parseFloat(mostrarAcum(y,movimientos)||0) ||'';                 
    localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));  
    ingresaImpor();
        if(parseFloat(mostrarAcum(y,movimientos)||0) == 0){ 
            monedas[y].seMuestra =0;    
            localStorage.setItem("monedasLocales", JSON.stringify(monedas));       
            borrar(y);  
        };     

    }else{alert("No tiene suficiente dinero en su cuenta")};    
}else{alert("El importe no puede ser 0 ni menor a 0")};    
  };

  function comprarCripto(y){
    comprar(y);  
};
function venderCripto(y){
    vender(y);
};  
