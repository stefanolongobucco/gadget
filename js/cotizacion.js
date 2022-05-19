let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7

const monedas = JSON.parse(localStorage.getItem("monedasLocales"));

function ingresaImpor(){
    x=document.getElementsByClassName("import"); 
        for(var i = 0; i < x.length; i++){
            document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance');
        };
    };
    
    ingresaImpor();
    
    
   
    
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



function sub(){
    let ConvertPeso = 0;
    let resultCambio = 0;
    let monACam = document.getElementById("monCam").value;
    ConvertPeso = document.getElementById("peso").value;  
    switch (monACam){
        case 'UNI':  resultCambio = ((ConvertPeso / usd) / monedas[0].precioCompra);  break;
        case 'BTN':  resultCambio = ((ConvertPeso / usd) / monedas[1].precioCompra);  break;
        case 'DAI':  resultCambio = ((ConvertPeso / usd) / monedas[2].precioCompra);  break;
        case 'ETH':  resultCambio = ((ConvertPeso / usd) / monedas[3].precioCompra);  break;
        case 'LUNA': resultCambio = ((ConvertPeso / usd) / monedas[4].precioCompra);  break;
        case 'MANA': resultCambio = ((ConvertPeso / usd) / monedas[5].precioCompra);  break;
        case 'SLP':  resultCambio = ((ConvertPeso / usd) / monedas[6].precioCompra);  break;
        case 'SOL':  resultCambio = ((ConvertPeso / usd) / monedas[7].precioCompra);  break;
        case 'USD':  resultCambio = ConvertPeso / usd;               break;
        };

    document.getElementById("resul").value = resultCambio;

};
