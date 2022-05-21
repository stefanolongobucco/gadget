
//balance son todos los pesos "depositados"
localStorage.setItem('balance', 0); 

//supuesto precio de dolar en un localstorage
const usd = 202.7
localStorage.setItem('usd', usd); 

const monedas =[
    {id : 1, nombre : 'Uniswap', nomRed : 'UNI', precioCompra : 8.97, precioVenta : 7.56, seMuestra: 0},
    {id : 2, nombre : 'Bitcoin', nomRed : 'BTN', precioCompra : 39559.94 , precioVenta : 39540.54, seMuestra: 0},
    {id : 3, nombre : 'Dai', nomRed : 'DAI', precioCompra : 1 , precioVenta : 1.2 , seMuestra: 0},
    {id : 4, nombre : 'Etheriun', nomRed : 'ETH', precioCompra : 2937.68 , precioVenta :2925.54 , seMuestra: 0},
    {id : 5, nombre : 'Terra Luna', nomRed : 'LUNA', precioCompra : 91.33 , precioVenta :85.87 , seMuestra: 0},
    {id : 6, nombre : 'Decentraland ', nomRed : 'MANA', precioCompra : 2.01 , precioVenta :1.90 , seMuestra: 0},
    {id : 7, nombre : 'Smooth Love Potion', nomRed : 'SLP', precioCompra: 0.02 , precioVenta :0.1 , seMuestra: 0},
    {id : 8, nombre : 'Solana', nomRed : 'SOL', precioCompra : 100.94 , precioVenta :97.250, seMuestra: 0}
    ];
//carga de las monedas en un localstorage para poder usarlo en el resto de los js
localStorage.setItem("monedasLocales", JSON.stringify(monedas));

//Esta variable se utiliza para cargar todas las compras/ventas de las monedas
const movimientos = [{ nombre : 0, fecha : 0,   importe : 0,  importePesos : 0}]
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

