const NP = 200;
let pelotas = [];

const P = 100;
let triangulos = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
  
    for(let i = 0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota;
    }

    for(let i = 0; i < P; i++){
        let nuevoTriangulo = new Triangulo();
        triangulos[i] = nuevoTriangulo;
    }
}

function draw(){
    background(150);
     for(let i = 0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }  
    
    for(let i = 0; i < P; i++){
        triangulos[i].actualizar();
        triangulos[i].visualizar();
    }  
}
