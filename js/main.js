
let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7


//localStorage.setItem('balance', 0); 
//localStorage.setItem('balancePesos', 0); 


function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance');
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
let balance = localStorage.getItem('balance');
localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[0].innerHTML= impor;
let balancePesos = localStorage.getItem('balancePesos');
localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(depo));
imporMon = localStorage.getItem('balancePesos'); 
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
        if(localStorage.getItem('balancePesos') >= cBtc){           
        this.acum = this.acum  + ((cBtc/usd) / monedas[y].precio);
        cargarMisMonedas(y);
        document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum; 
        let balancePesos = localStorage.getItem('balancePesos'); 
        localStorage.setItem('balancePesos', parseFloat(balancePesos) - parseFloat(cBtc));
        imporMon = localStorage.getItem('balancePesos');
        document.getElementsByClassName("import")[1].innerHTML= imporMon;
        }else{alert("No tiene suficiente dinero en su cuenta")};        
        ;}

        vender(y){
        cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)"));
        if(this.acum >= ((cBtc/usd) / monedas[y].precio)){
            this.acum = this.acum  - ((cBtc/usd) / monedas[y].precio);
            document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum; 
            let balancePesos = localStorage.getItem('balancePesos'); 
            localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(cBtc));
            imporMon = localStorage.getItem('balancePesos');
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






