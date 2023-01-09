class DonkeyKongBackground{
    constructor(){
        this.musicPlaying = false;
    }

    update(){
    }
    
    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./donkey_kong_holy_image.jpg"), 0, 0, 768, 480);
    }
}

class Background{
    constructor(){
    }

    update(){

    }

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./mario_background.png"), 0, 0, 768, 480);
    }
}