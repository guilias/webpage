let canvas_02 = document.getElementById('my-canvas-02');
let ctx2 = canvas_02.getContext('2d')


//retangulos
ctx2.closePath();
ctx2.fillStyle = 'blue';
ctx2.fillRect(10, 10, 70, 70);

ctx2.fillStyle = 'red';
ctx2.fillRect(320, 10, 70, 70);

ctx2.fillRect(150, 200, 50, 50);

ctx2.fillStyle = 'aqua';
ctx2.fillRect(10, 160, 40, 80)
ctx2.fillRect(350, 180, 40, 40)

ctx2.fillStyle = 'yellow';
ctx2.fillRect(10, 310, 40, 80)
ctx2.fillRect(10, 350, 80, 40)

ctx2.fillStyle = 'black';
ctx2.fillRect(350, 310, 40, 80)
ctx2.fillRect(310, 350, 80, 40)

ctx2.closePath();

//linhas
ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(200, 200);
ctx2.lineTo(80, 80);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'red';
ctx2.moveTo(200, 200);
ctx2.lineTo(320, 80);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0, 200);
ctx2.lineTo(400, 200);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'black';
ctx2.moveTo(200, 200);
ctx2.lineTo(200, 390);
ctx2.stroke();
ctx2.closePath()



//linhas de arcos
ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.arc(200, 200, 90, 0, 1 * Math.PI, true);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.arc(200, 200, 110, 0, 1.75 * Math.PI, true);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.arc(200, 200, 110, 1 * Math.PI, 1.25 * Math.PI);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.arc(200, 390, 100, 1.5 * Math.PI, 1 * Math.PI, true);
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.strokeStyle = 'green';
ctx2.arc(200, 390, 80, 1.5 * Math.PI, 1 * Math.PI);
ctx2.stroke();
ctx2.closePath()

//arcos
ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'blue';
ctx2.arc(200, 150, 20, 0 * Math.PI, 2 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(100, 300, 20, 0 * Math.PI, 2 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(300, 300, 20, 0 * Math.PI, 2 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

ctx2.beginPath()
ctx.lineWidth = 10;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'green';
ctx2.arc(200, 390, 60, 0 * Math.PI, 1 * Math.PI, true);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

//define borda
ctx2.beginPath();
ctx2.strokeStyle = 'black';
ctx2.strokeRect(10, 10, 380, 380);
ctx2.closePath()
