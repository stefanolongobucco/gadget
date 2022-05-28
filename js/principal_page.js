/* let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7




const monedas = JSON.parse(localStorage.getItem("monedasLocales"));
  */
/* const mostrarAcum = (y,array)=> {
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
  }; */



let nombre = localStorage.getItem('nombre');

document.getElementById("titulo").innerHTML=nombre[0].toUpperCase() + nombre.slice(1).toLowerCase(); 



function ingresaImpor(){
    x=document.getElementsByClassName("import"); 
        document.getElementsByClassName("import")[0].innerHTML= localStorage.getItem('balance')||0;       
    };
    

ingresaImpor();

/* const btn = document.getElementById("ingresarDinero");

btn.addEventListener("click",() =>{  
depo = 1;// parseFloat(prompt("Cuanto dinero se depositara?")) || 0;
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
const Cripto2 = document.getElementById("Cripto2");

const mone = monedas.sort((a,b)=> {return b.seMuestra - a.seMuestra;})

for (let i = 0; i <15; i++) {  
let parrafo = document.createElement("li");
if(mone[i].porcentaje >=0){
    parrafo.innerHTML = `<div class="monD"><span>${mone[i].nombre} <span class="monP">${mone[i].porcentaje}</span></span><span>${mone[i].nomRed}</span> </div>   <div class="precio"><span>${mone[i].precioCompra}   </span><span>${mone[i].precioVenta}   </span></div>`;
}else{parrafo.innerHTML = `<div class="monD"><span>${mone[i].nombre} <span class="monN">${mone[i].porcentaje}</span></span><span>${mone[i].nomRed}</span> </div> <div class="precio"><span>${mone[i].precioCompra}   </span><span>${mone[i].precioVenta}   </span></div>`;}

 Cripto2.append(parrafo);
 k++;
};

