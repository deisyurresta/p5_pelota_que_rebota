class Pelota{
    constructor(){
        this.posx;
        this.posy;
        this.diam;
        this.rad;

        this.velx;
        this.vely;

        this.diam = random(50, 300);
        this.rad = this.diam/2;

        this.posx=random(this.rad, width - this.rad);
        this.posy=random(this.rad, height - this.rad);

        this.velx= random(-5, 5);
        this.vely= random(-5, 5);

        this.nuevoColor = color(random(200, 200), random(250, 15), random(100, 150), 100);
    }

    actualizar(){
        this.posx += this.velx;
        this.posy += this.vely;

        if(this.posx>width - this.rad || this.posx< this.rad){
        this.velx *= -1;
        }
        if(this.posy>height - this.rad || this.posy< this.rad){
        this.vely *= -1;
        }

    }

    visualizar(){
        fill(this.nuevoColor);
        stroke("#8acc10d0");
        strokeWeight(4);
        circle(this.posx, this.posy, this.diam);
}
    
}