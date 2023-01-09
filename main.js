const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// Images
ASSET_MANAGER.queueDownload("./donkey_kong_holy_image.jpg");
ASSET_MANAGER.queueDownload("./mario_background.png")
ASSET_MANAGER.queueDownload("./pauline.png")
ASSET_MANAGER.queueDownload("./donkey_kong.png");
ASSET_MANAGER.queueDownload("./mario_run.png");
ASSET_MANAGER.queueDownload("./mario_jump.png");
ASSET_MANAGER.queueDownload("./mario_dance.png");

// Music 
ASSET_MANAGER.queueDownload("./DK_Rap.mp3")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ASSET_MANAGER.autoRepeat("./DK_Rap.mp3")

	gameEngine.addEntity(new Mario(gameEngine));
	
	gameEngine.addEntity(new Pauline(gameEngine));
	
	gameEngine.addEntity(new DonkeyKong(gameEngine));

	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.addEntity(new DonkeyKongBackground(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
});
