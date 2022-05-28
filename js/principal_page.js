
let nombre = localStorage.getItem('nombre');

document.getElementById("titulo").innerHTML=nombre[0].toUpperCase() + nombre.slice(1).toLowerCase(); 



function ingresaImpor(){
    x=document.getElementsByClassName("import"); 
        document.getElementsByClassName("import")[0].innerHTML= localStorage.getItem('balance')||0;       
    };
    

ingresaImpor();



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

