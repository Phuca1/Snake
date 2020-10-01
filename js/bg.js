class bg {
    constructor(game) {
        this.game = game;
    }


    drawLine(startPos, endPos) {
        this.game.ctx.strokeStyle = 'black';
        this.game.ctx.lineWidth = 20;
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(startPos.x, startPos.y);
        this.game.ctx.lineTo(endPos.x, endPos.y);
        this.game.ctx.stroke();
    }

    drawBorder() {
        this.drawLine(
            { x: 0, y: 0 },
            { x: SCREEN_WIDTH, y: 0 }
        )
        this.drawLine(
            { x: SCREEN_WIDTH, y: 0 },
            { x: SCREEN_WIDTH, y: SCREEN_HEIGHT }
        )
        this.drawLine(
            { x: SCREEN_WIDTH, y: SCREEN_HEIGHT },
            { x: 0, y: SCREEN_HEIGHT }
        )
        this.drawLine(
            { x: 0, y: SCREEN_HEIGHT },
            { x: 0, y: 0 }
        )
    }
}