var game;
var Phaser;
window.states = window.states || {};

window.states.loadState = {
	preload: function() {
		game = window.game || {};
		Phaser = window.Phaser || {};
		this.createLoadScreen(); //Creates the load screen to watch.  This must be first

		//Loads all needed Assets
		this.loadImageAssets();
		this.loadSpritesheetAssets();
		this.loadTilesetAssets();
		this.loadAudioAssets();

	},

	create: function() {
		this.loadNextState();
	},

	createLoadScreen: function() {
		//Add a loading... label on the screen
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
			font: '30px Arial',
			fill: '#fffff'
		});
		loadingLabel.anchor.setTo(0.5, 0.5);

		//Display the progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);
	},
	loadAudioAssets: function() {
		game.load.audio('select', ['assets/sounds/select.ogg', 'assets/sounds/select.mp3']);
		game.load.audio('next', ['assets/sounds/next.ogg', 'assets/sounds/next.mp3']);
		game.load.audio('damage', ['assets/sounds/laserload.ogg', 'assets/sounds/laserload.mp3']);
		game.load.audio('explosion', ['assets/sounds/explosive.ogg', 'assets/sounds/explosive.mp3']);
		game.load.audio('showdown', ['assets/sounds/showdown.ogg', 'assets/sounds/showdown.mp3']);
		game.load.audio('use', ['assets/sounds/use.ogg', 'assets/sounds/use.mp3']);
		game.load.audio('theme', ['assets/sounds/theme.ogg', 'assets/sounds/theme.mp3']);
	},

	loadImageAssets: function() {
		//Load a new asset that we will use in the menu state
		game.load.image('background', 'assets/background.png');
		game.load.image('abilityCommand', 'assets/YellowCircle.png');
		game.load.image('abilityWithQuantity', 'assets/YellowCircleWithQuantity.png');
		game.load.image('redCommand', 'assets/RedCircle.png');
		game.load.image('blueCommand', 'assets/BlueCircle.png');
		game.load.image('greenCommand', 'assets/GreenCircle.png');
		game.load.image('priceLabel', 'assets/RedLabel.png');
		game.load.image('nextButton', 'assets/BlackLabel.png');
		game.load.image('blackTile', 'assets/BlackSquare.png');
		game.load.image('whiteTile', 'assets/WhiteSquare.png');
		game.load.image('redTile', 'assets/RedSquare.png');
		game.load.image('blueTile', 'assets/BlueSquare.png');
		game.load.image('greenTile', 'assets/GreenSquare.png');
		game.load.image('upArrow', 'assets/Up.png');
		game.load.image('downArrow', 'assets/Down.png');
	},

	loadNextState: function() {
		game.state.start('menu');
	},

	loadSpritesheetAssets: function() {
	},

	loadTilesetAssets: function() {

	},

};