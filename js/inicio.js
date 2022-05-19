
localStorage.setItem('balance', 0); 
localStorage.setItem('balancePesos', 0); 
const monedas =[
    {id : 1, nombre : 'Uniswap', nomRed : 'UNI', precioCompra : 8.97, precioVenta : 7.56},
    {id : 2, nombre : 'Bitcoin', nomRed : 'BTN', precioCompra : 39559.94 , precioVenta : 39540.54},
    {id : 3, nombre : 'Dai', nomRed : 'DAI', precioCompra : 1 , precioVenta : 1.2 },
    {id : 4, nombre : 'Etheriun', nomRed : 'ETH', precioCompra : 2937.68 , precioVenta :2925.54 },
    {id : 5, nombre : 'Terra Luna', nomRed : 'LUNA', precioCompra : 91.33 , precioVenta :85.87 },
    {id : 6, nombre : 'Decentraland ', nomRed : 'MANA', precioCompra : 2.01 , precioVenta :1.90 },
    {id : 7, nombre : 'Smooth Love Potion', nomRed : 'SLP', precioCompra: 0.02 , precioVenta :0.1 },
    {id : 8, nombre : 'Solana', nomRed : 'SOL', precioCompra : 100.94 , precioVenta :97.250}
    ];

    localStorage.setItem("monedasLocales", JSON.stringify(monedas));
    
let test = document.getElementsByClassName("input__inicio")[0]; 

test.onkeydown = () => {  
let test2 =  document.getElementsByClassName("input__inicio")[0].value;     
if(test2.split(' ').length<2){
    let contenido = "<p class='alert__float'>Debe ingresar su nombre y apellido</p>";
    document.getElementsByClassName("div__alert")[0].innerHTML = contenido;
    
}else{  
document.getElementsByClassName("div__alert")[0].innerHTML = "";
};};


let inicio = document.getElementById("iniciarSesion"); 
   
inicio.onclick = () => {  
    let test2 =  document.getElementsByClassName("input__inicio")[0].value;     
    if(test2.split(' ').length<2){
        let contenido = "<p class='alert__float'>Debe ingresar su nombre y apellido</p>";
        document.getElementsByClassName("div__alert")[0].innerHTML = contenido;
        
    }else{  
    let titulo = document.getElementById("pruebaIninicio").value;
    localStorage.setItem('nombre', titulo);    
    location.href="principal_page.html";  
    };
};




class cripto {
    constructor (nombre, precioCompra) {
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.acum   =  0;
        this.seMuestra = 0;
    }
};

const misMonedas = []

for(let y=0; y < monedas.length; y++){   
    
    misMonedas.push(new cripto(monedas[y].nomRed,monedas[y].precioCompra));
    };
    
    localStorage.setItem("misMonedasLocales", JSON.stringify(misMonedas));


