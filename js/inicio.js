
//balance son todos los pesos "depositados"
localStorage.setItem('balance', 0); 

//supuesto precio de dolar en un localstorage
const usd = 202.7
localStorage.setItem('usd', usd); 


const monedas = [];

const loading= document.getElementById("loading");  
               
class nuevaCripto {
    constructor (id,nombre,simbolo, precio,porcentaje) {
        this.id = id;
        this.nombre = nombre,
        this.nomRed = simbolo;
        this.precioCompra = precio*1.04;
        this.precioVenta = precio;
        this.porcentaje = porcentaje;
        this.seMuestra = 0
    
    }};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
		'X-RapidAPI-Key': '63539a1735msh4ae34747772ee92p12dc71jsn8ff25b94ec8b'
	}
};


fetch('https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100', options)
	.then(response => response.json())
	.then(response => {
        for (const moneda of response.data){
            monedas.push(new nuevaCripto(moneda.id,moneda.name,moneda.symbol,moneda.price_usd,moneda.percent_change_24h));
                   }
            //carga de las monedas en un localstorage para poder usarlo en el resto de los js
            localStorage.setItem("monedasLocales", JSON.stringify(monedas));            
            loading.classList.remove('show');
            loading.remove();
            console.log("todo ok")
    })
	.catch(err => { alert("fallo la api con los valores de las criptos. se setean valores inventados");        
         loading.classList.remove('show');
         loading.remove();
         monedas =[
            {id : 1, nombre : 'Uniswap', nomRed : 'UNI', precioCompra : 8.97, precioVenta : 7.56, seMuestra: 0, porcentaje: 0.00},
            {id : 2, nombre : 'Bitcoin', nomRed : 'BTN', precioCompra : 39559.94 , precioVenta : 39540.54, seMuestra: 0, porcentaje: 0.00},
            {id : 3, nombre : 'Dai', nomRed : 'DAI', precioCompra : 1 , precioVenta : 1.2 , seMuestra: 0, porcentaje: 0.00},
            {id : 4, nombre : 'Etheriun', nomRed : 'ETH', precioCompra : 2937.68 , precioVenta :2925.54 , seMuestra: 0, porcentaje: 0.00},
            {id : 5, nombre : 'Terra Luna', nomRed : 'LUNA', precioCompra : 91.33 , precioVenta :85.87 , seMuestra: 0, porcentaje: 0.00},
            {id : 6, nombre : 'Decentraland ', nomRed : 'MANA', precioCompra : 2.01 , precioVenta :1.90 , seMuestra: 0, porcentaje: 0.00},
            {id : 7, nombre : 'Smooth Love Potion', nomRed : 'SLP', precioCompra: 0.02 , precioVenta :0.1 , seMuestra: 0, porcentaje: 0.00},
            {id : 8, nombre : 'Solana', nomRed : 'SOL', precioCompra : 100.94 , precioVenta :97.250, seMuestra: 0, porcentaje: 0.00}
            ];
                        //carga de las monedas en un localstorage para poder usarlo en el resto de los js
                        localStorage.setItem("monedasLocales", JSON.stringify(monedas));
    });





//Esta variable se utiliza para cargar todas las compras/ventas de las monedas
const movimientos = [{ nombre : 0, fecha : 0,   importe : 0,  importePesos : 0, orden : 0}]
localStorage.setItem("movimientosLocales", JSON.stringify(movimientos));  



/* --------------------muestra error cuando no se completa nombre y apellido------------------------- */
let test = document.getElementsByClassName("input__inicio")[0]; 

test.onkeydown = () => {  
let test2 =  document.getElementsByClassName("input__inicio")[0].value;     
if(test2.split(' ').length<2){
    let contenido = "<p class='alert__float'>Debe ingresar su nombre y apellido</p>";
    document.getElementsByClassName("div__alert")[0].innerHTML = contenido || '';
    
}else{  
document.getElementsByClassName("div__alert")[0].innerHTML = "";
};};
/* --------------------muestra error cuando no se completa nombre y apellido------------------------- */





/* -------------------------------evento click para iniciar sesion------------------------------------ */
//esto debe pasar siempre y cuando se cargue nombre y apellido
let inicio = document.getElementById("iniciarSesion");  


inicio.onclick = () => {  
    let test2 =  document.getElementsByClassName("input__inicio")[0].value;     
    if(test2.split(' ').length<2){
        let contenido = "<p class='alert__float'>Debe ingresar su nombre y apellido</p>";
        document.getElementsByClassName("div__alert")[0].innerHTML = contenido || '';
        
    }else{  
    let titulo = document.getElementById("pruebaIninicio").value;
    localStorage.setItem('nombre', titulo);    
    location.href="principal_page.html";      };
};

/* -------------------------------evento click para iniciar sesion------------------------------------ */


/* 

var Loading=(loadingDelayHidden=0)=>{
    let loading=null;
    const myLoadingDelayHidden=loadingDelayHidden;
    let imgs=[];
    let lenImgs=0;
    let counterImgsLoading=0;
    function incrementCounterImgs(){
        counterImgsLoading+=1;
        if(counterImgsLoading===lenImgs){
            hideLoading()}}
            
    function hideLoading(){        
        if(loading!==null){
            loading.classList.remove('show');
            setTimeout(function(){loading.remove()},
            myLoadingDelayHidden)}}
            
    function init()
    {document.addEventListener('DOMContentLoaded',
    function(){loading=document.querySelector('.loading');
    imgs=Array.from(document.images);lenImgs=imgs.length;
    if(imgs.length===0){hideLoading()
    }else{imgs.forEach(
        function(img){img.addEventListener('load',incrementCounterImgs,false)})}})}return{'init':init}}



Loading(1000).init(); */