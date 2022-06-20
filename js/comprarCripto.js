

const title = localStorage.getItem("tipAcc");
const monID = localStorage.getItem("idMon");
const impConv = localStorage.getItem("impConv");


if(impConv!==0){
document.getElementById("fondo").value = `${impConv}`;
let resultCambio = 0;
resultCambio = ((impConv / usd) / monedas[monID].precioCompra);  
document.getElementById("cantidCambio").innerHTML = `=${parseFloat(resultCambio) || 0} ${monedas[monID].nomRed}`;
}
document.getElementsByClassName("titleCV")[0].innerHTML = `${title} ${monedas[monID].nomRed}`;


document.getElementsByClassName("fondosCV")[0].addEventListener("click",() =>{ 
    document.getElementById("fondo").value=(parseFloat(localStorage.getItem('balance')) - (parseFloat(acumPesos(movimientos)) ||0 )) ||0;
           
        var monCam2 = monedas[monID].nomRed;   
        let convert = document.getElementById("fondo").value;              
        const i = monedas.findIndex( (element) => element.nomRed == monCam2);
        let resultCambio = 0;
        resultCambio = ((convert / usd) / monedas[i].precioCompra);  
        document.getElementById("cantidCambio").innerHTML = `=${parseFloat(resultCambio) || 0} ${monCam2}`;
        
    
});    



let convert = document.getElementById("fondo"); 
convert.onkeyup = () => {         
    var monCam2 = monedas[monID].nomRed;   
    let convert = document.getElementById("fondo").value;              
    const i = monedas.findIndex( (element) => element.nomRed == monCam2);
    let resultCambio = 0;
    resultCambio = ((convert / usd) / monedas[i].precioCompra);  
    document.getElementById("cantidCambio").innerHTML = `=${parseFloat(resultCambio) || 0} ${monCam2}`;
    
};







function comprarC(y){  
    monedas[y].seMuestra ++;  
    cBtc =  document.getElementById("fondo").value ||0;
    if (cBtc > 0){
    if((localStorage.getItem('balance')-(parseFloat(acumPesos(movimientos)||0))) >= cBtc){  
        movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(((cBtc/usd) / monedas[y].precioCompra)),parseFloat(cBtc)));                
        ingresaImpor();
        localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));
        localStorage.setItem("monedasLocales", JSON.stringify(monedas));    
        location.href="wallet.html";       
}else{//alert("No tiene suficiente dinero en su cuenta")
    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'No tiene suficiente dinero en su cuenta!'
      })

};        
}else{//alert("El importe no puede ser 0 ni menor a 0")
    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'El importe no puede ser 0 ni menor a 0!'
      })

};   
};

function venderC(y){
cBtc =  document.getElementById("fondo").value || 0;
if (cBtc > 0){
if(parseFloat(mostrarAcum(y,movimientos)||0) >= ((cBtc/usd) / monedas[y].precioVenta)){   
    movimientos.push(new nuevoMovimiento(monedas[y].nomRed,monedas[y].nombre,parseFloat(-((cBtc/usd) / monedas[y].precioVenta)),parseFloat(-cBtc)));                       
    localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));  
    ingresaImpor();
        if(parseFloat(mostrarAcum(y,movimientos)||0) == 0){ 
            monedas[y].seMuestra =0;    
            localStorage.setItem("monedasLocales", JSON.stringify(monedas));       
            borrar(y);  
        };     
location.href="wallet.html"; 
    }else{alert("No tiene suficiente dinero en su cuenta")};    
}else{alert("El importe no puede ser 0 ni menor a 0")};    
  };





  document.getElementsByClassName("realizarCV")[0].addEventListener("click",() =>{ 
 if(title == 'Comprar'){
    comprarC(monID); 
 }
 if(title == 'Vender'){
    venderC(monID); 
 }
  });



