const canvas = document.getElementById('canvas');

canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid black';
const ctx = canvas.getContext('2d');
let lineCollections = [];



class Line {
    constructor(ctx, config) {
        this.ctx = ctx;
        this.x = config.x;
        this.y = config.y;
        this.my = 0;
        this.speed = 5;
        this.direction = 1;

    }

    draw() {
        this.ctx.strokeRect(this.x, this.y, 1, 50);
    }

    update() {
        let randomY = Math.random() * 100;
        this.my += this.speed * this.direction;
        this.my += randomY;

        if (this.my + 20 > canvas.height) {
            this.my = -70;
        }

        this.y = this.my;
        this.draw();
    }

    renderText() {
        this.ctx.font = '50px Arial';
        this.ctx.strokeText('Rain Forest', canvas.width / 4, canvas.height / 2);
    }
}

for (let i = 20; i < 1000; i += 40) {
    let line = new Line(ctx, { x: i, y: 20 });
    lineCollections.push(line);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lineCollections.forEach((line) => {
        line.update();
        line.renderText();
    });

    requestAnimationFrame(animate);
}

animate();