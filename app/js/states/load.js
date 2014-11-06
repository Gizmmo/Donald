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
	loadAudioAssets: function() {},

	loadImageAssets: function() {
		//Load a new asset that we will use in the menu state
		game.load.image('player', 'assets/RedSquare.png');
		game.load.image('nextButton', 'assets/BlackLabel.png');


	},

	loadNextState: function() {
		game.state.start('menu');
	},

	loadSpritesheetAssets: function() {},

	loadTilesetAssets: function() {

	},

};