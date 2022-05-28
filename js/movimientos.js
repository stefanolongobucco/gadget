

function ingresaImpor(){
x=document.getElementsByClassName("import"); 
    for(var i = 0; i < x.length; i++){
        document.getElementsByClassName("import")[i].innerHTML= localStorage.getItem('balance') || [];;
    };
};

ingresaImpor();

const btn = document.getElementById("ingresarDinero");



let k = 0; 
const movimientosCripto = document.getElementById("movimientosCripto");

const movi = movimientos.sort((a,b)=> {return b.orden - a.orden;})


for (const mov of movi) {  
if(mov.nombre != 0){
let parrafo = document.createElement("li");
parrafo.innerHTML = (`<div class="mov_l1"><span>${mov.nombre}  </span><span>${mov.fecha}   </span><span>${mov.importePesos}   </span><span>${mov.importe}   </span></div><div><hr></div>`)||'';
movimientosCripto.append(parrafo);
 k++;
};
};

