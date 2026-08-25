const canvas = document.getElementById("universo");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const estrellas = [];

const cantidad = 400;



for(let i=0;i<cantidad;i++){

    estrellas.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radio:Math.random()*2+0.3,

        velocidad:Math.random()*0.4+0.1,

        brillo:Math.random()

    });

}



function dibujar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);



    for(const estrella of estrellas){



        ctx.beginPath();

        ctx.arc(

            estrella.x,

            estrella.y,

            estrella.radio,

            0,

            Math.PI*2

        );



        ctx.fillStyle="rgba(255,255,255,"+estrella.brillo+")";

        ctx.fill();



        estrella.y+=estrella.velocidad;



        if(estrella.y>canvas.height){

            estrella.y=0;

            estrella.x=Math.random()*canvas.width;

        }

    }



    requestAnimationFrame(dibujar);

}



dibujar();



window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});