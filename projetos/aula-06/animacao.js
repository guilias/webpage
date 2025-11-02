let canvas = document.getElementById('animation-canvas');
let ctx = canvas.getContext('2d')


class Retangulo{
    constructor(cor, x, y, largura, altura){
    this.cor = cor;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;}

    desenha(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let quadrado = new Retangulo('blue', 135, 135, 30, 30);

function loopAnimacao(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    quadrado.desenha(ctx)

    requestAnimationFrame(loopAnimacao)
}

addEventListener ('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    //iguala as posições e deixa o centro do quadrado alinhado ao ponteiro do mouse
    quadrado.x = x_mouse - quadrado.largura / 2;
    quadrado.y = y_mouse - quadrado.altura / 2;

    //limita o 'movimento' do quadrado para as bordas do canvas
    quadrado.x = Math.min(Math.max(quadrado.x, 0), canvas.width - quadrado.largura);
    quadrado.y = Math.min(Math.max(quadrado.y, 0), canvas.height - quadrado.altura);
});

loopAnimacao()