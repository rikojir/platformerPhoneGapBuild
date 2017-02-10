/* Initialize Phaser */
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

/* Define out global variable for the score */
game.global = {
    score: 0
};

/* Add all the states */
game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('load', loadState);

/* Start the boot state */
game.state.start('boot');

