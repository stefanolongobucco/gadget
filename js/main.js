


//carga los pesos depositados




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




