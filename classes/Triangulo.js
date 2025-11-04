class Triangulo {
  constructor() {
    this.posx = random(100, width - 100);
    this.posy = random(100, height - 100);

    this.size = random(40, 50); // tamaño del triángulo

    this.velx = random(-3, 3);
    this.vely = random(-3, 3);

    this.angulo = random(TWO_PI);   // ángulo inicial
    this.velAngulo = random(-0.05, 0.05); // velocidad de rotación

    this.nuevoColor = color(random(10, 10), random(50, 15), random(100, 150), 150);
  }

  actualizar() {
    this.posx += this.velx;
    this.posy += this.vely;
    this.angulo += this.velAngulo; // ← rota

    if (this.posx > width - this.size || this.posx < this.size) {
      this.velx *= -1;
    }
    if (this.posy > height - this.size || this.posy < this.size) {
      this.vely *= -1;
    }
  }

  visualizar() {
    push(); // guardamos el sistema de coordenadas

    translate(this.posx, this.posy); // movemos el lienzo al triángulo
    rotate(this.angulo);             // rotamos el triángulo

    fill(this.nuevoColor);
    stroke("#8acc1d");
    strokeWeight(4);

    triangle(
      0, -this.size,              // punta arriba
      -this.size, this.size,      // esquina izq
      this.size, this.size        // esquina der
    );

    pop(); // restauramos el sistema de coordenadas original
  }
}
