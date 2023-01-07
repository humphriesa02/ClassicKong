class Background{
    constructor(){
    }

    update(){

    }

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./mario_background.png"), 0, 0, 768, 480);
    }
}