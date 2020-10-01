class screen {
    constructor(game) {
        this.game = game;
        this.top = 0;
        this.bottom = SCREEN_HEIGHT;
        this.left = 0;
        this.right = SCREEN_WIDTH;

    }

    update() {

    }

    drawCircle(pos) {
        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x,
            pos.y,
            50,
            0,
            Math.PI * 2
        )
    }
}