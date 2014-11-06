var game;
var Phaser;
window.states = window.states || {};

window.states.playState = {
	preload: function() {
		game = window.game || {};
		Phaser = window.Phaser || {};
	},

	create: function() {},

	update: function() {}
};