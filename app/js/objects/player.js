(function() {

	var game = window.game || {};
	var Phaser = window.Phaser || {};
	/**
	 * Player Class
	 */
	var Player = function(x, y, texture) {
		var _this = this;
		this.sprite = undefined;

		/**
		 * Constructor
		 * @param  {String} name Players Name
		 * @param  {int} x    The X coordinate to place text at
		 * @param  {int} y    The Y coordinate to place text at
		 */
		var _initalize = function() {

		};

		this.preload = function() {

		};

		this.create = function() {
			this.sprite = game.add.sprite(x, y, texture);
			this.sprite.scale.x = 0.2;
			this.sprite.scale.y = 0.2;
		};

		this.update = function() {

		};

		this.movePlayer = function() {
			
		}


		_initalize(); //Call constructor
	};

	game = game || {};
	game.objects = game.objects || {};
	game.objects.add = game.objects.add || {};
	game.player = Player; //Attach to objects scope
	game.objects.add.player = function(x, y, texture) {
		var player = new Player(x, y, texture);
		player.preload();
		player.create();
		return player;
	};

})();