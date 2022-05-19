
let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7


//localStorage.setItem('balance', 0); 
//localStorage.setItem('balancePesos', 0); 
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance');
    };
};

ingresaImpor();


const monedas = JSON.parse(localStorage.getItem("monedasLocales"));
const misMonedas = JSON.parse(localStorage.getItem("misMonedasLocales"));




function CargarMonedas(){
x=document.getElementsByClassName("moned"); 
    for(var i = 0; i < x.length; i++){
    document.getElementsByClassName("moned")[i].innerHTML= monedas[i].precioCompra;
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


const movimientos = [];


class nuevoMovimiento {
    constructor (moneda, cantidad,pesos) {
        this.nombre = moneda;
        this.fecha = hoy.toLocaleDateString();
        this.importe = cantidad;
        this.importePesos = pesos
    
    }};



    
    
        
 function comprar(y){         
            misMonedas[y].seMuestra = misMonedas[y].seMuestra + 1;   
            muestraMoneda[y].seMuestra = muestraMoneda[y].seMuestra + 1;  
            cBtc =  parseFloat(prompt("Cuantos Cripto quieres comprar?(en pesos)"+`${monedas[y].nomRed}`));
            if(localStorage.getItem('balancePesos') >= cBtc){           
                misMonedas[y].acum = misMonedas[y].acum  + ((cBtc/usd) / monedas[y].precioCompra);                   
                let mostrarAcum =  misMonedas[y].acum                                
                localStorage.setItem("misMonedasLocales", JSON.stringify(misMonedas));  
                cargarMisMonedas(y)
                document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= parseFloat(mostrarAcum); 
                let balancePesos = localStorage.getItem('balancePesos'); 
                localStorage.setItem('balancePesos', parseFloat(balancePesos) - parseFloat(cBtc));
                imporMon = localStorage.getItem('balancePesos');
                document.getElementsByClassName("import")[1].innerHTML= imporMon;
                movimientos.push(new nuevoMovimiento(monedas[y].nombre,parseFloat(((cBtc/usd) / monedas[y].precioCompra)),parseFloat(cBtc)));      
                localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));    
        }else{alert("No tiene suficiente dinero en su cuenta")};        
        };
    
  function vender(y){
        cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)"));
        if(misMonedas[y].acum >= ((cBtc/usd) / monedas[y].precioCompra)){
            misMonedas[y].acum = misMonedas[y].acum  - ((cBtc/usd) / monedas[y].precioCompra);
            document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum; 
            let balancePesos = localStorage.getItem('balancePesos'); 
            localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(cBtc));
            imporMon = localStorage.getItem('balancePesos');
            document.getElementsByClassName("import")[1].innerHTML= imporMon;
            movimientos.push(new nuevoMovimiento(monedas[y].nombre,parseFloat(-((cBtc/usd) / monedas[y].precioCompra)),parseFloat(-cBtc)));
            localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));  
            localStorage.setItem("misMonedasLocales", JSON.stringify(misMonedas)); 

                if(misMonedas[y].acum == 0){ 
                    misMonedas[y].seMuestra =0;   
                    muestraMoneda[y].seMuestra = 0;     
                    borrar(y);  };     

            }else{alert("No tiene suficiente dinero en su cuenta")};      
          };
        
          function comprarCripto(y){
            comprar(y);  
        };
        function venderCripto(y){
            vender(y);
        };  
    
    
        class mostrarMonedas {
            constructor (monedas) {
                this.nombre = monedas;
                this.seMuestra = 0
            
            }};

        const muestraMoneda = []
        for(let y=0; y < monedas.length; y++){  muestraMoneda.push(new mostrarMonedas(monedas[y].nomRed)); };


        
    function cargarMisMonedas(o){
    
    const Cripto = document.getElementById("Cripto");
      
    if((misMonedas[o].acum > 0)&&(((muestraMoneda[o].seMuestra == 0)&&(misMonedas[o].seMuestra >=1))||
    ((muestraMoneda[o].seMuestra == 1)&&(misMonedas[o].seMuestra == 1)))
    ){
    let parrafo = document.createElement("li");
    parrafo.innerHTML = `<span>${monedas[o].nomRed}  </span> <span class="${monedas[o].nomRed}">${misMonedas[o].acum}</span>                    
                         <span><button onclick="comprarCripto(${o})">COMPRAR</button></span>
                         <span><button onclick="venderCripto(${o})">VENDER</button></span>`;
     Cripto.append(parrafo);
     
    };


    }; 



function borrar(o){
   
        elemento = document.getElementsByClassName(`${monedas[o].nomRed}`)[0]
        padre = elemento.parentNode;
        padre2 = padre.parentNode;
         padre2.removeChild(padre);
};


    for(let y=0; y < misMonedas.length; y++){    
                  cargarMisMonedas(y);
        };




let k = 0; 
const Cripto2 = document.getElementById("Cripto2");
for (const moneda2 of monedas) {  
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${moneda2.nomRed}  </span><span>${moneda2.precioCompra}   </span>                    
                     <span><button onclick="comprarCripto(${k})">COMPRAR</button></span>
                     <span><button onclick="venderCripto(${k})">VENDER</button></span>`;
 Cripto2.append(parrafo);
 k++;
};


 






/* class cripto {
    constructor (nombre, precioCompra) {
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.acum   =  0;
        this.seMuestra = 0;
    }


    
    comprar(y) {         
        this.seMuestra = this.seMuestra + 1;        
        cBtc =  parseFloat(prompt("Cuantos Cripto quieres comprar?(en pesos)"+`${monedas[y].nomRed}`));
        if(localStorage.getItem('balancePesos') >= cBtc){           
        this.acum = this.acum  + ((cBtc/usd) / monedas[y].precioCompra);   
        cargarMisMonedas(y);
        document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum; 
        let balancePesos = localStorage.getItem('balancePesos'); 
        localStorage.setItem('balancePesos', parseFloat(balancePesos) - parseFloat(cBtc));
        imporMon = localStorage.getItem('balancePesos');
        document.getElementsByClassName("import")[1].innerHTML= imporMon;
       // movimientos.push(new nuevoMovimiento(monedas[y].nombre,parseFloat(cBtc)));      
      //  localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));   
    }else{alert("No tiene suficiente dinero en su cuenta")};        
    ;}

    vender(y){
    cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)"));
    if(this.acum >= ((cBtc/usd) / monedas[y].precioCompra)){
        this.acum = this.acum  - ((cBtc/usd) / monedas[y].precioCompra);
        document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= misMonedas[y].acum; 
        let balancePesos = localStorage.getItem('balancePesos'); 
        localStorage.setItem('balancePesos', parseFloat(balancePesos) + parseFloat(cBtc));
        imporMon = localStorage.getItem('balancePesos');
        document.getElementsByClassName("import")[1].innerHTML= imporMon;
        movimientos.push(new nuevoMovimiento(monedas[y].nombre,parseFloat(-cBtc)));           
       if(misMonedas[y].acum == 0){this.seMuestra = -1; cargarMisMonedas(y); this.seMuestra =  0;};
       
        }else{alert("No tiene suficiente dinero en su cuenta")};      
      };
    };





for(let y=0; y < monedas.length; y++){   
misMonedas.push(new cripto(monedas[y].nomRed,monedas[y].precioCompra));
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
};  */