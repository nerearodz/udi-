const musica = document.getElementById("musica");
const texto = `

Saludos, Agente.

Soy AXIOM.

La inteligencia artificial encargada de preservar
el conocimiento matemático.

Un virus ha destruido las propiedades de las estructuras algebraicas.

Necesitamos recuperar seis núcleos.

Cada núcleo representa una propiedad fundamental.
Si una propiedad se pierde, el siguiente núcleo deja de funcionar.
Por eso solamente podrán avanzar demostrando que comprendieron realmente cada estructura.
Cada nivel desbloquea el siguiente mediante un hipervínculo

Solo entonces podremos restaurar el sistema.

`;

const boton = document.getElementById("btnComenzar");

const inicio = document.getElementById("inicio");

const historia = document.getElementById("historia");

const textoIA = document.getElementById("textoIA");


const continuar = document.getElementById("continuar");

boton.onclick=()=>{ 
    
inicio.classList.add("oculto");

historia.classList.remove("oculto");
escribir();

}

function escribir(){

let i=0;

const intervalo=setInterval(()=>{

textoIA.innerHTML+=texto.charAt(i);

i++;

if(i==texto.length){

clearInterval(intervalo);

}

},35);

}

continuar.onclick=()=>{

window.location="lci.html";

}