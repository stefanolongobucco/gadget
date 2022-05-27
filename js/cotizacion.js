let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7

const monedas = JSON.parse(localStorage.getItem("monedasLocales") || []);

function ingresaImpor(){
    x=document.getElementsByClassName("import"); 
        for(var i = 0; i < x.length; i++){
            document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance') || [];
        };
    };
    
    ingresaImpor();
    
    
   
    
    function CargarMonedas(){
    x=document.getElementsByClassName("moned"); 
        for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("moned")[i].innerHTML= monedas[i].precioCompra ||[];
    };
    };
    CargarMonedas();
    
    
    
    
    const btn = document.getElementById("ingresarDinero");

    btn.addEventListener("click",() =>{  
    depo =  parseFloat(prompt("Cuanto dinero se depositara?")) || 0;
    if (depo > 0){
    let balance = localStorage.getItem('balance');
    localStorage.setItem('balance', parseFloat(balance) + parseFloat(depo));
    impor = localStorage.getItem('balance');
    document.getElementsByClassName("import")[0].innerHTML= impor;
    document.getElementsByClassName("import")[1].innerHTML= ((parseFloat(impor)||0)-(parseFloat(acumPesos(movimientos))||0));
    }else{alert("El importe no puede ser 0 ni menor a 0")};  
    }); 

    
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
for (const moneda2 of monedas) {  
let parrafo = document.createElement("li");
parrafo.innerHTML = `<span>${moneda2.nomRed}  </span><span>${moneda2.precioCompra}   </span>                    
                     <span><button onclick="comprarCripto(${k})">COMPRAR</button></span>
                     <span><button onclick="venderCripto(${k})">VENDER</button></span>`;
 Cripto2.append(parrafo);
 k++;
};