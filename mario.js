class Mario{
    constructor(game){
        this.game = game;
        this.movingRight = true;
        this.isJumping = false;
        this.jumpStart = 0;
        this.jumpFactor = 98;
        this.speed = 2;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./mario_run.png"),
         0, 0, 48, 48, 4, 0.2);
        this.posX = 0;
        this.posY = 395;
    }

    update(){
        console.log(this.posY);
        // Moving right
        if(this.posX == 470 && this.posY == 116){
            this.speed = 0;
            this.animator.spritesheet = ASSET_MANAGER.getAsset("./mario_dance.png");
            this.animator.frameCount = 9;
            this.animator.totalTime = this.animator.frameCount * this.animator.frameDuration;
        }
        if (this.posX < 710 && this.movingRight && !this.isJumping){
            this.posX += this.speed;
            //this.setAnimation(ASSET_MANAGER.getAsset("./mario_background.png"),
            //0, 0, 160, 160, 1, 0.2);
        }
        // Moving left
        else if(this.posX >= 30 && !this.movingRight && !this.isJumping){
            this.posX -= this.speed;
        }
        // Beginning jump
        else if ((this.posX >= 710 || this.posX <= 30) && !this.isJumping) {
            this.jumpStart = this.posY;
            this.isJumping = true;
            this.movingRight = !this.movingRight;
            this.animator.spritesheet = ASSET_MANAGER.getAsset("./mario_jump.png");
            this.animator.frameCount = 12;
            this.animator.totalTime = this.animator.frameCount * this.animator.frameDuration;
            
        }
        else if (this.isJumping && this.posY >= this.jumpStart-this.jumpFactor && this.movingRight){
            console.log("Jumping ")
            this.posX += (this.speed - 1);
            this.posY -= (this.speed - 0.5);
        }
        else if (this.isJumping && this.posY >= this.jumpStart-this.jumpFactor && !this.movingRight){
            this.posX -= (this.speed - 1);
            this.posY -= (this.speed - 0.5);
        }
        // Ending jump
        else{
            this.animator.spritesheet = ASSET_MANAGER.getAsset("./mario_run.png");
            this.animator.frameCount = 4;
            this.animator.totalTime = this.animator.frameCount * this.animator.frameDuration;
            this.jumpFactor-=6;
            this.isJumping = false;
        }
    }

    draw(ctx){
        if(!this.movingRight){ // Flipped
            ctx.scale(-1, 1);
            this.animator.drawFrame(this.game.clockTick, ctx, -this.posX, this.posY)
            ctx.restore();
        }
        else{
            this.animator.drawFrame(this.game.clockTick, ctx, this.posX, this.posY);
        }
    }
}