

function ingresaImpor(){
    x=document.getElementsByClassName("import"); 
        document.getElementsByClassName("import")[0].innerHTML= localStorage.getItem('balance')||0;       
    };
    
    ingresaImpor();
    
    
   

    
    const monCam = document.getElementById("monCam");
    for (const moneda2 of monedas) {  
    let parrafo = document.createElement("option");
    parrafo.innerHTML = `${moneda2.nomRed}`;
    monCam.append(parrafo);
    };
    



    let convert = document.getElementById("peso"); 

    convert.onkeyup = () => {          
        var monCam2 = document.getElementById("monCam").value;   
        let convert = document.getElementById("peso").value;              
        const i = monedas.findIndex( (element) => element.nomRed == monCam2);
        let resultCambio = 0;
        resultCambio = ((convert / usd) / monedas[i].precioCompra);  
        document.getElementById("resul").value = parseFloat(resultCambio) || 0;
        
};




let k = 0;  
const Cripto2 = document.getElementById("Cripto2");
for (const moneda of monedas) {  
let parrafo = document.createElement("li");
if(moneda.porcentaje >=0){
    parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monP">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div>   <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div><span><button  id="realCom2" onclick="comprarCripto(${k})">COMPRAR</button></span>`;
}else{parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monN">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div> <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div><span><button  id="realCom2" onclick="comprarCripto(${k})">COMPRAR</button></span>`;}

 Cripto2.append(parrafo);
 k++;
};



function borrar(){   
    x=document.getElementsByClassName("monD");
    u=x.length;
    for(let i = 0; i< u;i++){      
    elemento = document.getElementsByClassName("monD")[0];
    padre = elemento.parentNode;    
    padre2 = padre.parentNode;
     padre2.removeChild(padre);
    };
};



let test = document.getElementsByClassName("buscarCripto")[0]; 
test.onkeyup = () => {  
borrar();
let test2 =  document.getElementsByClassName("buscarCripto")[0].value;     
let k = 0;  
const Cripto3 = document.getElementById("Cripto2");
for (const moneda of monedas) {    
        let crip =  moneda.nombre.toUpperCase();
        let posicion = crip.indexOf(test2.toUpperCase());        
    if (posicion !== -1){
let parrafo = document.createElement("li");
if(moneda.porcentaje >=0){
    parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monP">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div>   <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div><span><button  id="realCom2" onclick="comprarCripto(${k})">COMPRAR</button></span>`;
}else{parrafo.innerHTML = `<div class="monD"><span>${moneda.nombre} <span class="monN">${moneda.porcentaje}</span></span><span>${moneda.nomRed}</span> </div> <div class="precio"><span>${moneda.precioCompra}   </span><span>${moneda.precioVenta}   </span></div><span><button  id="realCom2" onclick="comprarCripto(${k})">COMPRAR</button></span>`;}

Cripto3.append(parrafo);

}; k++; 
};
};





