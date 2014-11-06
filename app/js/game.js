var Phaser = window.Phaser || {};
// We initialising Phaser
var game = new Phaser.Game(1000, 680, Phaser.AUTO, 'gameDiv');

//Define our 'global variable'
game.global = {};

game.chainProperties = {}; //Used For Different Chains (Attack, defense, etc)

//Add all the states
game.state.add('boot', window.states.bootState);
game.state.add('load', window.states.loadState);
game.state.add('menu', window.states.menuState);
game.state.add('play', window.states.playState);
game.state.add('victory', window.states.victoryState);


//Start the boot state
game.state.start('boot');