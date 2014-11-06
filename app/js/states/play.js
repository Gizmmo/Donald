var game;
var Phaser;
window.states = window.states || {};

window.states.playState = {
	preload: function() {
		game = window.game || {};
		Phaser = window.Phaser || {};
	},

	create: function() {
		console.log(game.objects.add.player);
		this.player = game.objects.add.player(100, 100, 'player');
	},

	update: function() {}
};