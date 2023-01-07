class Pauline{
    constructor(game){
        this.game = game;
        this.movingRight = true;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./pauline.png"),
         0, 0, 45, 66, 10, 0.2);
        this.posX = 330;
        this.posY = 15;
    }

    update(){
    }

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.posX, this.posY)
    }
}