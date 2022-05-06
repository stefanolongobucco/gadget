
var impor = 0
var imporMon = 0
var depo = 0
var cBtc = 0
var vBtc = 0
const usd = 202.7


let titulo = prompt("Cual es tu nombre?")
document.getElementById("titulo").innerHTML=titulo[0].toUpperCase() + titulo.slice(1).toLowerCase(); 



function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= impor;
    };
};

ingresaImpor();


const monedas =[
{id : 1, nombre : '', nomRed : 'UNI', precio : 8.97},
{id : 2, nombre : 'Bitcoin', nomRed : 'BTN', precio : 39559.94},
{id : 3, nombre : 'Dai', nomRed : 'DAI', precio : 1 },
{id : 4, nombre : 'Etheriun', nomRed : 'ETH', precio : 2937.68},
{id : 5, nombre : 'Luna', nomRed : 'LUNA', precio : 91.33},
{id : 6, nombre : 'Mana', nomRed : 'MANA', precio : 2.01},
{id : 7, nombre : '', nomRed : 'SLP', precio : 0.02},
{id : 8, nombre : '', nomRed : 'SOL', precio : 100.94}
];




function CargarMonedas(){
x=document.getElementsByClassName("moned"); 
    for(var i = 0; i < x.length; i++){
    document.getElementsByClassName("moned")[i].innerHTML= monedas[i].precio;
};
};
CargarMonedas();






const btn = document.getElementById("ingresarDinero");

btn.addEventListener("click",
function(){  
depo =  parseFloat(prompt("Cuanto dinero se depositara?"));
impor = impor + depo;
document.getElementsByClassName("import")[0].innerHTML= impor;
imporMon = imporMon + depo
document.getElementsByClassName("import")[1].innerHTML= imporMon;
}); 


const misMonedas = [];

class cripto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.acum   =  0;
        this.seMuestra = 0;
    }


    
    comprar(y) { 
        this.seMuestra = this.seMuestra + 1;        
        cBtc =  parseFloat(prompt("Cuantos Cripto quieres comprar?(en pesos)"+`${monedas[y].nomRed}`));
        if(imporMon >= cBtc){           
        this.acum = this.acum  + ((cBtc/usd) / monedas[y].precio);
        cargarMisMonedas(y);
        document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum;  
        imporMon = imporMon - cBtc;
        document.getElementsByClassName("import")[1].innerHTML= imporMon;
        }else{alert("No tiene suficiente dinero en su cuenta")};        
        ;}

        vender(y){
        cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)"));
        if(this.acum >= ((cBtc/usd) / monedas[y].precio)){
            this.acum = this.acum  - ((cBtc/usd) / monedas[y].precio);
            document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum;   
            imporMon = imporMon + cBtc;
            document.getElementsByClassName("import")[1].innerHTML= imporMon;           
           if(misMonedas[y].acum == 0){this.seMuestra = -1; cargarMisMonedas(y); this.seMuestra =  0;};
           
            }else{alert("No tiene suficiente dinero en su cuenta")};      
          };
        };
    


   


for(let y=0; y < monedas.length; y++){   
misMonedas.push(new cripto(monedas[y].nomRed,monedas[y].precio));
 };


function cargarMisMonedas(o){

const Cripto = document.getElementById("Cripto");

if((misMonedas[o].acum > 0)&&(misMonedas[o].seMuestra == 1)){
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${monedas[o].nomRed}  </span> <span class="${monedas[o].nomRed}">0.00000</span>                    
                     <span><button onclick="comprarCripto(${o})">COMPRAR</button></span>
                     <span><button onclick="venderCripto(${o})">VENDER</button></span>`;
 Cripto.append(parrafo);};
 

 if(misMonedas[o].seMuestra == -1){
   
                         elemento = document.getElementsByClassName(`${monedas[o].nomRed}`)[0]
                         padre = elemento.parentNode;
                         padre2 = padre.parentNode;
                          padre2.removeChild(padre);
 };
};




let k = 0; 
const Cripto2 = document.getElementById("Cripto2");
for (const moneda of monedas) {  
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${moneda.nomRed}  </span><span>${moneda.precio}   </span>                    
                     <span><button onclick="comprarCripto(${k})">COMPRAR</button></span>
                     <span><button onclick="venderCripto(${k})">VENDER</button></span>`;
 Cripto2.append(parrafo);
 k++;
};


function comprarCripto(y){
    misMonedas[y].comprar(y);
};
function venderCripto(y){
    misMonedas[y].vender(y);
};   


function sub(){
    let ConvertPeso = 0;
    let resultCambio = 0;
    let monACam = document.getElementById("monCam").value;
    ConvertPeso = document.getElementById("peso").value;  
    switch (monACam){
        case 'UNI':  resultCambio = ((ConvertPeso / usd) / monedas[0].precio);  break;
        case 'BTN':  resultCambio = ((ConvertPeso / usd) / monedas[1].precio);  break;
        case 'DAI':  resultCambio = ((ConvertPeso / usd) / monedas[2].precio);  break;
        case 'ETH':  resultCambio = ((ConvertPeso / usd) / monedas[3].precio);  break;
        case 'LUNA': resultCambio = ((ConvertPeso / usd) / monedas[4].precio);  break;
        case 'MANA': resultCambio = ((ConvertPeso / usd) / monedas[5].precio);  break;
        case 'SLP':  resultCambio = ((ConvertPeso / usd) / monedas[6].precio);  break;
        case 'SOL':  resultCambio = ((ConvertPeso / usd) / monedas[7].precio);  break;
        case 'USD':  resultCambio = ConvertPeso / usd;               break;
        };

    document.getElementById("resul").value = resultCambio;

};




