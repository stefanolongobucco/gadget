
localStorage.setItem('balance', 0); 
localStorage.setItem('balancePesos', 0); 

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