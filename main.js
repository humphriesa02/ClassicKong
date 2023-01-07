const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./mario_background.png")
ASSET_MANAGER.queueDownload("./pauline.png")
ASSET_MANAGER.queueDownload("./donkey_kong.png");
ASSET_MANAGER.queueDownload("./mario_run.png");
ASSET_MANAGER.queueDownload("./mario_jump.png");
ASSET_MANAGER.queueDownload("./mario_dance.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Mario(gameEngine));
	
	gameEngine.addEntity(new Pauline(gameEngine));
	
	gameEngine.addEntity(new DonkeyKong(gameEngine));

	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
});
