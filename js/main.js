/* 
let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = localStorage.getItem("usd")







//se declaran estas variables para poder cargar la fecha de los movimientos
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12:"false"};
const movimientos =  JSON.parse(localStorage.getItem("movimientosLocales"))  || []; */



/* class nuevoMovimiento {
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
      };  */



//carga los pesos depositados
function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    document.getElementsByClassName("import")[0].innerHTML= localStorage.getItem('balance')||0;
    document.getElementsByClassName("import")[1].innerHTML= (parseFloat(localStorage.getItem('balance')) - (parseFloat(acumPesos(movimientos)) ||0 )) ||0;

};

ingresaImpor();

/* 
const monedas = JSON.parse(localStorage.getItem("monedasLocales")) || []; */


/*  for (const moneda2 of monedas) {
    let j = 0;
    if(moneda2.seMuestra > 1){monedas[j].seMuestra = 1};

};  */


function CargarMonedas(){
x=document.getElementsByClassName("moned"); 
    for(var i = 0; i < x.length; i++){
    document.getElementsByClassName("moned")[i].innerHTML= monedas[i].precioCompra;
};
};
CargarMonedas();






const btn = document.getElementById("realPed");

btn.addEventListener("click",() =>{  
impor = localStorage.getItem('balance');
document.getElementsByClassName("import")[1].innerHTML= ((parseFloat(impor)||0)-(parseFloat(acumPesos(movimientos))||0));
}); 
 

    
        
/*  function comprar(y){  
            monedas[y].seMuestra ++;  
            cBtc =  parseFloat(prompt("Cuantos Cripto quieres comprar?(en pesos)"+`${monedas[y].nomRed}`)) ||0;
            if (cBtc > 0){
            if((localStorage.getItem('balance')-(parseFloat(acumPesos(movimientos)||0))) >= cBtc){  
                movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(((cBtc/usd) / monedas[y].precioCompra)),parseFloat(cBtc)));      
                let muestrarAcum = parseFloat(mostrarAcum(y,movimientos)||0);                             
                cargarMisMonedas(y);                  
                document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= parseFloat(muestrarAcum) ||0; 
                ingresaImpor();
                localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));
                localStorage.setItem("monedasLocales", JSON.stringify(monedas));              
        }else{alert("No tiene suficiente dinero en su cuenta")};        
    }else{alert("El importe no puede ser 0 ni menor a 0")};   
    };
    
  function vender(y){
        cBtc =  parseFloat(prompt("Cuantos Criptos quieres vender?(en pesos)")) || 0;
        if (cBtc > 0){
        if(parseFloat(mostrarAcum(y,movimientos)||0) >= ((cBtc/usd) / monedas[y].precioCompra)){   
            movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(-((cBtc/usd) / monedas[y].precioCompra)),parseFloat(-cBtc)));         
            document.getElementsByClassName(`${monedas[y].nomRed}`)[0].innerHTML= parseFloat(mostrarAcum(y,movimientos)||0) ||'';                 
            localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));  
            ingresaImpor();
                if(parseFloat(mostrarAcum(y,movimientos)||0) == 0){ 
                    monedas[y].seMuestra =0;    
                    localStorage.setItem("monedasLocales", JSON.stringify(monedas));       
                    borrar(y);  };     

            }else{alert("No tiene suficiente dinero en su cuenta")};    
        }else{alert("El importe no puede ser 0 ni menor a 0")};    
          };
        
          function comprarCripto(y){
            comprar(y);  
        };
        function venderCripto(y){
            vender(y);
        };  
     */
    
    
        
        let j = 0;
        for (const moneda2 of monedas) { 
          if(moneda2.seMuestra > 1){monedas[j].seMuestra = 1};
          j++;
      
      }; 
      
  
        function cargarMisMonedas(o){
      
          const Cripto = document.getElementById("Cripto");
          if((monedas[o].seMuestra==1))
          {    
          let acum = parseFloat(mostrarAcum(o,movimientos)||0)
          let parrafo = document.createElement("li");
          parrafo.innerHTML = `<span>${monedas[o].nomRed}  </span> <span class="${monedas[o].nomRed}">${acum}</span>                    
                               <button class = "botonC1" onclick="comprarCripto(${o})">COMPRAR</button>
                               <button class = "botonC2" onclick="venderCripto(${o})">VENDER</button>`;
           Cripto.append(parrafo);
           
          };
          }; 



function borrar(o){
   
        elemento = document.getElementsByClassName(`${monedas[o].nomRed}`)[0]
        padre = elemento.parentNode;
        padre2 = padre.parentNode;
         padre2.removeChild(padre);
};


    for(let y=0; y < monedas.length; y++){    
                  cargarMisMonedas(y);
        };




/* let k = 0; 
const Cripto2 = document.getElementById("Cripto2");
for (const moneda2 of monedas) {  
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${moneda2.nomRed}  </span><span>${moneda2.precioCompra}   </span>                    
                     <span><button onclick="comprarCripto(${k})">COMPRAR</button></span>
                     <span><button onclick="venderCripto(${k})">VENDER</button></span>`;
 Cripto2.append(parrafo);
 k++;
};
 */

