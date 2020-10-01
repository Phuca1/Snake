class snake {
    constructor(game) {
        this.game = game;
        this.x = SCREEN_WIDTH / 2;
        this.y = SCREEN_HEIGHT / 2;
        this.angle = 0
    }

    listenMouseEvent() {
        this.game.canvas.addEventListener('mousemove', (event) => {
            // var rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove({
                // x: event.clientX - rect.left,
                // y: event.clientY - rect.top
                x: event.clientX,
                y: event.clientY
            });
        });
    }

    processMouseMove(mousePos) {
        this.angle = Math.atan2(
            mousePos.y-this.y,
            mousePos.x-this.x
        )
    }
}