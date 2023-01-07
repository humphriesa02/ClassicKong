class DonkeyKong{
    constructor(game){
        this.game = game;
        this.movingRight = true;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./donkey_kong.png"),
         0, 0, 96, 128, 3, 0.2);
        this.posX = 84;
        this.posY = 32;
    }

    update(){
    }

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.posX, this.posY);
        
    }
}